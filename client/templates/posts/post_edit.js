Template.postEdit.events({
  'submit form': function(event) {
    event.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      url: $(event.target).find('[name=url]').val(),
      title : $(event.target).find('[name=title]').val()
    }

    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      if (error) {
        alert(error.reason)
      } else {
        Router.go('postPage', { _id: this.currentPostId });
      }
    });
  },

  'click .delete': function(event) {
    event.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});