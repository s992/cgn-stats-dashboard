let formatTimeFilter = () => {

	let leftZeroPad = (x) => x < 10 ? `0${x}` : x;
	let rightZeroPad = (x) => x.length < 2 ? `${x}0` : x;
	const hour = 60 * 60 * 1000;

	return (time) => {
		let timeString = time.toString(),
			ms = timeString.slice(timeString.lastIndexOf(".") + 1),
			s = parseInt( time % 60 ),
			m = parseInt( ( time / 60 ) % 60 );

		ms = rightZeroPad(ms);
		s = leftZeroPad(s);
		m = leftZeroPad(m);

		let formatted = `${m}:${s}.${ms}`;

		if( time * 1000 >= hour ) {
			let h = leftZeroPad( parseInt( ( time / ( 60 * 60 ) ) % 24 ) );
			formatted = `${h}:${formatted}`;
		}

		// truncate the milliseconds in case we get fucked up long ass floating points
		formatted = formatted.slice( 0, formatted.lastIndexOf(".") + 3 );

		return formatted;
	}

}

export default formatTimeFilter;