export default class Tracking {
    constructor() {
        this.DOM = null;
        this.initTracking();
    }

    initTracking() {
        this.getAllTrackedElements();
    }

    getAllTrackedElements() {
        this.DOM = Array.from(document.querySelectorAll("[data-tracking]"))
        this.initEventListeners();
    }

    initEventListeners() {
        this.DOM.forEach((element) => {
            console.log(element.dataset.test)            
        })
    }


}