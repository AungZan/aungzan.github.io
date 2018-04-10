$(document).ready(function() {
    $('#success-alert').hide();

    $('#contact-form').attr('action', 'https://formspree.io/' + 'nightkiller10' + '@' + 'gmail' + '.' + 'com');

    $('#emailSent').click(function() {
        $('#success-alert').show();
    });
});