if (Events.find().count()==0){
    var event = {
        'host':'Jan Schakowsky',
        'location': 'ETHS',
        'style': 'Town Hall',
        'time': new Date(2016, 2, 4),
    };
    var id = Events.insert(event);
}
