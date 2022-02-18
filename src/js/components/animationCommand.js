import gsap from 'gsap';

export const animationCommandBg = gsap.from('.command__wrapper',
	{
		duration: 0.5,
		backgroundSize: '0% 100%',
		opacity: 0,
		paused: true,
	});

export const animationPictures = gsap.to('.command__pictures',
	{
		duration: 0.5,
		position: 'absolute',
		height: '100%',
		maxWidth: 'none',
		paused: true,
	});
