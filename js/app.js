$(function(){
    $('#header1').on( "mouseover", function () {
        $('#content1').hide();
        $(this).css('background-color', '#551320');
    }).on( "mouseout", function () {
        $('#content1').show();
        $(this).css('background-color', '#7D4E57');
    });

    $('#header2').on( "mouseover", function () {
        $('#content2').hide();
        $(this).css('background-color', '#551320');
    }).on( "mouseout", function () {
        $('#content2').show();
        $(this).css('background-color', '#7D4E57');
    });

    $('#header3').on( "mouseover", function () {
        $('#content3').hide();
        $(this).css('background-color', '#551320');
    }).on( "mouseout", function () {
        $('#content3').show();
        $(this).css('background-color', '#7D4E57');
    });

});
