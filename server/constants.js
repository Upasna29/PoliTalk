if (Events.find().count()==0){
    var events = [
        {
            'host':'Jan Schakowsky',
            'location': 'ETHS',
            'style': 'Town Hall',
            'time': new Date(2016, 2, 4),
            'description': "It's gonna be lit fam",
        },
        {
            'host': 'Daniel Biss',
            'location': 'Niles North High School',
            'style': 'Speech',
            'time': new Date(2016, 3, 1),
            'description': "I know math vote for me"
        },
        {
            'host': 'Bill Nye',
            'location': 'James Park',
            'style': 'Q & A',
            'time': new Date(2016, 3, 16),
            'description': "Oh man Bill Nye is speaking on my birthday! -Sasha"
        }
    ];
    var id = Events.insert(events);
}
