$(document).ready(function () {
    $('#softwareprojects').click(function () {
        $('#softwareprojects_div').show();
        $('#mobileapplication_div').hide();
        $('#webdesign_div').hide();
        $('#socialmediamanagement_div').hide();
    });
    $('#mobileapplication').click(function () {
        $('#mobileapplication_div').show();
        $('#softwareprojects_div').hide();
        $('#webdesign_div').hide();
        $('#socialmediamanagement_div').hide();
    });
    $('#webdesign').click(function () {
        $('#softwareprojects_div').hide();
        $('#mobileapplication_div').hide();
        $('#webdesign_div').show();
        $('#socialmediamanagement_div').hide();
    });
    $('#socialmediamanagement').click(function () {
        $('#softwareprojects_div').hide();
        $('#mobileapplication_div').hide();
        $('#webdesign_div').hide();
        $('#socialmediamanagement_div').show();
    });
});
$('.service-catergory li').on('click', function () {
    $('li').removeClass('active');
    $(this).addClass('active');
});