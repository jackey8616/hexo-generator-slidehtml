/**
 * Created by clooooode on 2018/06/05
 */
'use strict';

module.exports = function(post) {
    var pluginConfig = this.config.slidehtml;
    if(post._content.includes(pluginConfig.startTag)) {
        var splitContent = post.content.split(pluginConfig.startTag);
        post.content = splitContent[0];
        post._slidehtml = splitContent[1];
    } else {
        post._slidehtml = post.content;
    }
    return post;
};

