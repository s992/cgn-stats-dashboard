let ExceptionHandler = ( $injector ) => {
	return ( exception, cause ) => {
		let $modal = $injector.get("$modal");

		if( !window.errorModalVisible ) {
			window.errorModalVisible = true;

			let instance = $modal.open({
				templateUrl: "app/components/errorModal/errorModal.html",
				controller: "ErrorModalController",
				controllerAs: "ctrl",
				resolve: {
					error: () => exception.stack
				}
			});

			instance.result.then(() => {
				window.errorModalVisible = false;
			});
		}
	};
};

ExceptionHandler.$inject = ["$injector"];

export default ExceptionHandler;