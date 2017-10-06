$(function() {
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 5000);
	function changeSlide() {
		carouselList.animate({'marginLeft':-640}, 1000, moveFirstSlide);
	}
	changeSlide();
	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
});