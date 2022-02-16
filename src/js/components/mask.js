const addMask = () => {
	const elems = $('.partner-item__ltd');

	if (elems.length > 0) {
		const widthBackImg = 50;
		const handleMouseenter = (e) => {
			const elem = $(e.currentTarget);
			const realX = e.offsetX + widthBackImg;
			elem.css({
				'background-image': 'url(./images/back.png), linear-gradient(90deg, rgba(246,247,248,1) 0%, rgba(246,247,248,1) 100%)',
				'background-repeat': 'no-repeat',
				'background-position': 'left center, center',
				'background-size': `${realX}px 110%, cover`,
			});
		};

		const handleMouseleave = (e) => {
			const elem = $(e.currentTarget);
			elem.css({
				'background-image': 'linear-gradient(90deg, rgba(246,247,248,1) 0%, rgba(246,247,248,1) 100%)',
				'background-position': 'center',
				'background-size': 'cover',
			});
		};

		elems.on('mousemove', handleMouseenter);
		elems.on('mouseleave', handleMouseleave);
	}
};

export default addMask;
