window.wordIQ = "<br />";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.text);
  wordIQ = request.text;
});
