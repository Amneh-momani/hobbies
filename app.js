

// var color="skyblue";
// document.write("<h3 style='color:red'>My faviourt color is "+color+"</h3>");

// var firstCity="Aqaba , ";
// var secondCity="Irbid";
// var both=firstCity+secondCity;

// document.write("<h2 style='color:blue'>I'd like to visit both "+both+" cities</h3>");

// var num1=10;
// var num2=89;
// var num3=num1 * num2;
// document.write("<h2 style='color:brown'>The value of num3 variable is "+num3+"</h3>");


// var name=prompt("what's your name");
// var age=prompt("what's your age");
// alert("welcome to my website "+name);

// document.write("<h1 style='color:green'>Hello "+name+" how are you ,and "+age+" year is a nice age.</h1>");

// var fav=prompt("what's your faviourt hobby");
// if(fav=="art"){
// document.write("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Art-portrait-collage_2.jpg/330px-Art-portrait-collage_2.jpg'><div>Art is a diverse range of (products of) human activities involving creative imagination to express technical proficiency, beauty, emotional power, or conceptual ideas.</div>")
// }else if(fav=="sports"){
//   document.write("<img src='https://ec.europa.eu/eurostat/documents/6921402/9104237/Shutterstock_Lisa_Kolbasa.png/f988f8b6-4138-4a91-9761-885bacab0ce2?t=1533725002000'><div>It doesn’t matter what sport you do. Exercising in general develops self-discipline, patience, and helps bounce back from disappointment. Team sports create opportunities to improve leadership, communication, and interpersonal skills, too</div>");
// }else if(fav=="travel"){
//   document.write("<img src='https://ugolini.co.th/wp-content/uploads/2021/03/89195-complete-guide-of-travel-sites-where-you-can-find-every-detail-of-traveling.jpg'><div>Curiosity, courage, and self-organization. Traveling can prove you’re not afraid of stepping outside your comfort zone and learning new things. And flexibility and adaptability are among the most important workplace personal traits.</div>");
// }else{
//   document.write("<h2 style='color:red'>Sorry but you have to chooes at least one hobby from these ...(art ,travel ,sports)</h2> ");
// }

// if(age>=20){
//   document.write("<h2 style='color:orange'>your age is elder than 20</h2>");
// }else{
//     document.write("<h2 style='color:orange'>your age is less than 20</h2>");
// }

var questionOne=prompt("What's your faviourt hobby");
while(questionOne !== "art" && questionOne !=="sport" && questionOne !=="travel" && questionOne !=="marketing" ){
  alert("It's unavailabe hobby");
  questionOne=prompt("Please try another hobby from these options (art , travel , sport , marketing )");
}

var userHoppy=prompt("How many times do you do your hobby a week?");


      document.write("<h2 style='color:green;text-align:center;'>The "+questionOne+" is a nice hobby</h2>");
for(var i=0 ; i<userHoppy;i++){
  if(userHoppy>7){
    userHoppy=7;
  }
      if (questionOne=="art"){
document.write("<img src='https://cdn3.iconfinder.com/data/icons/abstract-1/512/Art-512.png'>");  }
  else if (questionOne=="travel"){
document.write("<img src='https://image.flaticon.com/icons/png/512/1841/1841630.png'>");
  }else if (questionOne=="sport"){
document.write("<img src='https://icon-library.com/images/sports-icon/sports-icon-13.jpg'>");
  }else{
document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uaY8hs0EZ5tGKGEwswJ_czcdFGdBi4qCYA&usqp=CAU'>");
  }
}
