class ErrorModalController {
	constructor( $modalInstance, error ) {
		this.modalInstance = $modalInstance;
		this.error = btoa( error );
	}
	close() {
		this.modalInstance.close();
	}
}

ErrorModalController.$inject = ["$modalInstance", "error"];

export default ErrorModalController;