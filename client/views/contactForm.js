Template.contactForm.onRendered (
    function() {
        $(document).ready(function() {
            $('submit').material_select();
            //   $('#textarea1').val('New Text');
            $('#textarea1').trigger('autoresize');
        });
    }
);

Template.contactForm.events({
    'submit #profile': function(e){
        e.preventDefault();
        alert('Thank you for contacting us');
        Router.go('home');
    }
});
