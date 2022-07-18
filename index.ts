// TODO write glitch fuction
const fs = require('fs');
const file = process.argv.slice(2)?.[0];

type Base64 = string;

if (!file) {
    throw Error('No file in arguments');
}

// function to encode file data to base64 encoded string
const base64_encode = (file: string): Base64 => {
    // read binary data
    const bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return Buffer.from(bitmap).toString('base64');
}

// function to create file from base64 encoded string
const base64_decode = (base64str: Base64, file: string): void => {
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    const bitmap = Buffer.from(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
    console.log('******** File created from base64 encoded string ********');
}

// convert image to base64 encoded string
const base64str = base64_encode(file);
// convert base64 string back to image
base64_decode(base64str, `glitched_${file}`);

console.log('Done!');


