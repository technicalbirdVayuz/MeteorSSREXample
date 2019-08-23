// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';


// import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });


// Template.info.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
//   loop() {
//   	var data = UserInfo.find({}).fetch();
//     return data;
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
// Template.page2.onRendered(function(){
  
// })
// Template.registerHelper("fetch_data",function(){
//     return [
//       {
//         name: 'User 1',
//         age: 26,
//         image: 'http://api.randomuser.me/portraits/med/women/39.jpg',
//         description: 'Lorem ipsum dolor sit amet'
//       },
//       {
//         name: 'User 2',
//         age: 34,
//         image: 'http://api.randomuser.me/portraits/med/men/39.jpg',
//         description: 'Lorem ipsum dolor sit amet'
//       },
//       {
//         name: 'User 3',
//         age: 66,
//         image: 'http://api.randomuser.me/portraits/med/lego/2.jpg',
//         description: 'Lorem ipsum dolor sit amet'
//       },
//       {
//         name: 'User 4',
//         age: 31,
//         image: 'http://api.randomuser.me/portraits/med/women/38.jpg',
//         description: 'Lorem ipsum dolor sit amet'
//       }
//     ];
//   });
