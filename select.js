/* Пример использования селекта:
* - Классы с префиксом js- используются для выполнения скриптов
*  <div class="select-element">
*    <span class="js-select-current placeholder">Выберите вариант</span>
* - Класс placeholder для изменения стилей, если стили вводимого текста отличаются от текста заполнителя
*    <ul class="">
*         <li data-value="Вариант 1">Вариант 1</li>
*         <li data-value="Вариант 2">Вариант 2</li>
*         <li data-value="Вариант 3">Вариант 3</li>
*    </ul>
*    <input type="hidden" name="selectName" class="js-select--hidden">
*  </div>
*  Пример js:
*  const select = new Select(document.querySelector('.select-element');
* - в конструктор нужно передать dom-элемент кастомного селекта.
*  select.element.addEventListener('click', () => select.Handler());
* - при создании, сам элемент записывается в select.element
*/

class Select{
    constructor(select){
        this.element = select;
    }
    Handler(){
        this.options = this.element.querySelectorAll('li');
        this.currentOptionEl = this.element.querySelector('.js-select-current');
        this.hideInput = this.element.querySelector('.js-select--hidden');

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
        let value = option.dataset.value;

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
