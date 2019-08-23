import { Meteor } from 'meteor/meteor';

// import { UserInfo }  from './../import/collections/insert.js';
// Meteor.startup(() => {
//   // code to run on server at startup
//   for(var i=0;i<1000; i++){
//   	UserInfo.insert({"user_name":"Ankit"+ i});
//   }
// });
Meteor.methods({
	test:function(){
		 var html = SSR.render('seoLayout',{
        template:'seoUser',
        data: {user:'user'}
    });
		// var html = SSR.render("body", {username: "arunoda"});
		return html;
		}
})
