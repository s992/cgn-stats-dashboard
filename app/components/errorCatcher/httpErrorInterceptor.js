let HttpErrorInterceptor = ( $q, $injector ) => {
	return {
		responseError: ( rejection ) => {
			let ngToast = $injector.get("ngToast");

			ngToast.create({
				content: "Sorry, we ran into an error loading some content on this page. Please refresh and try again.",
				dismissOnTimeout: false,
				timeout: 99999,
				className: "http-error",
				dismissButton: true,
				dismissButtonHtml: "&times;"
			});

			return $q.reject( rejection );

		}
	};
}

HttpErrorInterceptor.$inject = ["$q", "$injector"];

export default HttpErrorInterceptor;