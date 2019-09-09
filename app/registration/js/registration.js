document.addEventListener('DOMContentLoaded', function(){


  Array.from(document.querySelectorAll('.registration-form button')).forEach(function(each){
    each.addEventListener('click', function(e){
      var this_step = this.closest('.registration-step').getAttribute('step');
      var this_type = this.closest('.registration-type').getAttribute('reg-type');
      var this_btn = this.getAttribute('btn');

      var allow = true;

      Array.from(this.closest('.registration-step').querySelectorAll('.registration-field')).forEach(function(each){
        if(each.querySelector('[required]') && this_btn == 'next'){

          var each_input = each.querySelector('[required]');

          if(each_input.value == ''){
            if(each.querySelector('.registration-field__error')){
              each.querySelector('.registration-field__error').remove();
            }

            each.classList.add('_error');

            var error_template = document.createElement('div');
            error_template.classList = 'registration-field__error';

            if(each.closest('.registration-three')){
              error_template.innerHTML = `<span></span>`;
            } else {
              error_template.innerHTML = `<p>Вы не заполнили обязательное поле</p><span></span>`
            }

            each.appendChild(error_template);

            allow = false;
          } else {
            allow = true;
            each.classList.remove('_error');
            if(each.querySelector('.registration-field__error')){
              each.querySelector('.registration-field__error').remove();
            }
          }
        }
      });

      if(allow !== false) {
        show_step(this_btn, this_step, this_type);
      }

    });
  });



function show_step(which, step, type){
  var which = which;
  var block_type,
      current_step,
      next_step,
      next_counter,
      prev_step,
      prev_counter;

  var ctrls = document.querySelector('.registration-form-ctrls');

  block_type = document.querySelector('.registration-type[reg-type="' + type + '"]');
  current_step = block_type.querySelector('.registration-step[step="' + step + '"]');

  next_counter = parseInt(step, 10) + 1;
  next_step = block_type.querySelector('.registration-step[step="' + next_counter + '"]');

  prev_counter = parseInt(step, 10) - 1;
  prev_step = block_type.querySelector('.registration-step[step="' + prev_counter + '"]');

  // [ 1 ]
  if(which == 'next'){

    if(next_counter == '2' || next_counter == '3'){
      ctrls.classList.add('_hide');
    }

    current_step.classList.remove('_show');
    next_step.classList.add('_show');

    document.querySelector('.registration-form .registration-form__counter').innerHTML = 'Шаг&#160;&#160;' + next_counter + ' / 3';

  }

  if(which == 'prev'){
    current_step.classList.remove('_show');
    prev_step.classList.add('_show');

    document.querySelector('.registration-form .registration-form__counter').innerHTML = 'Шаг&#160;&#160;' + prev_counter + ' / 3';

    if(prev_counter == '1'){
      ctrls.classList.remove('_hide');
    }
  }

};



//  управление типами регистрации

Array.from(document.querySelectorAll('.registration-form-ctrl')).forEach(function(each){

  each.addEventListener('click', function(e){

    var current_btn = document.querySelector('.registration-form-ctrl._current');
    var this_type = this.getAttribute('ctrl');

    // [ 1 ]  меняю сами кнопки
    if(this_type !== current_btn.getAttribute('ctrl')){
      current_btn.classList.remove('_current');
      this.classList.add('_current');
    }


    // [ 2 ]  переключение между формами

    var current_form = document.querySelector('.registration-type._show');
    var current_form_type = current_form.getAttribute('reg-type');

    if(current_form_type !== this_type){

      document.querySelector('.registration-type:not(._show)').classList.add('_show');
      current_form.classList.remove('_show');

    }
    
  });

});



// добавление нового поля с номером
document.addEventListener('click', function(e){

  if(e.target.closest('.registration-field__add-phone')){

    e.preventDefault();

    var each_wrap = e.target.closest('.registration-field');
    var container = e.target.closest('.registration-step');

    each_wrap.querySelector('.registration-field__add-phone').remove();

    // var new_html = each_wrap.innerHTML;
    var new_html = document.createElement('label');
    new_html.innerHTML = `
      <span class="registration-field__label">Дополнительный телефон</span>
      <input class="registration-field__input" type="tel" name="dop_phone" placeholder="+7 (___) ___-__-__">
      <div class="registration-field__add-phone">+ добавить еще один номер</div>
    `;
    new_html.classList = 'registration-field';

    var each_footer = container.querySelector('.registration-step-footer');

    container.insertBefore(new_html, each_footer);


    //
    // var ff = new Inputmask("+7 (999) 999-99-99", {
    //   showMaskOnHover: false,
    // });

    // ff.mask(new_html);
    // new_html.inputmask.unmaskedvalue();

  }

});






//
//  Отправка форм

Array.from(document.querySelectorAll('button[type="submit"]')).forEach(function(each){
  each.addEventListener('click', function(e){
    var form_type = document.querySelector('.registration-form-ctrl._current').getAttribute('ctrl');
    
    var center_phone = document.getElementById('center_phone').value;
    var center_org_name = document.getElementById('center_org_name').value;
    var center_email = document.getElementById('center_email').value;
    var center_inn = document.getElementById('center_inn').value;
    var center_kpp = document.getElementById('center_kpp').value;
    var center_juri_name = document.getElementById('center_juri_name').value;
    var center_juri_address = document.getElementById('center_juri_address').value;
    var center_real_address = document.getElementById('center_real_address').value;


    var users_phone = document.getElementById('users_phone').value;
    var users_fio = document.getElementById('users_fio').value;
    var users_post = document.getElementById('users_post').value;
    var users_city = document.getElementById('users_city').value;

    $.post(
      '/api/vovan/eboshit.php',
      {
        type: form_type,

        center_phone: center_phone,
        center_org_name: center_org_name,
        center_email: center_email,
        center_inn: center_inn,
        center_kpp: center_kpp,
        center_juri_name: center_juri_name,
        center_juri_address: center_juri_address,
        center_real_address: center_real_address,

        users_phone: users_phone,
        users_fio: users_fio,
        users_post: users_post,
        users_city: users_city,
      },
      function (){
        alert('Отправка прошла успешно');
      }
    );

  });
});


  
});
