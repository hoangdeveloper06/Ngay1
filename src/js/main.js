import "@babel/polyfill";
import U from "./lib/Utilities";
import Loading from "./lib/Loading";



function homeBanner() {
	var swiper = new Swiper('.banner .swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}



document.addEventListener('DOMContentLoaded', () => {
	Loading();
	homeBanner();
});