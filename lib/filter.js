/**
 * Created by clooooode on 2018/06/05
 */
'use strict';

exports.beforePostRender = function(post) {
    var pluginConfig = this.config.slidehtml;
    if(post._content.includes(pluginConfig.startTag)) {
        var splitContent = post._content.split(pluginConfig.startTag);
        post._content = splitContent[0];
        post._slidehtml = splitContent[1];
    } else {
        post._slidehtml = post._content;
    }
    return post;
};

exports.afterPostRender = function(post) {
    var pluginConfig = this.config.slidehtml;
    if(post.content.includes(pluginConfig.startTag)) {
        var splitContent = post.content.split(pluginConfig.startTag);
        post.content = splitContent[0];
    }
    return post;
};

