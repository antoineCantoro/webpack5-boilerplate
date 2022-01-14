import Animations from './animations';

export default class Page {
    constructor(){
        this.initPage();
    }

    initPage() {
        console.log("page créée");

        this.animatedEls = Array.from(document.querySelectorAll("[data-animation]"))

        this.animationInstances =  this.animatedEls.map(el => {
            return new Animations(el)
        })

        // console.log(this.animationInstances);
    }
}