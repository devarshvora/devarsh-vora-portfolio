import fs from 'node:fs';
import {getDocument} from './qa/node_modules/pdfjs-dist/legacy/build/pdf.mjs';
for(const file of fs.readdirSync('tmp/resumes').filter(f=>f.endsWith('.pdf'))){
 const doc=await getDocument({data:new Uint8Array(fs.readFileSync('tmp/resumes/'+file))}).promise;
 console.log(file);
 for(let i=1;i<=doc.numPages;i++){
  const t=await (await doc.getPage(i)).getTextContent();
  console.log(t.items.map(x=>x.str).join(' '));
 }
}
