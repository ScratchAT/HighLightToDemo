// ==UserScript==
// @name         HighLightToDemo
// @namespace    https://github.com/ScratchAT/HighLightToDemo/
// @version      1.0
// @description  try to take over the world!
// @updateURL    https://github.com/ScratchAT/HighLightToDemo/raw/master/hltd.user.js
// @author       herohamp
// @match        https://scratch.mit.edu/*
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @grant        none
// ==/UserScript==

$("a.thumbnail-image").mouseover(
  function() {

  if (!$(this).attr("active")){

    $(this).html('<iframe src="https://phosphorus.github.io/app.html?id='+this.getAttribute('href').replace('/projects/',"").replace("/","")+'&turbo=false&full-screen=true"style=top:0;bottom:0;left:0;right:0;height:100%;width:100%></iframe>');
$(this).attr( "active", "Beijing Brush Seller" );
} 

  }
);
