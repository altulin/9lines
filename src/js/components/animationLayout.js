import {gsap} from 'gsap';
import {appSlider} from './appSliderMain';

const pathRect7 = document.querySelector('.layout-svg__rect-7');
pathRect7.style.strokeDasharray = pathRect7.getTotalLength();
pathRect7.style.strokeDashoffset = pathRect7.getTotalLength();

const animationRect7 = gsap
	.to('.layout-svg__rect-7',
		{
			strokeDashoffset: 0,
			duration: 0.2,
			paused: true,
			onComplete: () => {
				appSlider.enable();
			},
		},
	);

const pathRect6 = document.querySelector('.layout-svg__rect-6');
const lineRect6 = pathRect6.getTotalLength();
pathRect6.style.strokeDasharray = lineRect6;

const animationRect6 = gsap
	.fromTo('.layout-svg__rect-6',
		{strokeDashoffset: lineRect6},
		{
			strokeDashoffset: 0,
			duration: 1.5,
			paused: true,
		},
	);

const pathRect5 = document.querySelectorAll('.layout-svg__rect-5');
pathRect5.forEach((item) => {
	item.style.strokeDasharray = item.getTotalLength();
	item.style.strokeDashoffset = item.getTotalLength();
});

const animationRect5 = gsap
	.to('.layout-svg__rect-5',
		{
			strokeDashoffset: 0,
			duration: 0.2,
			paused: true,
			onComplete: () => {
				animationRect6.restart();
				animationRect7.restart();
			},
		},
	);

const pathRect4 = document.querySelector('.layout-svg__rect-4');
const lineRect4 = pathRect4.getTotalLength();
pathRect4.style.strokeDasharray = lineRect4;

const animationRect4 = gsap
	.fromTo('.layout-svg__rect-4',
		{strokeDashoffset: lineRect4},
		{
			strokeDashoffset: 0,
			duration: 0.5,
			paused: true,
			onComplete: () => {
				animationRect5.restart();
			},
		},
	);

const pathRect3 = document.querySelectorAll('.layout-svg__rect-3');
pathRect3.forEach((item) => {
	item.style.strokeDasharray = item.getTotalLength();
	item.style.strokeDashoffset = item.getTotalLength();
});

const animationRect3 = gsap
	.to('.layout-svg__rect-3',
		{
			strokeDashoffset: 0,
			duration: 0.2,
			paused: true,
			onComplete: () => {
				animationRect4.restart();
			},
		},
	);

const pathRect2 = document.querySelector('.layout-svg__rect-2');
const lineRect2 = pathRect2.getTotalLength();
pathRect2.style.strokeDasharray = lineRect2;

const animationRect2 = gsap
	.fromTo('.layout-svg__rect-2',
		{strokeDashoffset: lineRect2},
		{
			strokeDashoffset: 0,
			duration: 0.5,
			paused: true,
			onComplete: () => {
				animationRect3.restart();
			},
		},
	);

const pathRect1 = document.querySelector('.layout-svg__rect-1');
const lineRect1 = pathRect1.getTotalLength();
pathRect1.style.strokeDasharray = lineRect1;

export const animationSvg = gsap
	.fromTo('.layout-svg__rect-1',
		{strokeDashoffset: lineRect1},
		{
			strokeDashoffset: 0,
			duration: 1,
			paused: true,
			onStart: () => {
				appSlider.disable();
			},
			onComplete: () => {
				animationRect2.restart();
			},
		},
	);

export const startPosAnimation = () => {
	const list = Array.from(document.querySelectorAll('.layout-svg__rect'));
	list.forEach((item) => {
		const line = item.getTotalLength();
		item.style.strokeDasharray = line;
		item.style.strokeDashoffset = line;
	});
};
