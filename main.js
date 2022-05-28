var len = 1
    var obj1 = document.getElementById('applications')
    for(var i = 0; i<len; i++){
        $('.application').clone().appendTo(obj1)
    }
    $('.application:eq(1)').css('border', '1px solid #66D144')
    $('.application:eq(0), .application:eq(2), .application:eq(4)').css('margin-right', '40px');
    $('.application:eq(4), .application:eq(5)').css('margin-bottom', '0');

    $('.application:eq(3) img').attr('src', 'Assets/image/zaimy_kz.png')
    $('.application:eq(4) img').attr('src', 'Assets/image/TurboMoney.png')
    $('.application:eq(5) img').attr('src', 'Assets/image/MoneyClick.png')

    $('.application:eq(3) .app_p').text('Первые 7 дней 0%')
    $('.application:eq(4) .app_p').text('Первый без переплат')
    $('.application:eq(5) .app_p').text('Без переплат')


    $('.help_desk div:eq(0)').css('width', '310px').css('height', '1312px')
    var len = 4
    var obj2 = document.getElementById('help_desk')
    for(var i = 0; i<len; i++){
        $('.help_text:eq(0)').clone().appendTo(obj2)
    }
    for(var i = 1; i<5; i++){
        
        $('.help_text:eq('+i+') p').contents()[0].nodeValue = (i+1) + '.';
    }
    

    $('.help_text:eq(1) p span').text('Для получения займа достаточно одного документа - удостоверение личности. Без залога, без дохода, без пенсионных отчислений, с действующим кредитом, пенсионерам и студентам.')
    $('.help_text:eq(2) p span').text('Режим работы нашего колл-центра 6901 с 09:00 - 20:00 ежедневно без выходных.')
    $('.help_text:eq(3) p span').text('Наши операторы помогут Вам оформить заявку правильно, для повышения вероятности одобрения.')
    $('.help_text:eq(4) p span').text('Если Вы зашли на сайт в нерабочее время нашего центра 6901, то Вы можете попробовать самостоятельно оформить займ выбрав одно из представленных МФО кликнув на “Подать заявку”, пошагово заполнив поля.')

    $('.help_text:eq(4)').find('hr').remove()


    $('.footer .container hr:eq(0)').css('margin-top', '50px').css('margin-bottom', '20px')
    $('.footer .container hr:eq(1)').css('margin-top', '20px').css('margin-bottom', '0px')
    $('.footer .container p:eq(1)').css('font-size','14px')

    var screenWidth = window.screen.availWidth;

    if(screenWidth <= 1280){
        $('.application:eq(0), .application:eq(2), .application:eq(4)').css('margin-right', '15px');
    }
    if(screenWidth <= 1024){
        $('.application:eq(1) img').css('width', '160px').css('height', '40px')    
    }
    if(screenWidth <= 425){
        $('.application:eq(0), .application:eq(2), .application:eq(4)').css('margin-right', '0');
        $('.application:eq(1) img').css('width', '150px').css('height', '30px')
        $('.footer .container hr:eq(0)').css('margin-top', '0px')
    }
    if(screenWidth <= 375){
        $('.application:eq(1) img').css('width', '96px').css('height', '20px')
        $('.application:eq(2) img').css('width', '92px').css('height', '23px')
        $('.application:eq(3) img').css('width', '82px').css('height', '20px')
        $('.application:eq(4) img').css('width', '101px').css('height', '20px')
        $('.application:eq(5) img').css('width', '76px').css('height', '25px')
        $('footer .container p:eq(1)').css('font-size', '12px')
    }