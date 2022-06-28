function ajax(src, callback) {

    // If you want run Ajax without express server
    // you will mayby encounter the problem "XMLHttpRequest is not defined"
    // Because the XMLHttpRequest type is natively supported in web browsers only.
    // It is not part of Node, but it can be installed as a package using npm.
    // $npm install xmlhttprequest --save
    // fix source: http://zuga.net/articles/node-errors-referenceerror-xmlhttprequest-is-not-defined/

    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;    // for xmlhttprequest
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if( this.readyState === 4 && this.status === 200 ){
            let data = JSON.parse(this.responseText)
            // console.log(data);
            render(data);
        }
    }
    xhr.open("GET", src, true);
    xhr.send();
}
function render(data) {
    // your code here
    // document.createElement() and appendChild() methods are preferred.
    let html = document.createElement('html');
    let body = document.createElement('body');
    let div = document.createElement('div');
    div.id = 'content';
    div.innerHTML = '<p>CreateElement example</p>';

    document.body.appendChild(div);

    //console.log(data);
}
ajax('https://appworks-school.github.io/Remote-Aassigiment-Data/products'
,
function (response) {
    render(response);
}); // you should get product information in JSON format and render data in the page