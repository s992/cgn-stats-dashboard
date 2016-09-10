let truncateFilter = () => {
	return (value, maxLength) => {
		if( !value || ( value && value.length <= maxLength ) ) {
			return value;
		}

		return value.slice(0, maxLength) + "..";
	}
}

export default truncateFilter;