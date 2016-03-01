if (Events.find().count() === 0){
    var events = [
        {
            'host':'Jan Schakowsky',
            'location': 'ETHS',
            'style': 'Town Hall',
            'time': new Date(2016, 2, 4),
            'description': "It's gonna be lit fam",
            'photo': "RepublicansDebate.jpg",
        },
        {
            'host': 'Daniel Biss',
            'location': 'Niles North High School',
            'style': 'Speech',
            'time': new Date(2016, 3, 1),
            'description': "I know math vote for me",
            'photo': "SpeechEdited.jpg",
        },
        {
            'host': 'Bill Nye',
            'location': 'James Park',
            'style': 'Q & A',
            'time': new Date(2016, 3, 16),
            'description': "Oh man Bill Nye is speaking on my birthday! -Sasha",
            'photo': "Q&A.png",
        }
    ];
    _.each(events, function(obj){
        Events.insert(obj);
    });
}

if (Posts.find().count() === 0){
    var posts = [
        {
            'author':'Jan Schakowsky',
            'location': 'Evanston, Illinois',
            'description': "In Illinois, community, migrant, homeless and public housing health centers operate 268 primary care sites and serve close to 1 million patients every year.",
            'photo': "JanSchakowsky.jpg",
        },
        {
            'author': 'Daniel Biss',
            'location': 'Skokie, Illinois',
            'description': "Hey all. Big vote coming up on IL Senate Bill H325-A, let me know what you think.",
            'photo': "DanielBissEdited.jpg",
        },
        {
            'author':'Bernie Sanders',
            'location': 'Montpelier, Vermont',
            'description': "Finally, let understand that when we stand together, we will always win. When men and women stand together for justice, we win. When black, white and Hispanic people stand together for justice, we win.",
            'photo': "BernieSandersEdited.jpg",
        },
        {
            'author': 'John Kasich',
            'location': 'Cleveland, Ohio',
            'description': "Every time I go to Washington, I break out in a cold sweat. So I try not to spend too much time there.",
            'photo': "JohnKasichEdited.jpg",
        },
    ];
    _.each(posts, function(obj){
        Posts.insert(obj);
    });
}
