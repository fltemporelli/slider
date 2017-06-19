 
	var arraySlider = ['images/barbershop2.jpg', 'images/barbershop3.jpg', 'images/barbershop1.jpg']; 
	var imagen = $('#imagen'); 
	var i = $(imagen).attr('data-pos');
 
$(document).ready(function() { 
     setInterval(slide, 3000); 
     console.log(i); 
}); 
 
function slide() {
 
	$(imagen).fadeOut('slow', function() {
		$(this).attr('src', arraySlider[i]);
		$(this).fadeIn('slow', function (){
			if(i < arraySlider.length-1) {
				i++;
			}
			else {
				i=0; 
			}
		}); 
 
	}); 
}
 
