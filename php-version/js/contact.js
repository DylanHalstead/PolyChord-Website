emailjs.init('TdZ1ll81EczTQPQ5h');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    console.log('ran')
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_u0h5g7e', 'contact-form', this)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
    event.target.reset()
});