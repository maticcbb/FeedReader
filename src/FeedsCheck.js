function FeedsCheck() {
    this.table_url = []; //array for checking purposes (url)
    this.checked_url = false; //bool for insure that test goes well
    this.table_name = []; //array for checking purposes (name)
    this.checked_name = false; //bool for insure that test goes well
}
 // methode that check if all URLs are not empty or has property url in object
FeedsCheck.prototype.urlCheck = function (allFeeds) {
    for (let i = 0; i < allFeeds.length; i++) {
        if (allFeeds[i].url !== '' && allFeeds[i].hasOwnProperty('url')) { 
            this.table_url.push('OK');
            if (this.table_url.length === allFeeds.length) {
                this.checked_url = true;
                /* compare new array  with cheked array if there have 
                 the same lenght and change checked_url value to true */
            }
        }

    }
}
// methode that check if all names are not empty or has property url in object
FeedsCheck.prototype.nameCheck = function (allFeeds) {
    for (let i = 0; i < allFeeds.length; i++) {
        if (allFeeds[i].name !== '' && allFeeds[i].hasOwnProperty('name')) {
            this.table_name.push('OK');
            if (this.table_name.length === allFeeds.length) {
                this.checked_name = true;
                /* compare new array  with cheked array if there have 
                 the same lenght and change checked_name value to true */
            }
        }

    }
}