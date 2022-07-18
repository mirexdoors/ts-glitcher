var _a;
// TODO write glitch fuction
var fs = require('fs');
var file = (_a = process.argv.slice(2)) === null || _a === void 0 ? void 0 : _a[0];
if (!file) {
    throw Error('No file in arguments');
}
// function to encode file data to base64 encoded string
var base64_encode = function (file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return Buffer.from(bitmap).toString('base64');
};
// function to create file from base64 encoded string
var base64_decode = function (base64str, file) {
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    var bitmap = Buffer.from(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
    console.log('******** File created from base64 encoded string ********');
};
// convert image to base64 encoded string
var base64str = base64_encode(file);
// convert base64 string back to image
base64_decode(base64str, "glitched_".concat(file));
console.log('Done!');
