/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//document.querySelector('button').addEventListener('click', function() {
//  document.querySelector('.content').style.height= 'auto';
//  this.style.display= 'none';
//});

var button = document.querySelectorAll('button');

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
  document.querySelector('.content').style.height= 'auto';
  this.style.display= 'none';
    });
}
