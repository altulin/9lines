import {animationHeader, animationControls, animationPartnerBlock} from './animationPartner';

const startAfterPreload = () => {
	animationHeader.play();
	animationControls.play();
	animationPartnerBlock.play();
};

const preloader = () => {
	let counter = 0;
	let c = 0;
	const donePreloader = () => {
		$('.preloader').animate({width: '0%'}, 800, 'linear', () => {
			$('.preloader').addClass('is-hidden');
			startAfterPreload();
		});
	};
	const i = setInterval(() => {
		$('.preloader__status__number').html(`${c}%`);
		counter++;
		c++;
		if (counter === 101) {
			clearInterval(i);
			$('.loading-page-wrapper')
				.addClass('transition-opacity')
				.delay(500)
				.queue(() => {
					$(this).addClass('dispaynone');
					$(this).dequeue();
				});
			$('.preloader__status__number, .preloader__logo').animate(
				{opacity: 0},
				100,
				'linear',
				donePreloader(),
			);
		}
	}, 10);
};

export default preloader;
