function setup(){
  noCanvas();

  let backgroundPage = chrome.extension.getBackgroundPage();
  let word = backgroundPage.wordIQ;

  let wordInQuestion = select("#wordInQuestion");
  wordInQuestion.html(word);
}
