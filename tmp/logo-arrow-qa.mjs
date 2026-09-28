import { chromium } from './qa/node_modules/playwright/index.mjs';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage();
await page.goto('http://127.0.0.1:5182/',{waitUntil:'networkidle'});
await page.waitForTimeout(3500);
for(const width of [1280,375]){
 await page.setViewportSize({width,height:900});
 for(const name of ['CyberdomeUSA','Matrices','CrystalVoxx Limited','Deloitte']){
  const logo=page.getByRole('img',{name,exact:true});
  await logo.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1100);
  console.log(await logo.evaluate(e=>({name:e.alt,background:getComputedStyle(e.parentElement).backgroundColor,size:e.parentElement.offsetWidth,fit:getComputedStyle(e).objectFit})));
  await logo.locator('..').screenshot({path:`tmp/logo-${name}-${width}.png`});
 }
 const next=page.getByRole('button',{name:'Next recommendation'});
 await next.scrollIntoViewIfNeeded();
 const track=page.getByLabel('Recommendations',{exact:true});
 const before=await track.evaluate(e=>e.scrollLeft);
 await next.click();
 await page.waitForTimeout(800);
 console.log({width,moved:(await track.evaluate(e=>e.scrollLeft))>before,style:await next.evaluate(e=>({color:getComputedStyle(e).color,font:getComputedStyle(e).fontSize}))});
 await next.locator('..').screenshot({path:`tmp/arrows-${width}.png`});
}
await browser.close();
