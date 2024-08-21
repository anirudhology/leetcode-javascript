const Twitter = require('../../src/design/design_twitter');

let twitter;

beforeEach(() => {
    twitter = new Twitter();
});

test('should post tweet', () => {
    twitter.postTweet(1, 101);
    expect(twitter.getNewsFeed(1)).toEqual([101]);
});

test('should get news feed', () => {
    twitter.postTweet(1, 101);
    twitter.postTweet(2, 102);
    twitter.follow(1, 2);
    expect(twitter.getNewsFeed(1)).toEqual([102, 101]);
});

test('should follow and unfollow users', () => {
    twitter.postTweet(1, 101);
    twitter.postTweet(2, 102);
    twitter.follow(1, 2);
    expect(twitter.getNewsFeed(1)).toEqual([102, 101]);
    twitter.unfollow(1, 2);
    expect(twitter.getNewsFeed(1)).toEqual([101]);
});
