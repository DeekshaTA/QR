/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {message:"Type in your url",
    name:"url"},
  ])
  .then((answers) => {
    const URL=answers.url;
    var qr_svg = qr.image(URL);
qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("url.txt",URL,(err)=>{if(err) throw err;
    console.log("the file has been saved");});
  })
  
 
 
