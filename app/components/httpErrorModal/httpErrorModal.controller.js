class HttpErrorModalController {
	constructor( $modalInstance ) {
		this.modalInstance = $modalInstance;
	}
	close() {
		this.modalInstance.close();
	}
}

HttpErrorModalController.$inject = ["$modalInstance"];

export default HttpErrorModalController;