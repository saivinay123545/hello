const { Builder, By, key, until } = require("selenium-webdriver");
const dotenv = require("dotenv");
dotenv.config();

const driver = new Builder().forBrowser("chrome").build();

async function LoginpageTest() {
  try {
    // for login page

    const url =
      "https://staging.community.fabric.microsoft.com/t5/user/loginpage";

    await driver.get(url);

    const username = await driver.findElement(By.name("login"));

    const password = await driver.findElement(By.name("password"));

    await username.sendKeys(`${process.env.NAME}`);

    await password.sendKeys(`${process.env.PASSWORD}`);

    await driver.findElement(By.name("form_0")).submit();

    const title = await driver.getTitle();

    //create the dropdown button to select "Desktop" option

    const dropdown = await driver.findElement(
      By.className(
        "lia-js-menu-opener default-menu-option lia-js-click-menu lia-link-navigation"
      )
    );

    await dropdown.click();

    const desktop = await driver.findElement(
      By.className("board-dropdown-item lia-board-rd-discussion1")
    );

    await desktop.click();

    const newMessage = await driver.findElement(
      By.partialLinkText("New Message")
    );

    await newMessage.click();

    // for entering Subject

    const date = new Date();

    const day = date.getDate();

    const month = date.getMonth() + 1; // Months are zero-based, so add 1

    const year = date.getFullYear();

    const hours = date.getHours();

    const minutes = date.getMinutes();

    const seconds = date.getSeconds();

    const formattedDate = `${year}:${month}:${day}`;

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const text = `saivinay-${formattedDate}-${formattedTime}`;

    const subject = await driver.findElement(By.name("subject"));

    await driver.sleep(2000);

    await subject.sendKeys(text);

    // finding body

    const body = await driver.findElement(By.id("mceu_40"));

    const iframe = await body.findElement(By.tagName("iframe"));

    await driver.switchTo().frame(iframe);

    const paragraphElement = await driver.findElement(By.tagName("p"));

    await paragraphElement.sendKeys(text);

    await driver.sleep(2000);

    await driver.switchTo().defaultContent();

    // adding label

    const labelList = await driver.findElement(By.id("list_0"));

    const generalCommentOption = await labelList.findElement(
      By.xpath(".//a[contains(text(), 'General Comment')]")
    );

    await generalCommentOption.click();

    // Add "General Comment" label to selected labels

    const selectedLabelsInput = await driver.findElement(By.id("lia-labels"));

    await selectedLabelsInput.sendKeys("");

    await driver.sleep(3000);

    //   submitting post

    const postBtn = await driver.findElement(By.id("submitContext_1"));

    await postBtn.click();

    await driver.sleep(3000);

    //  selecting drop down

    const dropmenu = await driver.findElement(By.className("selected-values"));

    await dropmenu.click();

    await driver.sleep(2000);

    const dropul = await driver.findElement(By.className("commnity-panel"));

    const checkboxes = await dropul.findElements(By.css(".check-box"));

    for (let i = 0; i < 4; i++) {
      await checkboxes[i].click();
    }

    await driver.sleep(1000);

    const syndicate = await driver.findElement(By.id("btn-post"));

    await syndicate.click();

    await driver.sleep(4000);

    const btnproceed = await driver.findElement(By.id("btn-proceed"));

    btnproceed.click();

    await driver.sleep(3000);

    const finalok = await driver.findElement(
      By.className("btn-ok alert-popup-close lia-button lia-button-primary")
    );

    finalok.click();

    await driver.sleep(10000);

    const checkStatus = await driver.findElement(By.id("btn-status"));

    checkStatus.click();

    await driver.sleep();
  } finally {
    console.log("over");
  }
}

LoginpageTest();

//    const bodyDiv = await driver.findElement(By.id("mceu_40"));

//    const iframe = await bodyDiv.findElement(By.tagName("iframe"));

//    await driver.switchTo().frame(iframe);

//    const paraElement = await driver.findElement(By.tagName("p"));

//    paraElement.sendKeys(text);

//   going back to default driver

//    await driver.switchTo().defaultContent();

// finding label and selecting label element

//  const lab = await driver.findElement(By.id("fieldset_0_2"));

//  const fieldset = await lab.findElement(By.tagName("fieldset"));

//  const labelseditor = await fieldset.findElement(By.className("lia-js-labels-editor"));

//  const predefined = await labelseditor.findElement(By.className("predefined-labels"));

//  const ulfinding = await predefined.findElement(By.tagName("ul"));

//  const an = await ulfinding.findElement(By.css('li #link_15'));

//  await an.click();
