'use strict';

module.exports = function(shariff) {
    return {
        popup: true,
        shareText: 'tweet',
        name: 'twitter',
        faName: 'fa-twitter',
        title: {
            'de': 'Bei Twitter teilen',
            'en': 'Share on Twitter',
            'es': 'Compartir en Twitter'
        },
        shareUrl: 'https://twitter.com/intent/tweet?text='+ shariff.getShareText() + '&url=' + shariff.getURL() + shariff.getReferrerTrack()
    };
};