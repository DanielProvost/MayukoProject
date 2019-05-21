//creation d'un slider
//creation d'une liste ul li pour inserer les images dans une figure
///////////Données/////////////////////////
const tabData = [{src:'images/image1.jpg',figCaption:'Cerisier sous le chateau',alt:'cerisier_chateau'},{src:'images/image2.jpg',figCaption:'Cerisier sous le chateau',alt:'cerisier_chateau2'},{src:'images/image3.jpg',figCaption :'Journée Hanami',alt:'hanami_journée1'},{src:'images/image4.jpg',figCaption:'Journée Hanami',alt:'hanami_journée2'},{src:'images/image5.jpg',figCaption:'Journée Hanami',alt:'Journée Hanami'},{src:'images/image6.jpg',figCaption:'Soirée Hanami',alt:'hanami_soirée1'},{src:'images/image7.jpg',figCaption:'Soirée Hanami',alt:'hanami_soirée2'},{src:'images/image8.jpg',figCaption:'Soirée Hanami',alt:'hanami_soirée3'}]
console.log(tabData)

var ulList = document.createElement('ul')
var bodyElt = document.querySelector('section div#slider')
var monBoleen = false
var LectureA 
bodyElt.appendChild(ulList)
var index = 0
//fonction construction image
function ConstrImg(){
	
	var ulList2 = document.createElement('ul')
	ulList2.classList.add('responsive')
	bodyElt.appendChild(ulList2)

	for(var i =0; i < tabData.length;i++){
		
		var liList = document.createElement('li')
		liList.id = ('slide' + i)
		ulList.appendChild(liList)
		var figureList = document.createElement('figure')
		liList.classList.add('hide')
		liList.appendChild(figureList)
		//ici on bouclera notre tabData
		var imgList = document.createElement('img')
		figureList.appendChild(imgList)
		var figCaptionList = document.createElement('figCaption')
		figureList.appendChild(figCaptionList)
		imgList.src = tabData[i].src
		imgList.alt = tabData[i].alt
		figCaptionList.textContent = tabData[i].figCaption

		var liList2 = document.createElement('li')	
		liList2.classList.add('inline')
		
		ulList2.appendChild(liList2)
		
		var boutonElt = document.createElement('button')
		liList2.appendChild(boutonElt)
		boutonElt.innerHTML = '<i class="fas fa-adjust"></i>'
		boutonElt.dataset.index = i
		boutonElt.addEventListener('click',function(e){
		var puce = e.currentTarget ;
		
		let CurrentSlide = document.getElementById('slide'+index)
		CurrentSlide.classList.add('hide')
		index = puce.dataset.index//on récupère le currentSlide
		console.log(puce)
		Afficher()
			
			})
	}
}
ConstrImg()

var bouton1= document.querySelector('#premier')
bouton1.addEventListener('click',AfficherPrécédent)
var bouton = document.querySelector('#second')
bouton.addEventListener('click',AfficherSuivant)
var bouton2 =  document.querySelector('#troisieme')
bouton2.addEventListener('click',LectureAuto)
var bouton3 =  document.querySelector('#quatrieme')
bouton3.addEventListener('click',LectureRandom)


function Afficher(){
	let selectImg = document.getElementById('slide'+index)
	selectImg.classList.remove('hide')	
}
Afficher()

function AfficherSuivant(){
	let CurrentSlide = document.getElementById('slide'+index)
	CurrentSlide.classList.add('hide')
	index = index + 1
	if(index > 7){
			index = 0
		}
	Afficher()
		
}
function AfficherPrécédent(){
	let CurrentSlide = document.getElementById('slide'+index)
	CurrentSlide.classList.add('hide')
	index = index - 1
	if(index < 0){
		index = 7
	}
	Afficher()		
}

function LectureAuto(){
	if(monBoleen == false){
	LectureA = setInterval(AfficherSuivant,1000)
	monBoleen = true
	}else{
	clearInterval(LectureA)
	monBoleen = false
		
	}
}

function LectureRandom(){
	let CurrentSlide = document.getElementById('slide'+index)
	var resultat = index
	CurrentSlide.classList.add('hide')
	console.log('c\'est le ' + resultat)
	
	index = getRandomInt(0,tabData.length-1)
	while (index === resultat){
		index = getRandomInt(0,tabData.length-1)
	}	
	Afficher()
}

 document.addEventListener('keyup', function(e) {
        console.log(e.keyCode);
		if (e.keyCode === 39){
			AfficherSuivant();
		}if (e.keyCode === 37){
			AfficherPrécédent()
		}
    })
	

