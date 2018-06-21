function FeedsCheck() {
    this.table_url = [];
    this.checked_url = false;
    this.table_name = [];
    this.checked_name = false;
}

FeedsCheck.prototype.urlCheck = function (allFeeds) {
    for (let i = 0; i < allFeeds.length; i++) {
        if (allFeeds[i].url !== '' && allFeeds[i].hasOwnProperty('url')) {
            this.table_url.push('OK');
            if (this.table_url.length === allFeeds.length) {
                this.checked_url = true;

            }
        }

    }
}

FeedsCheck.prototype.nameCheck = function (allFeeds) {
    for (let i = 0; i < allFeeds.length; i++) {
        if (allFeeds[i].name !== '' && allFeeds[i].hasOwnProperty('name')) {
            this.table_name.push('OK');
            if (this.table_name.length === allFeeds.length) {
                this.checked_name = true;

            }
        }

    }
}