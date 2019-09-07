document.addEventListener('DOMContentLoaded', function(){


  Array.from(document.querySelectorAll('.registration-form button')).forEach(function(each){
    each.addEventListener('click', function(e){
      var this_step = this.closest('.registration-step').getAttribute('step');
      var this_type = this.closest('.registration-type').getAttribute('reg-type');
      var this_btn = this.getAttribute('btn');

      show_step(this_btn, this_step, this_type);
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





//  Отправка форм



  
});
