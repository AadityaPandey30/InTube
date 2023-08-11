let menubtn= document.querySelector(".menu-btn");
let sidebar= document.querySelector(".side-bar");
let videoscontainer = document.querySelector(".videos-container");
var singlevid=document.querySelectorAll(".single-video");

function Abc(){
    sidebar.classList.toggle("resize-sidebar");
    videoscontainer.classList.toggle("widen-videos-container");
}

menubtn.onclick = function(){
    sidebar.classList.toggle("resize-sidebar");
    videoscontainer.classList.toggle("widen-videos-container");
}

// searchbar working
var search= document.querySelector("#search");
var searchbtn= document.querySelector(".search-btn");
var keyword= document.querySelectorAll(".keyword");

searchbtn.addEventListener('click',function(){
    var c=false;
for(var i=0;i<keyword.length;i++)
{   
    if((keyword[i].innerHTML.toLowerCase()).includes(search.value.toLowerCase()))
    {
        singlevid[i].classList.add("found");
        c=true;
    }
    else
    { 
        singlevid[i].classList.remove("found");
    }
}
if(c===false)
alert("Sorry! No search matches");
});

//------Creating comment Box-----
var btn=document.querySelector("#post");
btn.addEventListener('click',function(){
    var comment= document.querySelector("#comment");
    console.log(comment.value);
    var newdiv= document.createElement('div');
    var textnode= document.createTextNode(comment.value);
    newdiv.appendChild(textnode);
});

//-------Color picker------
var color=document.querySelector("#bac-color");
color.addEventListener("input",function(e){
    document.querySelector("body").style.backgroundColor=e.target.value;
    document.querySelector("header").style.backgroundColor=e.target.value;
    document.querySelector(".side-bar").style.backgroundColor=e.target.value;
});


