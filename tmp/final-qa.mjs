import { chromium } from './qa/node_modules/playwright/index.mjs';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage();
const errors=[];
page.on('pageerror', e=>errors.push(e.message));
await page.goto('http://127.0.0.1:5183/',{waitUntil:'networkidle'});
await page.waitForTimeout(3500);
for(const width of [1280,375]){
 await page.setViewportSize({width,height:900});
 await page.locator('#home').scrollIntoViewIfNeeded();
 await page.screenshot({path:`tmp/final-hero-${width}.png`});
 console.log(await page.getByText('Turning chaos into clarity,',{exact:false}).evaluate(e=>({width:innerWidth,text:e.textContent,overflow:document.documentElement.scrollWidth>innerWidth,paragraphOverflow:e.scrollWidth>e.clientWidth})));
 const logo=page.getByRole('img',{name:'Quintessence Knowledge Services',exact:true});
 await logo.scrollIntoViewIfNeeded();
 await page.waitForTimeout(1100);
 console.log(await logo.evaluate(e=>({background:getComputedStyle(e.parentElement).backgroundColor,size:e.parentElement.offsetWidth,fit:getComputedStyle(e).objectFit})));
 await logo.locator('..').screenshot({path:`tmp/final-qks-${width}.png`});
}
console.log({errors});
await browser.close();
