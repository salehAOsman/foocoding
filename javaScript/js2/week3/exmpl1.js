
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/test', true);
xhr.onload = function () {
  console.log(xhr.responseURL); // http://example.com/test
};
xhr.send(null);