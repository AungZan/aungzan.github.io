$(document).ready(function() {
    $('#success-alert').hide();

    $('#contact-form').attr('action', 'https://formspree.io/' + 'nightkiller10' + '@' + 'email' + '.' + 'com');

    $('#emailSent').click(function() {
        $('#success-alert').show();
    });
});