FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', { status: 'navbar', main: 'giftiqueLayout' });
  }
});