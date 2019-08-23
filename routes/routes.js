FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("hello");
    }
});

FlowRouter.route('/card_swipe', {
    action: function(params) {
        BlazeLayout.render("card_swipe");
    }
});
FlowRouter.route('/page2', {
    action: function(params) {
        BlazeLayout.render("page2");
    }
});

FlowRouter.route('/tinder', {
    action: function(params) {
        BlazeLayout.render("tinder");
    }
});

FlowRouter.route('/info', {
    action: function(params) {
        BlazeLayout.render("info");
    }
});
FlowRouter.route('/new_page', {
    action: function(params) {
        BlazeLayout.render("new_page");
    }
});FlowRouter.route('/share', {
    action: function(params) {
        BlazeLayout.render("share");
    }
});FlowRouter.route('/ionicShare', {
    action: function(params) {
        BlazeLayout.render("ionicShare");
    }
});