import {gsap} from 'gsap';
import {appSlider} from './appSliderMain';
import {SplitText} from 'gsap/SplitText';

const animationTextPartner = gsap.timeline({paused: true});

const mySplitText = new SplitText('.app-page__title--partner', {type: 'words, lines, chars'});
const chars = mySplitText.chars;

animationTextPartner.staggerFrom(chars, 0.5, {opacity: 0,
	delay: 0,
	y: 15}, 0.01);

const path = document.querySelector('.partner-picture__circle circle');
const line = path.getTotalLength();
path.style.strokeDasharray = line;

const animationSvg = gsap
	.fromTo('.partner-picture__circle circle',
		{strokeDashoffset: line},
		{
			strokeDashoffset: 0,
			duration: 2,
			paused: true,
			onComplete: () => {
				appSlider.enable();
			},
		},
	);

export const animationHeader = gsap.from('.header',
	{
		duration: 1,
		delay: 2,
		y: -73,
		paused: true,
	});

export const animationControls = gsap.from('.controls',
	{
		duration: 1,
		delay: 2,
		x: 60,
		paused: true,
	});

const animationPartnerBlockLine = gsap.from('.partner-block__brand-line',
	{
		duration: 1,
		delay: 0.5,
		width: '0%',
		paused: true,
	});

const animationPartnerPicture = gsap.from('.partner-picture, .partner-slider__btn',
	{
		duration: 0.5,
		delay: 0,
		opacity: 0,
		paused: true,
		onComplete: () => {
			animationSvg.restart();
		},
	});

const animationPartnerBlockTop = gsap.from('.partner-block__top',
	{
		duration: 0.5,
		delay: 0,
		y: 20,
		opacity: 0,
		paused: true,
		onComplete: () => {
			animationPartnerBlockLine.restart();
			animationPartnerPicture.restart();
		},
	});

export const animationPartnerBlock = gsap.from('.partner-block__info',
	{
		duration: 0.5,
		delay: 1,
		y: 50,
		opacity: 0,
		paused: true,
		onComplete: () => {
			animationPartnerBlockTop.restart();
			animationTextPartner.restart();
		},
	});
