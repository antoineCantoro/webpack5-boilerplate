import imagesJs from '../assets/img/js.png';

export default () => {
    const wave = String.fromCodePoint(0x1F44B)
    console.log(`%cHello World ${wave}`, "font-weight: bold; font-size: 1.2em");
    console.log("You're now ready to start your new awesome project.");

    // Create JS image
    const el = document.querySelector(".js");
    const imgEl = new Image();
    imgEl.src = imagesJs;
    el.appendChild(imgEl)
}