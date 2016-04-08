//funkcija dodavanja svih boksova i razlicitih brojeva u boksove
function addBoxes(){
	for (var i = 0; i < 100; i++) {
		var randomNumbers = Math.floor(Math.random()*iconsArray.length);
		container.append('<div class="box"><div class="back"><i class="fa fa-'+iconsArray[randomNumbers]+' fa-3x"></i></div><div class="front"></div></div>');
		//'+iconsArray[randomNumbers]+' --- ubaci iz areja random broj na kome su slike. Svaka slika ima svoj broj ondnosno index.
		iconsArray.splice(randomNumbers, 1);//izbaci random broj iz Arreja kada ga dodelis u boks. Da ne dodje do ponavljanja slika.
	}
}
//funkcija dodavanja svih boksova i razlicitih brojeva u boksove

//funckija koja okrece boksove
function flipBoxes(){
	$('.box').click(function() {
		twoClicks++;//dodavaj na klik za 1
	
		//okreni boksove
			$(this).find('.front').css({
				transform: 'perspective(900px) rotateY(180deg)'
			});
			$(this).find('.back').css({
				transform: 'perspective(900px) rotateY(0deg)'
			});

		//ako sam 2 puta kliknuo onda ne okreci ostale kutije samo te dve.
		if (twoClicks === 2) {
			$('.box').unbind('click');
		}else{

		}
		clicksArray.push($(this).html());//ubaci klikove u array. Odnosno njihov html
	});

		compareIcons();
		console.log(clicksArray);
		twoClicks = 0;//resetovanje 2 klika i vracanje na 0 da bi ponovo krenuo is pocetka brojanje!
}


function compareIcons(){
	if (clicksArray[0] !== clicksArray[1]) {
		alert(1)
	}
}