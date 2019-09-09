document.addEventListener('DOMContentLoaded', function(){

  
  if(document.querySelector('input[type="tel"]')){
  
    var im = new Inputmask("+7 (999) 999-99-99", {
      showMaskOnHover: false,
    });
  
    Array.from(document.querySelectorAll('input[type="tel"]')).forEach(function(el){
  
      // подрубаем масочку для телефона
      im.mask(el);
      if(el.inputmask){
        el.inputmask.unmaskedvalue();
        // console.log(el.inputmask.unmaskedvalue());
      }
  
      el.addEventListener('change', function(e){
        // validate_input_tel(e);
      });
  
    });

  
  }

  if(document.querySelector('input[required]')){
    Array.from(document.querySelectorAll('input[required]')).forEach(function(each){
      each.closest('.registration-field').classList.add('_required');
    });
  }
  
});

