function add(){
  var coloFav="";
var color=prompt("what's your faviourt color");
coloFav="<h3 style='color:red;text-align:center;'>My faviourt color is "+color+"</h3>";
return coloFav;
}
function cities(){
var firstCity=prompt("which city would you like to visit , first city is :");
var secondCity=prompt("which city would you like to visit , second city is :");
var both=firstCity+" , "+secondCity;
var result="";
result="<h2 style='color:blue;text-align:center;'>I'd like to visit both "+both+" cities</h3>";
return result;
}
function sum(){
var num1=prompt("Input any num you want to Multiply,first num:");
var num2=prompt("Input any num you want to Multiply,second num:");
var num3=num1 * num2;
var newNum="";
newNum="<h2 style='color:brown;text-align:center;'>The value of num3 variable is "+num3+"</h3>";
return newNum;
}


function name(){
var name=prompt("what's your name");
var age=prompt("what's your age");
alert("welcome to my website "+name);
var result="";

  if(age>=20){
 result="<h1 style='color:green;text-align:center;'>Hello "+name+" how are you ,and "+age+" year is a nice age.</h1><h2 style='color:blue;text-align:center;'>your age is elder than 20</h2>";
}else{
    result="<h1 style='color:green;text-align:center;'>Hello "+name+" how are you ,and "+age+" year is a nice age.</h1><h2 style='color:blue;text-align:center;'>your age is less than 20</h2>";
}

    return result;

}

function hobbyOption(){
  var fav=prompt("Which hobby do you want to know more about it ?");
  var option="";
if(fav=="art"){
option="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Art-portrait-collage_2.jpg/330px-Art-portrait-collage_2.jpg' class='cent'><div class='text'>Art is a diverse range of (products of) human activities involving creative imagination to express technical proficiency, beauty, emotional power, or conceptual ideas.</div>";
}else if(fav=="sports"){
  option ="<img src='https://ec.europa.eu/eurostat/documents/6921402/9104237/Shutterstock_Lisa_Kolbasa.png/f988f8b6-4138-4a91-9761-885bacab0ce2?t=1533725002000' class='cent'><div class='text'>It doesn’t matter what sport you do. Exercising in general develops self-discipline, patience, and helps bounce back from disappointment. Team sports create opportunities to improve leadership, communication, and interpersonal skills, too</div>";
}else if(fav=="travel"){
  option ="<img src='https://ugolini.co.th/wp-content/uploads/2021/03/89195-complete-guide-of-travel-sites-where-you-can-find-every-detail-of-traveling.jpg' class='cent'><div class='text'>Curiosity, courage, and self-organization. Traveling can prove you’re not afraid of stepping outside your comfort zone and learning new things. And flexibility and adaptability are among the most important workplace personal traits.</div>";
}else{
  option ="<h2 style='color:red'>Sorry but you have to chooes at least one hobby from these ...(art ,travel ,sports)</h2> ";
}

 return option ;
}



var hobbyPractice=function(){
  
var questionOne=prompt("What's your faviourt hobby");
while(questionOne !== "art" && questionOne !=="sport" && questionOne !=="travel" && questionOne !=="marketing" ){
  alert("It's unavailabe hobby");
  questionOne=prompt("Please try another hobby from these options (art , travel , sport , marketing )");
}

var userHoppy=prompt("How many times do you do your hobby a week?");

var back="";

      back="<h2 style='color:green;text-align:center;'>The "+questionOne+" is a nice hobby</h2>";
for(var i=0 ; i<userHoppy;i++){
  if(userHoppy>7){
    userHoppy=7;
  }
      if (questionOne=="art"){
back +="<img src='https://cdn3.iconfinder.com/data/icons/abstract-1/512/Art-512.png' class='img1'>";  }
  else if (questionOne=="travel"){
back +="<img src='https://image.flaticon.com/icons/png/512/1841/1841630.png' class='img1' >";
  }else if (questionOne=="sport"){
back +="<img src='https://icon-library.com/images/sports-icon/sports-icon-13.jpg' class='img1'>";
  }else{
back +="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uaY8hs0EZ5tGKGEwswJ_czcdFGdBi4qCYA&usqp=CAU'  class='img1'>";
  }
}
return back;

}
