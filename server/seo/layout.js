import {SSR , Template } from 'meteor/meteorhacks:ssr';

Meteor.startup(() => {
	console.log("Startup")
	SSR.compileTemplate('seoLayout', Assets.getText('layout.html'));
	Template.seoLayout.helpers({
	  getDocType: function() {
	    return "<!DOCTYPE html>";
	  }
	});

	SSR.compileTemplate('seoUser', Assets.getText('users.html'));
	Template.seoUser.helpers({
	    userDescription:function(description){
	        if(description) {
	            return description;
	        } else {
	            return "default description";
	        }
	    },
	    userTwitter:function(handle){
	        if(handle) {
	            return handle;
	        } else {
	            return "default handle"
	        }
	    }
	})
})	