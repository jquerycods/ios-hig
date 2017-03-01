$(document).ready(function() {

	$('.type-stepper').bxSlider({
		adaptiveHeight: true,
		mode: 'horizontal',
		pagerCustom: '#bxlabels-type-stepper',
		controls: false,
		startSlide: 3,
		slideMargin: 48,
		infiniteLoop: false
	});

	$('.tracking-stepper').bxSlider({
		mode: 'horizontal',
		pagerCustom: '#bxlabels-tracking-stepper',
		controls: false,
		slideMargin: 48,
		infiniteLoop: false
	});

});
