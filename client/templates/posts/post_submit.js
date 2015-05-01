Template.postSubmit.events({
  'submit form': function (event) {
    event.preventDefault();

    var post = {
      url: $(event.target).find('[name=url]').val(),
      title: $(event.target).find('[name=title]').val()
    };

    Meteor.call('postInsert', post, function(error, result) {
      // display error to the user and abort
      if (error) {
        return alert(error.reason);
      }

      // show this result but route anyway
      if (result.postExists) {
        alert('This link has already been posted');
      }

      Router.go('postPage', {_id: result._id});
    });
  }
});