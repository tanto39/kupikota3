// modal
document.addEventListener('DOMContentLoaded', function() {
  let modalButtons = document.querySelectorAll('.js-open-modal'),
      overlay      = document.querySelector('#overlay-modal'),
      closeButtons = document.querySelectorAll('.js-modal-close');
  
  /* открытие окон. */
  modalButtons.forEach(function(item){
     
     item.addEventListener('click', function(e) {
        
        e.preventDefault();

        let modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal-form[data-modal="' + modalId + '"]');
        
        modalElem.classList.add('active');
        overlay.classList.add('active');

     });
  });

  /* закрытие окон */
  closeButtons.forEach(function(item){

    item.addEventListener('click', function(e) {
      e.preventDefault();

      let parentModal = this.closest('.modal-form');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
    });

  });

  /* закрытие по ESC */
  document.body.addEventListener('keyup', function (e) {
    let key = e.key;

    if (key == "Escape") {
        document.querySelector('.modal-form.active').classList.remove('active');
        document.querySelector('.overlay.active').classList.remove('active');
    };
  }, false);

  /* скрытие окна при клике на подложку */
  overlay.addEventListener('click', function() {
    document.querySelector('.modal-form.active').classList.remove('active');
    this.classList.remove('active');
  });
});

let sendButton = document.querySelector('.modal-form__button');

sendButton.addEventListener('click', function(e) {
  e.preventDefault();
  let sendText = document.querySelector('.modal-form__send-text');
  sendText.classList.add('active');
})