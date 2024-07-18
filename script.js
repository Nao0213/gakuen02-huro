'use strict'
// ここに JavaScript のコードを書きましょう
const concept = document.getElementById("concept");
 
concept.addEventListener("click", jumpPage);
 
function jumpPage() {  
    location.replace("https://nao0213.github.io/gakuen02-huro//concept/index.html");
}
const bath = document.getElementById("bath");
 
bath.addEventListener("click", jumpPage1);

function jumpPage1() {
    location.replace("file:///c%3A/Users/1609802/Desktop/dig-foundations/final-project-template/ohuro/index.html");
}
const money = document.getElementById("money");
 
money.addEventListener("click", jumpPage2);
 
function jumpPage2() {
    location.replace("file:///c%3A/Users/1609802/Desktop/dig-foundations/final-project-template/money/index.html");
}
    
const access = document.getElementById("access");
 
access.addEventListener("click", jumpPage3);
 
function jumpPage3() {
    location.replace("file:///c%3A/Users/1609802/Desktop/dig-foundations/final-project-template/akusesu/index.html");
}