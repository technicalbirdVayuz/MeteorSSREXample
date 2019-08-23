// var seoPicker = Picker.filter(function(req, res) {
//   var isCrawler = [];
//   var string = req.headers['user-agent'];
//   isCrawler.push(/_escaped_fragment_/.test(req.url));
//   if(string){
//       isCrawler.push(string.indexOf('facebookexternalhit') >= 0);
//       isCrawler.push(string.indexOf('Slack') >= 0);
//       isCrawler.push(string.indexOf('Twitterbot') >= 0);
//   }
//   return isCrawler.indexOf(true) >= 0;
// });

// // Indexing user pages
// seoPicker.route('/username', function(params, req, res){
// console.log("inside the user name route")
//     var user = "Details";
//     var html = SSR.render('seoLayout',{
//         template:'seoUser',
//         data: {user:user}
//     });
//     res.end(html);
// });
var seoPicker = Picker.filter(function(req,res) {
  //return /_escape_fragment_/.test(req.url);
  return true;
});
seoPicker.route('/browse/:type', function(params, req, res) {
    console.log("Inside Browe");
    console.log(params.type);
    var html = SSR.render('seoLayout',{
        template:'seoUser',
        data: {user:params.type}
    });
  res.end(html);
});
