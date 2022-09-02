import * as components from "./components/indexComponents.js"
import data from "./components/data.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback (){
        this.render ();
    }

    render () {
        this.shadowRoot.innerHTML += `
        <my-post user = "img/user.png" username = "Jotica012" location = "Cali, Colombia" likes = "200" caption = "Gracias por siempre estar" comments = "3" days = "2" bg = "img/bg.png"  >
        `
        this.shadowRoot.innerHTML += `
        <my-post user = "img/user3.png" username = "mjota22" location = "La isla Cancún" likes = "1,000,0000" caption = "Tu no eres bbcita eres bbsota" comments = "1" days = "1" bg = "img/bg3.png"  >
        `
        this.shadowRoot.innerHTML += `
        <my-post user = "img/user4.png" username = "anamamos_" location = "Un día Feli" likes = "1,000,0000" caption = "Esos 23 te lucen" comments = "1" days = "1" bg = "img/bg4.png"  >
        `
        this.shadowRoot.innerHTML += `
        <my-post user = "img/user2.png" username = "larubiainmoral" location = "Colombia" likes = "12,245" caption = "Etiqueta a tu amiga." comments = "143" days = "1" bg = "img/bg2.png"  >
        `
    }
}

customElements.define ("app-container", AppContainer);