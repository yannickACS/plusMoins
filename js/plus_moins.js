let formElt = document.querySelector('form');
let compteurElt = document.getElementById('compteur');
let infosElt = document.getElementById('InfoJeu-layout');
let compteurCoup = 0;
let saisie;
let resultat = Math.floor(Math.random() * 100);
function compteurPlus (){
	compteurCoup ++; 
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
	infosElt.innerHTML = "";
	infosElt.innerHTML = "Gagner le nombre était bien : " + resultat;
	document.getElementById( 'rejouer' ).style.display = "block";
}
function affichageErreur( valeur ){
	infosElt.innerHTML = "";
	if ( valeur <= 100){
		if ( valeur > resultat) infosElt.innerHTML = "C'est plus petit";					
		if ( valeur < resultat) infosElt.innerHTML = "C'est plus grand";					
	} else {
		infosElt.innerHTML = "";
		infosElt.innerHTML = "Saisir un nombre inférieur ou égal à 100";
	}
	document.getElementById('nombreSaisie').value = "";
	document.getElementById('nombreSaisie').focus();
}
formElt.addEventListener('submit', function (e){	
	compteurPlus();
	let valeurSaisie = document.getElementById('nombreSaisie').value;
	testSaisie(valeurSaisie);
	if ( testSaisie(valeurSaisie) ){
		finPartie();
	} else {
		affichageErreur ( valeurSaisie );
	}
	e.preventDefault();
});	