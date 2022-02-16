import Swiper, {EffectFade, Mousewheel} from 'swiper';
const createAppSliderPartner = () => {
	const slider = $('.partner-slider');
	if (slider.length > 0) {
		// eslint-disable-next-line
		const appSliderPartner = new Swiper('.partner-slider', {
			modules: [EffectFade, Mousewheel],
			// effect: 'fade',
			// fadeEffect: {
			// 	crossFade: true,
			// },
			// mousewheel: true,
		});
	}
};

export default createAppSliderPartner;
