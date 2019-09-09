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

      var each_wrap = each.closest('.registration-field');

      each_wrap.classList.add('_required');

      each.addEventListener('change', function(e){

        if(each.getAttribute('type') == 'tel'){

          if(each.value.split('').length == 18){
            each_wrap.classList.add('_accept');
          } else {
            each_wrap.classList.remove('_accept');
          }

        }

        else if(each.getAttribute('type') !== 'tel'){

          if(each.value !== ''){

            each_wrap.classList.remove('_error');
            if(each_wrap.querySelector('.registration-field__error')){
              each_wrap.querySelector('.registration-field__error').remove();
            }

            each_wrap.classList.add('_accept');

          } else {
            each_wrap.classList.remove('_accept');
          }

        }

      });
    });
  }
  
});

