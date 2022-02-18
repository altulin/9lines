import Swiper, {EffectFade, Mousewheel} from 'swiper';
import {animationSvg, startPosAnimation, animationTextLayout} from './animationLayout';
import {animationImgTop, animationImgBottom, animationText} from './animationCreative';
import {animationPartnerBlock} from './animationPartner';
import {animationCommandBg, animationPictures} from './animationCommand';

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
			// initialSlide: 3,
		});

		appSlider.on('slideChange', () => {
			const index = appSlider.activeIndex;
			const prevIndex = appSlider.previousIndex;

			if (index === 0) {
				animationPartnerBlock.restart();
			}

			if (index === 1) {
				animationSvg.restart();
				animationTextLayout.restart();
			}

			if (index === 2) {
				animationImgTop.restart();
				animationImgBottom.restart();
				animationText.restart();
			}

			if (index === 3) {
				animationCommandBg.restart();
				animationPictures.restart();
			}

			if (prevIndex === 1) {
				startPosAnimation();
			}
		});
	}
};

createAppSliderMain();
