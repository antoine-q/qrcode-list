# QRCode list generator

This little project aims to help you transform a list of elements into a collection of QRCodes into SVG format.
This can be useful for generating tags for your shop.

## How to use it ?

simply run 

```bash
$ npm install
```
to install dependencies.

After add a file called `data.json` containing the json list of string you want to convert into QRCodes.
For now the wanted key needed into the json objects is "url". The program will search for key called "url" and it will convert the value into QRcodes.

When your data is ready, create a directory called `result` your QRCodes will be created inside.

When everything is done simply run :

```bash
$ node ./index.js
```

The program will create the QRCodes.

## Troubleshooting

If something is not clear or not working, let me know ! :)

## license
MIT