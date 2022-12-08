let bgTheme = document.getElementById("body");
let bgHeader = document.getElementById("header");
let theme = document.getElementById("theme");
let bgHeading = document.getElementsByTagName("H1");
let bgP = document.getElementsByTagName("p");
let bgH3 = document.getElementsByTagName("H3");
let label = document.getElementsByTagName("label");
let bgH4 = document.getElementsByTagName("H4");
let bgp1 = document.getElementsByTagName("p1");
let b = document.getElementsByTagName("b");
let slider_p = document.getElementsByClassName("slider-p");
var check = 1;

theme.addEventListener("click",themeChange);







function themeChange(){
    if(check == 1){
    bgHeader.style.backgroundColor="red";
    bgTheme.style.backgroundColor = "#121212";
    for(var i = 0, l = bgp1.length; i < l; i++) {
        bgp1[i].style.color ="yellow";
    }
    for(var i = 0, l = bgHeading.length; i < l; i++) {
        bgHeading[i].style.color ="blue";
    }
    
    for(var i = 0, l = bgP.length; i < l; i++) {
        bgP[i].style.color ="yellow";  
    
    }
    for(var i = 0, l = bgH3.length; i < l; i++) {
        bgH3[i].style.color ="blue";
    }
    for(var i = 0, l = bgH4.length; i < l; i++) {
        bgH4[i].style.color ="white";
    }
    for(var i = 0, l = label.length; i < l; i++) {
        label[i].style.color ="blue";
    }
    for(var i = 0, l = b.length; i < l; i++) {
        b[i].style.color ="white";
    }
    for(var i = 0, l = slider_p.length; i < l; i++) {
        slider_p[i].style.color ="white";
    }
    check = 2;
    }
    else if (check ==2){
        
        bgTheme.style.backgroundColor = "white";
        for(var i = 0, l = bgp1.length; i < l; i++) {
            bgp1[i].style.color ="black";
        }
        for(var i = 0, l = bgHeading.length; i < l; i++) {
            bgHeading[i].style.color ="black";
        }
        
        for(var i = 0, l = bgHeading.length; i < l; i++) {
            bgP[i].style.color ="black";  
        
        }
        for(var i = 0, l = bgH3.length; i < l; i++) {
            bgH3[i].style.color ="black";
        }
        for(var i = 0, l = bgH4.length; i < l; i++) {
            bgH4[i].style.color ="black";
        }
        for(var i = 0, l = label.length; i < l; i++) {
            label[i].style.color ="black";
        }
        for(var i = 0, l = b.length; i < l; i++) {
            b[i].style.color ="black";
        }
        for(var i = 0, l = slider_p.length; i < l; i++) {
            slider_p[i].style.color ="black";
        }
        bgHeader.style.backgroundColor="white";
        check = 1;
        }
}
