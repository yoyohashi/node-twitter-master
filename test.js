var util = require('util');
var twitter = require('twitter');
var twit = new twitter({
  consumer_key: 'ZuFAk3n4E60DtUGrpzhNe7TWy',
  consumer_secret: 'ijK1X6XrPbn8DYH1EpWscHsFKKsrj7QkiAFGi5S4wSI63p6wpL',
  access_token_key: '2373955968-elKAReegNo4rmIHKdTysLjRGNlGF8t4Imi35zlF',
  access_token_secret: 'zcmHi79qBI4FFOqMTJkKBUG7DF9GpYMv4eI76Pq6HfMR3',
});
var delay = 5; // tweet を消すまでの秒数

var handleTweetRemovalResponse = function(error, data){
  console.log("handleTweetRemovalResponse");
  console.log(error);
  console.log(data);
  if(error == null){
    // 無事消せた。
  }
};

var removeTweet = function(tweetId){
  console.log("removeTweet");
  var path = "/statuses/destroy/" + tweetId + ".json";
  console.log("send post req to " + path);
  setTimeout(function(){
    twit.post(path, handleTweetRemovalResponse);
  }, delay * 1000);
};

var handleTestTweetResponse = function(error, data){
  console.log("handleTestTweetResponse");
  console.log(data);
  if(data != null && data.id_str != null){
    var lastTweet = data.id_str;
    console.log("last tweet id: " + lastTweet);
    removeTweet(lastTweet);
  }
};

var testTweet = function(){
  console.log("testTweet");
  twit.post("/statuses/update.json", {status: "とあるテスト " + new Date()},
            handleTestTweetResponse);
};

testTweet()
