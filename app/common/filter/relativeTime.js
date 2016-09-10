// this filter is intended to be used for dates in the past (e.g. activity feed items), so if the passed date
// is in the future, we return "Just now" instead of the actual relative time. this is to fix an issue with
// activity feed dates not syncing up with the user's system clock.
let relativeTimeFilter = () => {
	return (input) => {
		let now = window.moment(), then = window.moment(input);
		return now.diff(then) < 0 ? "Just now" : then.fromNow();
	}
}

export default relativeTimeFilter;