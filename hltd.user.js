// ==UserScript==
// @name         HighLightToDemo
// @namespace    https://github.com/ScratchAT/HighLightToDemo/
// @version      1.1
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

    $(this).html('<script src=https://phosphorus.github.io/embed.js?id='+this.getAttribute('href').replace('/projects/',"").replace("/","")+'&auto-start=true></script>');
$(this).attr( "active", "Beijing Brush Seller" );
} 

  }
);




