let filenames = [
  "blue.png",
  "red.png",
  "colors/green.png",
  "colors/black.png"
];

let imgs = document.getElementsByTagName("img");

for(img of imgs){
  let element = Math.floor(Math.random() * filenames.length);
  let pic = filenames[element];
  let url = chrome.extension.getURL(pic);
  img.src = url;
  console.log(url);
}
