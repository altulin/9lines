import {gsap} from 'gsap';

export const animationHeader = gsap.to('.header',
	{
		duration: 1,
		delay: 2,
		y: 73,
	});

export const animationControls = gsap.to('.controls',
	{
		duration: 1,
		delay: 2,
		x: -60,
	});
