Template.events.helpers({
    getEvents: function(){return Events.find();},
});

function addClassByClick(button){
  $(button).addClass("disabled");
}
