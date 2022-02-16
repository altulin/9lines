const moveSlide = () => {
	const currentLink = $('.is-current');
	const slide = $('.header-nav__slide');
	const widthLink = currentLink.width();
	const delta = (currentLink.outerWidth() - currentLink.width()) / 2;
	const positionLink = currentLink.position().left + delta;

	slide.css({width: `${widthLink}px`});
	slide.animate(
		{left: `${positionLink}px`},
		300,
		'linear');
};

const makeHover = () => {
	const link = $('.header-nav__link');
	if (link.length > 0) {
		const nav = $('.header__nav');
		const handleMouseover = (e) => {
			link.each(function n() {
				$(this).removeClass('is-current');
			});
			$(e.currentTarget).addClass('is-current');
			moveSlide();
		};

		const handleMouseout = () => {
			link.each(function n() {
				$(this).removeClass('is-current');
			});
			$('.is-active').addClass('is-current');
			moveSlide();
		};

		link.on('mouseenter', handleMouseover);
		nav.on('mouseleave', handleMouseout);
	}
};

moveSlide('.is-current');
export default makeHover;
