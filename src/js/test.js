document.addEventListener("DOMContentLoaded", function () {
    var modal = $modal({
        title: 'Текст заголовка',
        content: '<p>Содержимое модального окна...</p>',
        footerButtons: [
            { class: 'btn btn__cancel', text: 'Отмена', handler: 'modalHandlerCancel' },
            { class: 'btn btn__ok', text: 'ОК', handler: 'modalHandlerOk' }
        ]
    });
    document.querySelector('#show-modal').addEventListener('click', function(e) {
        // отобразим модальное окно
        modal.show();
    });
})