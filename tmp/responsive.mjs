import { chromium } from './qa/node_modules/playwright/index.mjs';
const browser = await chromium.launch({channel:'chrome', headless:true});
const page = await browser.newPage();
const errors=[];
page.on('pageerror', e=>errors.push(e.message));
await page.goto('http://127.0.0.1:5180/', {waitUntil:'networkidle'});
await page.waitForTimeout(3500);
for(const width of [1440,1280,1024,768,430,375]) {
 await page.setViewportSize({width,height:1000});
 await page.locator('#skills').scrollIntoViewIfNeeded();
 await page.waitForTimeout(1300);
 console.log(JSON.stringify(await page.evaluate(()=>({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,columns:[...document.querySelector('#skills').children[1].children].map(e=>({height:e.offsetHeight,width:e.offsetWidth})), broken:[...document.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src)}))));
 await page.locator('#skills').screenshot({path:`tmp/skills-${width}.png`});
 await page.locator('#projects').scrollIntoViewIfNeeded();
 await page.locator('#projects').screenshot({path:`tmp/projects-${width}.png`});
}
console.log(JSON.stringify({errors}));
await browser.close();
