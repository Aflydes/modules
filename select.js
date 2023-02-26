export default class Select{
    constructor(select){
        this.element = select;
    }
    Handler(){

        this.options = this.element.querySelectorAll('li');
        this.currentOptionEl = this.element.querySelector('.form__input-select-current');
        this.hideInput = this.element.querySelector('.form__input-select--hidden');

        if(this.element.classList.contains('active')){

            this.element.classList.remove('active');

        } else {

            this.element.classList.add('active');

            this.options.forEach(option => {
                option.addEventListener('click', () => this.OptionsHandler(option));
            });

            this.CloseSelect(this);

        }
    }
    OptionsHandler(option){
        let value = option.innerHTML;

        this.hideInput.value = value;
        this.currentOptionEl.innerHTML = value;
        this.currentOptionEl.classList.remove('placeholder');
        this.options.forEach(option => {
            option.removeEventListener('click', this.OptionsHandler);
        })
    }
    CloseSelect(select){
        function outsideClickListener(event) {
            if (!select.element.contains(event.target)) {
                select.element.classList.remove('active')
                document.removeEventListener('click', outsideClickListener);
            }
        }
        document.addEventListener('click', (event) => outsideClickListener(event))
    }
}