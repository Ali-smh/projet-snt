alert("Page d'acceuil developpée par Ali Soumah, avec la participation de son groupe")
function GetName(){
  var username = prompt('Bienvenue, quel est ton prénom ou nom ?')
  document.getElementById('username').innerHTML = username

}
GetName()

var i = 0;
var itemPrice = document.getElementById('item-price')
var itemRate = document.getElementById('item-rating')
var itemName = document.getElementById('item-name')
const itemsImages = ['https://cdn.frenchpdf.com/wp/2020/04/30074023/Le-Roi-LearWilliam-Shakespeare.png',
'https://langues.bescherelle.com/img/eventail_entr.png',
'https://www.stylos-luxe.com/1281-large_default/stylo-bille-montblanc-heritage-rouge-et-noir-black.jpg']
const itemsRatings = ['8/10', '9,5/10', '8,8/10']
const itemsPrices = ['7€', '12€', '2€']
const itemsNames = ['Le Roi Lear', 'Kit de Bescherelles', 'Stylo Serpent Collector']



document.querySelector('.header-login').addEventListener('click', function(){
})
var time = 2000;

function changeImageandColor(){
  document.slide.src = itemsImages[i]
  itemRate.innerHTML = itemsRatings[i]
  itemName.innerHTML = itemsNames[i]
  itemPrice.innerHTML = itemsPrices[i]
  if (i < itemsImages.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImageandColor()", time);
}
window.onload = changeImageandColor;
