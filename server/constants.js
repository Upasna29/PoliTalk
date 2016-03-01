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
    _.each(events, function(obj){
        Events.insert(obj);
    });
}

if (Posts.find().count()==0){
    var posts = [
        {
            'author':'Jan Schakowsky',
            'location': 'Evanston, Illinois',
            'description': "In Illinois, community, migrant, homeless and public housing health centers operate 268 primary care sites and serve close to 1 million patients every year.",
        },
        {
            'author': 'Daniel Biss',
            'location': 'Skokie, Illinois',
            'description': "Hey all. Big vote coming up on IL Senate Bill H325-A, let me know what you think."
        },
    ];
    _.each(posts, function(obj){
        Posts.insert(obj);
    });
}
