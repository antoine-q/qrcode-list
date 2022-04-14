const fs = require("fs");
const qrcode = require("qrcode-generator");
const data = require("./data.json");

const tolower = (str) => str.replace(/\s+/g, "").toLowerCase();

const typeNumber = 6;
const errorCorrectionLevel = "L";
data.forEach((obj) => {
    const qrCode = qrcode(typeNumber, errorCorrectionLevel);

    qrCode.addData(obj.url);
    qrCode.make();
    const codeData = qrCode.createSvgTag();
    const sanitzedTitle = tolower(obj.ref);

    fs.appendFile(`./result/${sanitzedTitle}.svg`, codeData, function (err) {
        if (err) throw err;
        console.log(`${obj.ref} created`);
    });
});
