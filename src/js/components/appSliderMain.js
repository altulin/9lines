import Swiper, {EffectFade, Mousewheel} from 'swiper';
const createAppSliderMain = () => {
	const slider = $('.app');
	if (slider.length > 0) {
		// eslint-disable-next-line
		const appSlider = new Swiper('.app', {
			modules: [EffectFade, Mousewheel],
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			mousewheel: true,
		});
	}
};

export default createAppSliderMain;
