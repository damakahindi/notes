const OAuth = require('oauth');

// const Twitter = require('twitter');

// const client = new Twitter({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
// });


// export default function getTrends() {
//   client.post('statuses/update', { status: 'test TwAPI ' }, (error, tweets, response) => {
//     if (!error) {
//       console.log(tweets);
//     } else {
//       throw error;
//     }
//   });
// }
// const headerCors = {
//   'Access-Control-Allow-Origin': '',
//   'Access-Control-Request-Method': 'POST,GET,OPTIONS,PUT',
//   'Access-Control-Allow-Credentials': 'true',
//   'Access-Control-Allow-Headers': 'Origin,Accept, X-Requested-With, Content-Type ',
// };

// const opt = Object.assign({}, defaultOptions, options);
// const sentData = {
//   method: opt.method,
//   mode: 'cors',
//   header,
//   body: opt.body || '',
// };

const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token.json',
  'https://api.twitter.com/oauth/access_token.json',
  process.env.TWITTER_CONSUMER_KEY,
  process.env.TWITTER_CONSUMER_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1',
);


export default function getTrends() {
  return oauth.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    process.env.accessTokenKey,
    process.env.accessTokenSecret,
    (e, data, res) => {
      if (e) console.error(e);
      console.log('DATA', data);
      console.log('====================================');
      console.log('RESP', res);
      console.log('====================================');
    },
  );
}


// const url = 'https://api.twitter.com/1.1/statuses/update.json';
// export default function getTrends() {
//   oauth.post(
//     url,
//     process.env.TWITTER_ACCESS_TOKEN,
//     process.env.TWITTER_ACCESS_TOKEN_SECRET,
//     { status: 'hey please work this' },
//     'application/x-www-form-urlencoded',
//     (e, data, res) => {
//       if (e) console.log('e---->', res);
//       console.log('here---->', require('util').inspect(data));
//     });
// }
// oauth.post(
//   url,
//   process.env.accessTokenKey,
//   process.env.accessTokenS, ecret,
//   {status: `Wanted to share this note ${book.title}`},
//   "application/x-www-form-urlencoded",
//   function (e, data, res){
//     if (e) console.log("e---->", e);
//     console.log("here---->", require('util').inspect(data));
//   });
// })
