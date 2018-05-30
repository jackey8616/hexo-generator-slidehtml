/**
 * Created by clooooode on 2018/05/30.
 */
'use strict';

var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
var mkdirp = require('mkdirp');

module.exports = function(locals) {
    var pluginConfig = this.config.slidehtml;
    var baseDir = this.base_dir;
    var publicDir = this.public_dir;
    var templatePath = path.join(this.plugin_dir, 'hexo-generator-slidehtml', 'layout', 'post-slide.ejs');
    var template = fs.readFileSync(templatePath, 'utf-8');

    var posts = locals.posts.toArray()
        .filter(function(post) {
            return post.slide === undefined || post.slide !== false;
        }
    );

    posts.forEach(function(_post) {
        var pageData = ejs.render(template, {
            filename: _post.title,
            page: pluginConfig.titleMerge ? _post.title + '\n\n' + _post._content : _post._content
        });
        var filePath = path.join(publicDir, _post.path);
        if(!fs.existsSync(filePath)) {
            mkdirp.sync(filePath, function (err) {
                if (err) {
                    console.log(err);
                    //throw err;
                }
            });
        }
        fs.writeFileSync(path.join(filePath, 'slide.html'), pageData, function(err) {
            if (err) {
                console.log(err);
                // throw err;
            }
        });
        console.log('Generated: ' + path.join(filePath, 'slide.html'));
    });

}
