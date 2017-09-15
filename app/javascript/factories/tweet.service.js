
export default class TweetService {
  constructor($http) {
    this.$http = $http;
  }

  getTweets = () => {
    return this.$http.get('/tweets')
            .then(handleResponse)
            .catch(handleError)
  }

  createTweet = (content) => {
    var req = {
      method: 'POST',
      url: '/tweets',
      headers: {
        'Content-Type': undefined
      },
      data: { content }
    }
    return this.$http(req)
  }

  handleResponse = (response) => {
    console.log(response)
    return response.data
  }

  handleError = (error) => {
    console.log(error)
  }
}
