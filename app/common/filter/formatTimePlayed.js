let formatTimePlayedFilter = () => {
	return (time) => {
		const hour = 60 * 60 * 1000;
		const day = hour * 24;

		let formatString = "m[m]"
		let ms = time * 1000;

		if( ms >= day ) {
			formatString = "D[d] h[h] m[m]"
		} else if( ms >= hour ) {
			formatString = "h[h] m[m]";
		}

		return window.moment.duration( parseFloat( time ), "s" ).format( formatString );
	}
}

export default formatTimePlayedFilter;