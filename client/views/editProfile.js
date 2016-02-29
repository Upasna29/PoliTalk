Template.editProfile.onRendered (
   function() {
      $(document).ready(function() {
      $('select').material_select();
   });
});

Template.editProfile.events({
    'submit #profile': function(e){
        e.preventDefault();

        var myprofile = {
            'firstname': $('#first_name').val(),
            'lastname':  $('#last_name').val(),
            'phone':     $('#icon_telephone').val(),
            'gender':    $("input[type='radio'][name='gender']:checked").val(),
            'notify':    $("input[type='radio'][name='receiveNotifications']:checked").val(),
         };
        console.log(myprofile);
    }});
