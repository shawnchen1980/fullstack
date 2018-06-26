const puppeteer = require('puppeteer');
test('this is the first test',()=>{
    expect(1+1).toEqual(2);
});
test('we launch a browser',async ()=>{
    const browser = await puppeteer.launch({
        executablePath: './chromium/chrome.exe',
        headless: false
      });
      //done();
      const page = await browser.newPage();
      await page.goto('localhost:3000');
      await page.setCookie({name:'session1',value:"eyJwYXNzcG9ydCI6eyJ1c2VyIjoie1widXNlcm5hbWVcIjpcImFkZmRzZlwiLFwicGFzc3BvcnRcIjpcImFhYVwiLFwib3JpZ2luXCI6XCJsb2NhbFwifSJ9fQ=="});
      await page.setCookie({name:'session1.sig',value:"2vwfsNYp7MzcmujH2TfjEeaqz2Y"});

      await page.goto('localhost:3000');
    //   done();
    //   //await page.screenshot({path: 'music.png'});
    //console.log(await page.content());
      //await browser.close();
    //   done();
},15000)