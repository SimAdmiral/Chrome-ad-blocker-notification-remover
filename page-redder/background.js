function reddenPage() {
  //document.body.style.backgroundColor = 'red';
  //document.body.class = 'test';

  //let element = document.getElementById('gsr');
  // removing class
let element = document.body;
element.setAttribute('class' , 'value')


 //var elms = document.querySelectorAll('div[style*="border: solid"]')
 var elms = document.querySelectorAll('div[style*="display: block"]')

 Array.prototype.forEach.call(elms, function(elm) {
  elm.remove()
});

  /* // Get all elements that have a style attribute
  //var elms = document.querySelectorAll("*[style]");
  var elms = document.querySelectorAll("div*[id=notify-header]");
  elms[0].style.border = "10px solid red";
elms[0].style.border="solid"

  // Loop through them
Array.prototype.forEach.call(elms, function(elm) {
    // Get the color value
    elm.backgroundColor("blue");
    var clr = elm.style.display || "";
    document.write("sadasd!")
    // Remove all whitespace, make it all lower case
    //clr = clr.replace(/\s/g, "").toLowerCase();

    // Switch on the possible values we know of
switch (clr) {
  case "#333":
  case "#333333":
  case "rgb(51,51,51)": // <=== This is the one Chrome seems to use
  case "block":
    document.write("sadasd!")
    break;
}
}); */



}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage
  });
});



//  element.classList.remove('srp');
//element.removeItem('class')
/* chrome.extension.getBackgroundPage().console.log('Testing');
chrome.extension.getBackgroundPage().console.log('hello');
const log = chrome.extension.getBackgroundPage().console.log;
log('something') */