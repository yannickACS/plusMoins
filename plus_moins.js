let formElt = document.querySelector('form');
let compteurElt = document.getElementById('compteur');
let infosElt = document.getElementById('InfoJeu-layout');
let compteurCoup = 0;
let saisie;
let resultat = Math.floor(Math.random() * 10);

function compteurPlus (){
	compteurCoup += 1; 
	compteurElt.innerHTML = "";
	compteurElt.innerHTML = compteurCoup;
}
function testSaisie ( valeur ){
	if ( valeur == resultat ) {
		return true;
	} else {
		return false;
	}
}
function finPartie (){
	infosElt.innerHTML ="";
	infosElt.innerHTML = "Gagner";
}
function affichageErreur( valeur ){
	infosElt.innerHTML = "";
	if ( valeur > resultat){
		infosElt.innerHTML = "C'est plus petit";
	}
	if ( valeur < resultat){
		infosElt.innerHTML = "C'est plus grand";
	}
}

formElt.addEventListener('submit', function (e){
	
	compteurCoup();
	let valeurSaisie = document.getElementById('nombreSaisie').value;
	testSaisie(valeurSaisie);
	if ( testSaisie() ){
		finPartie();
	} else {
		affichageErreur ( valeurSaisie );
	}
	e.preventDefault();
});	