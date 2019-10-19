document.addEventListener('DOMContentLoaded', function(){

    $('.dd__select').select2({
        placeholder: 'Select an option',
        // allowClear: true,
        closeOnSelect: true, /* закрытие после выбора, default == true */

        // containerCssClass: 'dd-container', /* НЕ РАБОТАЕТ */
        // containerCss: {
            // 'width' : '100%',
        // },
        minimumResultsForSearch: Infinity,  /* вырубает поиск */
        
    });

    $('.dd__select').on('select2:select', function (e) {
        // var data = e.params.data;
        // console.log(data);

        $(this).closest('.dd').addClass('_selected');

        // e.closest('.dd').addClass('_selected');
    });

});