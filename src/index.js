// import './style.css';


// (function () {
//   const burgerBtn = document.querySelector('.burger-menu');
  
//   function toggleHandler(toggle) {
//     burgerBtn.addEventListener( "click", function(e) {
//       e.preventDefault();
//       (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
//     });
//   };
//   })();

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
