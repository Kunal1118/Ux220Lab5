//Text
class KunalElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Kunal was here";
    }
}

customElements.define("x-kunal", KunalElement);

//Center 
class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center", CenterElement);

//Year
class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-fullyear", YearElement);

//Custom Element
class ColourElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<p style="color:blue; 
                            background-color: lightgrey; 
                            border-bottom: 2.5px dashed black;
                            padding: 10px;">${this.innerHTML}</p>`;
    }
}

customElements.define("x-color", ColourElement);