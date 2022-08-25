class MyPost extends HTMLElement {
    
    static get observedAttributes () {
        return ["user", "username", "location", "caption", "likes", "comments", "days", "bg"];
    }
    
    constructor () {
        super();
        this.attachShadow ({mode : "open"});
    }
    connectedCallback(){
        this.render();
    }
    
    attributeChangedCallback (propName, oldValue, newValue) {
        this [propName] = newValue; 
        this.render ();
    }
    
    render(){
        this.shadowRoot.innerHTML = `
        
        <link href="https://fonts.google.com/specimen/Ubuntu?query=ubu" rel="stylesheet">
        <link rel="stylesheet" href="./src/components/postForIG/style.css">
        <section class="polaroid">
        
        <img src = ${this.user} alt = "user" class="user">
        <img src = "img/dots.png"  alt = "dots" class="dots">
        
        <p class="title">
        <b>${this.username}</b> 
        <br>
        ${this.location}
        <br>
        </p>
        <br>
        <img src = ${this.bg} alt = "fondo" class="bg">
        
        <br>
        <img src = "img/heart.png" alt = "corazon vacio" class="heart">
        <img src = "img/chat.png" alt = "chat" class="chat">
        <img src = "img/send.png" alt = "send" class="send">
        
        <img src = "img/save.png" alt = "save" class="save">
        <br>
        
        <p class="bottomsection"> 
        <b> ${this.likes} likes </b>
        <br>
        <b> ${this.username} </b> ${this.caption}
        </p>
        <p class="comment"> 
        <b>  View all ${this.comments} comments </b>
        </p>
        <p class="date"> 
        ${this.days} days ago 
        </p> 
        </section>
        `
    }
}

customElements.define("my-post", MyPost);
export default MyPost;
