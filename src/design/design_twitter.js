const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

const Twitter = function () {
    this.users = new Map();
    this.timestamp = 0;
};

Twitter.prototype.postTweet = function (userId, tweetId) {
    if (!this.users.has(userId)) {
        this.users.set(userId, { tweets: [], following: new Set() });
    }
    this.users
        .get(userId)
        .tweets.push({ timestamp: this.timestamp, tweetId });
    ++this.timestamp
};

Twitter.prototype.getNewsFeed = function (userId) {
    if (!this.users.has(userId)) {
        return [];
    }

    const maxPQ = new MaxPriorityQueue(tweet => tweet.timestamp);
    const seenTweets = new Set();

    const user = this.users.get(userId);
    user.tweets.forEach(tweet => {
        if (!seenTweets.has(tweet.tweetId)) {
            maxPQ.enqueue(tweet);
            seenTweets.add(tweet.tweetId);
        }
    });

    user.following.forEach(followeeId => {
        if (this.users.has(followeeId)) {
            this.users.get(followeeId).tweets.forEach(tweet => {
                if (!seenTweets.has(tweet.tweetId)) {
                    maxPQ.enqueue(tweet);
                    seenTweets.add(tweet.tweetId);
                }
            });
        }
    });

    const newsFeed = [];
    for (let i = 0; i < 10 && !maxPQ.isEmpty(); i++) {
        newsFeed.push(maxPQ.dequeue().tweetId);
    }

    return newsFeed;
};

Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.users.has(followerId)) {
        this.users.set(followerId, { tweets: [], following: new Set() });
    }
    this.users.get(followerId).following.add(followeeId);
};

Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (this.users.has(followerId)) {
        this.users.get(followerId).following.delete(followeeId);
    }
};

module.exports = Twitter;