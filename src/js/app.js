// import index from '../index.html';

import Tracking from './tracking';
import Page from "./page";

import myModule from './myModule';

window.addEventListener("DOMContentLoaded", () => {
    // Removed comment on build
    myModule();

    // Create new page
    const homepage = new Page();

    // Init Tracking
    if (typeof datalayer !== 'undefined') {
        new Tracking();
    }


});

