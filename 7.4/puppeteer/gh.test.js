let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  }, 6000);
  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 15000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 6000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  }, 6000);
});

describe("Github page new tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com");
  });

  test("The title Actions", async () => {
    const product =
      "body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(1) > button";
    await page.waitForSelector(product);
    await page.click(product);
    await page.click(
      "body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(1) > div > div.px-lg-4.border-lg-right.mb-4.mb-lg-0.pr-lg-7 > ul > li:nth-child(1) > a > div > div"
    );
    await page.waitForSelector(
      "body > div.logged-out.env-production.page-responsive.overflow-x-hidden > div.application-main > main > div.overflow-x-hidden.overflow-y-hidden > div > div > div > div.col-12.text-center.text-lg-left.mx-auto.mx-lg-0.py-8.position-relative > h1 > span:nth-child(1)"
    );
    const actualElement = await page.$(
      "body > div.logged-out.env-production.page-responsive.overflow-x-hidden > div.application-main > main > div.overflow-x-hidden.overflow-y-hidden > div > div > div > div.col-12.text-center.text-lg-left.mx-auto.mx-lg-0.py-8.position-relative > h1 > span:nth-child(1)"
    );
    const actual = await page.evaluate(
      (element) => element.textContent,
      actualElement
    );
    expect(actual).toEqual("Automate your workflow");
  }, 6000);

  test("The title Code review", async () => {
    const product =
      "body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(1) > Button";
    await page.waitForSelector(product);
    await page.click(product);
    await page.click(
      "body > div.logged-out.env-production.page-responsive > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(1) > div > div.px-lg-4.border-lg-right.mb-4.mb-lg-0.pr-lg-7 > ul > li:nth-child(6) > a > div > div"
    );
    await page.waitForSelector(
      "body > div.logged-out.env-production.page-responsive > div.application-main > main > div:nth-child(2) > div > div > h1"
    );
    const actualElement = await page.$(
      "body > div.logged-out.env-production.page-responsive > div.application-main > main > div:nth-child(2) > div > div > h1"
    );
    const actual = await page.evaluate(
      (element) => element.textContent,
      actualElement
    );
    expect(actual).toEqual("Write better code");
  }, 6000);

  test("The title Issues", async () => {
    const product =
    "body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(1) > Button";
    await page.waitForSelector(product);
    await page.click(product);
    await page.click(
      "body > div.logged-out.env-production.page-responsive > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(1) > div > div.px-lg-4.border-lg-right.mb-4.mb-lg-0.pr-lg-7 > ul > li:nth-child(7) > a > div > div"
    );
    await page.waitForSelector(
      "body > div.logged-out.env-production.page-responsive > div.application-main > main > div.overflow-hidden.pt-9.position-relative.top-n8.events-none.js-build-in.build-in-animate > div > div.position-absolute.top-0.left-0.width-full.height-full.d-flex.flex-column.flex-justify-center.px-3.events-auto > h1"
    );
    const actualElement = await page.$(
      "body > div.logged-out.env-production.page-responsive > div.application-main > main > div.overflow-hidden.pt-9.position-relative.top-n8.events-none.js-build-in.build-in-animate > div > div.position-absolute.top-0.left-0.width-full.height-full.d-flex.flex-column.flex-justify-center.px-3.events-auto > h1"
    );
    const actual = await page.evaluate(
      (element) => element.textContent,
      actualElement
    );
    expect(actual).toEqual("Project planning for developers");
  }, 6000);
});