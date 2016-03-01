Template.header.onRendered(function(){
    $(".missingPostButton").click(function(){
        $(".missingPostsFeature").fadeIn();
     });
  });

Template.newsFeed.helpers({
    getPosts: function(){
        return Posts.find();
    }
});
