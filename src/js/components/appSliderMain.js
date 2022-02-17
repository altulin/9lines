import Swiper, {EffectFade, Mousewheel} from 'swiper';
import {animationSvg, startPosAnimation} from './animationLayout';
// import {animationPartnerBlock} from './animationPartner';

export let appSlider;

export const createAppSliderMain = () => {
	const slider = $('.app');
	if (slider.length > 0) {
		appSlider = new Swiper('.app', {
			modules: [EffectFade, Mousewheel],
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			mousewheel: true,
			speed: 1000,
			enabled: false,
		});

		appSlider.on('slideChange', () => {
			const index = appSlider.activeIndex;
			const prevIndex = appSlider.previousIndex;

			if (index === 0) {
				// animationPartnerBlock.restart();
			}

			if (index === 1) {
				animationSvg.restart();
			}

			if (prevIndex === 1) {
				startPosAnimation();
			}
		});
	}
};

createAppSliderMain();
