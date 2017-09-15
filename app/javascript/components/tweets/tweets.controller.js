import TweetService from '../../factories/tweet.service.js'

export default class TweetsController {
  constructor(TweetService) {
    vm = this;
    vm.TweetService = TweetService;
  }

  activate = () => {
    getTweets();
  }

  getTweets = () =>  {
    vm.TweetService.getTweets()
      .then(setTweets)
  }

  setTweets = (data) => {
    vm.tweets = data
  }
}


// export default class TweetsComponent {
//   transclude: true,
//   controller: TweetsController,
//   template: require("html-loader!./tweets.html")
// }
