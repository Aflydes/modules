
export default class Popup {
    constructor(el){
        this.element = el;
    }
    ShowPopup(e, html = null){
        e.preventDefault();
        this.element.classList.add('loading');
        if(html != null)
            html.classList.add('lock-scroll');
        setTimeout(() => {
            this.element.classList.add('active');
        }, 50)
    }
    ClosePopup(e, html = null ){
        if (e.target.classList.contains("popup") || e.target.classList.contains("close-button") || e.target.classList.contains("close-button__line")) {
            this.element.classList.remove('active');
            if(html != null)
                html.classList.remove('lock-scroll');
            setTimeout(() => {
                this.element.classList.remove('loading');
            }, 400)
        }
    }
}