function FeedsCheck() {
this.table = [];
}

FeedsCheck.prototype.urlDefined = function () {
    
    for (let i = 0; i < allFeeds.length; i++) {
        if (allFeeds[i].url !== '' && allFeeds[i].hasOwnProperty('url')) {
           this.table.push('OK');
           if(this.table.length === allFeeds.length) {
               return true ;
           }
        }

    }
}

var feedCheck = new FeedsCheck();

var allFeeds = [{
    name: 'Udacity Blog',
    url: 'http://blog.udacity.com/feed'
}, {
    name: 'CSS Tricks',
    url: 'http://feeds.feedburner.com/CssTricks'
}, {
    name: 'HTML5 Rocks',
    url: 'http://feeds.feedburner.com/html5rocks'
}, {
    name: 'Linear Digressions',
    url: 'http://feeds.feedburner.com/udacity-linear-digressions'
}];


feedCheck.urlDefined();