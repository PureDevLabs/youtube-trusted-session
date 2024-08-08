import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

const delay = async (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

puppeteer.use(StealthPlugin());

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36';

const options = {
  headless: true,
  devtools: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
};

const browser = await puppeteer.launch(options);
await browser.pages();

const page = await browser.newPage();
page.setDefaultNavigationTimeout(0);

await page.setUserAgent(userAgent);

const url = "https://www.youtube.com/embed/oxujPT-1i48";
page.bringToFront();

const client = await page.createCDPSession();
await client.send("Network.enable");

client.on("Network.requestWillBeSent", (params) => {
  if (params.request.url.includes("/youtubei/v1/player")) {
    const data = JSON.parse(params.request.postData);
    const outout = {
      visitorData: data.context.client.visitorData,
      poToken: data.serviceIntegrityDimensions.poToken,
    };
    console.log(outout);
  }
});

await page.goto(url, { waitUntil: "domcontentloaded" });

await delay(3000);
await page.evaluate((_) => window.stop());

const playButton = await page.$("#movie_player");
await playButton.click();
await delay(1000);
await playButton.click();

await page.setViewport({ width: 1080, height: 1024 });

// await page.screenshot({ path: "yt.png" });
await browser.close();
