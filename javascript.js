const textMap = {
  'text1': 'Tove Jansson (1914–2001) was a Swedish-speaking Finnish author, artist, and illustrator, best known for creating the Moomins, a beloved series of children books and comic strips. Born in Helsinki, Finland, Jansson came from a family of artists and writers. She studied art in Stockholm, Helsinki, and Paris before embarking on her career as an illustrator and writer.',
  'text2': 'Artistic life of Tove Jansson was a vibrant tapestry of illustration, painting, and the creation of the iconic Moomin characters. Beginning her career as an illustrator, she infused her work with whimsy and imagination, contributing to both childrens books and adult literature. Her paintings ranged from landscapes to abstract art, showcasing her versatility and expressive vision.',
  'text3': 'Most enduring legacy of her lies in her creation of the Moomins, which extended beyond literature into charming and distinctive illustrations that brought her beloved characters to life. Through exhibitions worldwide, her artwork continues to captivate audiences, reflecting her deep passion for storytelling and her enduring influence on both literature and visual art.'
};


document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("img").src = "Images/image 4.png";
});

document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("img").src = "Images/bio2.png";
});

document.getElementById("btn3").addEventListener("click", function () {
  document.getElementById("img").src = "Images/image 5.png";
});


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('btn1').style.color = 'black';
  document.getElementById('btn1').style.fontSize = '3vw';
  const firstText = textMap['text1'];
  document.getElementById('textDisplay').innerText = firstText;
});

function changeColor(buttonId, textKey) {

  document.getElementById('btn1').style.color = 'silver';
  document.getElementById('btn2').style.color = 'silver';
  document.getElementById('btn3').style.color = 'silver';

  document.getElementById('btn1').style.fontSize = '2vw';
  document.getElementById('btn2').style.fontSize = '2vw';
  document.getElementById('btn3').style.fontSize = '2vw';



  document.getElementById(buttonId).style.color = 'black';
  document.getElementById(buttonId).style.fontSize = '3vw';

  const text = textMap[textKey];
  document.getElementById('textDisplay').innerText = text;
}