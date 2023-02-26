export default class Header{
    constructor(header, offset = 0, burger = null, burgerMenu = null){
        this.element = header;
        this.basePosition = header.offsetTop + offset;
        this.burger = burger;
        this.burgerMenu = burgerMenu;
        this.initialPoin = 0;
    }
    Init(html){
        html.addEventListener('wheel', (e) => {
            if (e.wheelDeltaY < 0 && !html.classList.contains('lock-scroll')) {
                this.OnScrollDowm();
            } else {
                if (window.pageYOffset > this.basePosition) {
                    this.OnScrollTop();
                } else {
                    this.DefaultPosition();
                }
            }
        });
        
        html.addEventListener('touchstart', (e) => {
            this.initialPoint = e.changedTouches[0];
        }, false);
        
        html.addEventListener('touchend', (e) => {
            this.finalPoint = e.changedTouches[0];
            if (this.finalPoint.pageY < this.initialPoint.pageY) {
                this.OnScrollDowm();
            } else {
                if (window.pageYOffset > this.basePosition) {
                    this.OnScrollTop();
                } else {
                    this.DefaultPosition();
                }
            }
        })
    }
    OnScrollDowm(){
        this.element.classList.add('sticky');
        this.element.classList.remove('visible');
        if(this.burger != null && this.burgerMenu != null){
            this.burger.classList.remove('active');
            this.burgerMenu.classList.remove('active');
        }
        
    }
    OnScrollTop(){
        this.element.classList.add('sticky');
        this.element.classList.add('visible');
    }
    DefaultPosition(){
        this.element.classList.remove('sticky');
        this.element.classList.remove('visible');
    }
    ToggleBurgerActivity(){
        if(this.burger != null && this.burgerMenu != null){
            this.burger.classList.toggle('active');
            this.burgerMenu.classList.toggle('active');
        }
    }
}