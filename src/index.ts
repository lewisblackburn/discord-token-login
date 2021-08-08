import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://discord.com/login");

  await page.evaluate(() => {
    function login(token: string) {
      setInterval(() => {
        // @ts-ignore
        document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.token = `"${token}"`;
      }, 50);
      setTimeout(() => {
        location.reload();
      }, 2500);
    }
    login(""); // token goes here
  });
})();
