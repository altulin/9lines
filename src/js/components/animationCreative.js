import gsap from 'gsap';
import {SplitText} from 'gsap/SplitText';

export const animationImgTop = gsap.from('.creative-pictures--top',
	{
		duration: 0.5,
		y: -100,
		opacity: 0,
		paused: true,
	});

export const animationImgBottom = gsap.from('.creative-pictures--bottom',
	{
		duration: 0.5,
		y: 100,
		opacity: 0,
		paused: true,
	});

export const animationText = gsap.timeline({paused: true});

const mySplitText = new SplitText('.creative__title', {type: 'words, lines, chars'});
const chars = mySplitText.chars;

animationText.staggerFrom(chars, 0.5, {opacity: 0,
	delay: 0,
	y: 15}, 0.01);
