$(document).ready(function() {
  $(".barChart__barFill").css("height",$(".barChart__barHeader").css("height"));
  $(".barChart__barFill div").css("height", $(".barChart__barHeader").css("height"));
});

function init(selector){
  var barChart = $(selector);
  $(".barChart__barFill",barChart).each(function(i,el){
    var fill = $(el).data("fill");
    var color = $(el).data("color");
    console.log(color);
    $(el).html(`<div></div>`);
    $(el).children().first().css("width",fill + "%");
  });
}

init(".barChart");

// GENERAL SETTING
window.sr = ScrollReveal({ reset: true });

// Custom Settings
sr.reveal('.foo-1', { duration: 200 });

sr.reveal('.foo-2', { 
  origin: 'right', 
  duration: 2000 
});

sr.reveal('.foo-3', { 
  rotate: { x: 100, y: 100, z: 0 },
  duration: 1000
});

sr.reveal('.foo-4', { 
  viewFactor: 0.5
});

sr.reveal('.foo-5', { 
  duration: 200 
});

