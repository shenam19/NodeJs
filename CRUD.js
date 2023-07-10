// Creating file
const fs = require("fs");
let myText =
  "This is the text content\nThis is the second line\nThis is the third line\nThis is the fourth line\nThis is the fifth line\nThis is the six line\nThis is the seven line";
fs.writeFile("my_text.txt", myText, (err) => {
  if (err) throw err;
  console.log("Success....");
});

//Read file

fs.readFile("my_text.txt", (err, data) => {
  if (err) throw err;
  console.log(String(data));
});

//update file

fs.readFile("my_text.txt", (err, data) => {
  if (err) throw err;
  var oldString = String(data);
  oldString =
    "This is the text content\nThis is the third line\nThis is the fourth line\nThis is the fifth line\nThis is the six line\nThis is the seven line";
  fs.writeFile("converted.txt", oldString, (err) => {
    if (err) throw err;
    console.log("Success....");
  });
});

// Creating file

let myText2 = "This file will deleted";
fs.writeFile("delete_file.txt", myText2, (err) => {
  if (err) throw err;
  console.log("Success....");
});

//delete file

fs.unlink("delete_file.txt", (err) => {
  if (err) throw err;
  console.log("File deleted!!!");
});
