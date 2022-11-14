
// jQuery(function($) {
//     console.log("start")
//     $.get("extras\slogans.txt", function(wholeTextFile) {
//        console.log(wholeTextFile)
//     //   var lines = wholeTextFile.split(/\n/),
//     //     randomIndex = Math.floor(Math.random() * lines.length),
//     //     randomLine = lines[randomIndex];
//     //   console.log(randomIndex, randomLine)
//     //   $("#ajax").html(randomLine.replace(/#/g,"<br>"))
//     })
//   })


// ************************************* Functions  *************************************

document.getElementById ("groupA").addEventListener ("click", groupA, false);
document.getElementById ("groupB").addEventListener ("click", groupB, false);
document.getElementById ("groupAB").addEventListener ("click", groupAB, false);
document.getElementById ("groupO").addEventListener ("click", groupO, false);

function groupA() {
   
  document.querySelector(".some").classList.remove("img","gB", "gAB", "gO");
  document.querySelector(".some").classList.add("gA");

  // var image = document.getElementById("composition");
    
  // image.src = "/images/Group A1.png";
  // image.classList.add("pic");
}


// var image1 = document.querySelectorAll("img")[2];
// image1.setAttribute("src", "/images/group A.png");

function groupB(){

  document.querySelector(".some").classList.remove("img","gA", "gAB", "gO");
  document.querySelector(".some").classList.add("gB");

    // const image = document.getElementById("composition");
    //     image.src = "/images/Group B1.png";
    //     image.classList.add("pic");
}

function groupAB(){

  document.querySelector(".some").classList.remove("img","gB", "gA", "gO");
  document.querySelector(".some").classList.add("gAB");

    // var image = document.getElementById("composition");
    // image.src = "/images/Group AB1.png";
    // image.classList.add("pic");
}

function groupO(){

  document.querySelector(".some").classList.remove("img","gB", "gAB", "gA");
  document.querySelector(".some").classList.add("gO");

    // var image = document.getElementById("composition");
    // image.src = "/images/Group O1.png";
    // image.classList.add("pic");
}

// function group(){
//     document.getElementById("composition").src = "/images/group.png"
// }
