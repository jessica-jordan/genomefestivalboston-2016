var Reveal = require('reveal');
var highlight = require('highlight.js'); // Highlight code
var chartFactory = require('./js/chartFactory.js');


//Init pretty HTML Code Example Markup
// require('./js/markup.js');

// Full list of configuration options available here: 
// https://github.com/hakimel/reveal.js#configuration 
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  // default/cube/page/concave/zoom/linear/fade/none 
  transition: 'none'
});

//Bind Events
Reveal.addEventListener( 'slidechanged', chartFactory.slideChange);
Reveal.addEventListener( 'ready', chartFactory.slideChange);

//Init Highlighting
highlight.initHighlighting();

//Init Graph
require('./js/graph.js');



//Css checkbox example
var ch = document.getElementsByClassName("cssCheck");
var target = document.getElementById("cssTarget");

function handleClick(e){
    
    var el = e.srcElement;
    var prop = el.value.split(':');
    
    if(el.checked){
        target.style[prop[0]] = prop[1];
    }else{
        target.style[prop[0]] = null;
    }
}

for(var i=0; i<ch.length; i++)
    ch[i].addEventListener("click", handleClick);

//Objects in the DOM can be manipulated by JavaScript example
function changeTitle(){
    var title = document.getElementById("slideTitle");
    title.innerText = "See?? JS can manipulate dom objects";
}

document.getElementById("titleButton").addEventListener("click", changeTitle);