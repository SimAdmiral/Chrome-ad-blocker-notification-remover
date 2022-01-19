function reddenPage() {
  //document.body.style.backgroundColor = 'red';
  //document.body.class = 'test';

  //let element = document.getElementById('gsr');
  // removing class
let element = document.body;
element.setAttribute('class' , 'value')


 var elms = document.querySelectorAll('div[style*="display: block"]')

 Array.prototype.forEach.call(elms, function(elm) {
  elm.remove()
});
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage
  });
});
