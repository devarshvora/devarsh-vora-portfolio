import { chromium } from './qa/node_modules/playwright/index.mjs';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage();
await page.goto('http://127.0.0.1:5180/',{waitUntil:'networkidle'});
await page.waitForTimeout(3500);
for(const width of [1440,1280,1024,768,430,375]){
 await page.setViewportSize({width,height:900});
 const entry=page.locator('#skills .experience-rail').first().locator('..');
 await entry.scrollIntoViewIfNeeded();
 await page.waitForTimeout(1300);
 if(width===375||width===1280) await page.screenshot({path:`tmp/experience-view-${width}.png`});
 const cta=page.getByRole('link',{name:/Explore More Projects/});
 await cta.scrollIntoViewIfNeeded();
 await page.waitForTimeout(1000);
 console.log(JSON.stringify(await cta.evaluate(e=>({width:innerWidth,ctaHeight:e.offsetHeight,neighborHeight:e.previousElementSibling.offsetHeight,href:e.href,target:e.target,overflow:document.documentElement.scrollWidth>innerWidth}))));
 if(width===375||width===1280) await page.screenshot({path:`tmp/cta-view-${width}.png`});
}
await browser.close();
