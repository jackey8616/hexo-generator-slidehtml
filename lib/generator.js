/**
 * Created by clooooode on 2018/05/30.
 */
'use strict';

var fs = require('fs');
var path = require('path');
var ejs = require('ejs');

function loadPostConfig(pluginConfig, post) {
    var postConfig = Object.assign({}, pluginConfig);
    for(var each in post.slidehtml) {
        switch (each) {
            case 'slideTransition':
                if ('none/fade/slide/convex/concave/zoom'.split('/').includes(post.slidehtml[each]) === false) {
                    throw new Error('slideTransition should be one of none/fade/slide/convex/concave/zoom');
                }
        }
        postConfig[each] = post.slidehtml[each];
    }
    return postConfig;
}

module.exports = function(locals) {
    var pluginConfig = this.config.slidehtml;
    var baseDir = this.base_dir;
    var publicDir = this.public_dir;
    var templatePath = path.join(this.plugin_dir, 'hexo-generator-slidehtml', 'layout', 'post-slide.ejs');
    var template = fs.readFileSync(templatePath, 'utf-8');

    var posts = locals.posts.toArray()
        .filter(function(post) {
            return post.slidehtml !== undefined || post.slidehtml === true;
        }
    );

    posts.forEach(function(_post) {
        var postConfig = loadPostConfig(pluginConfig, _post);
        var pageData =  _post._slidehtml;

        if(postConfig.titleMerge === true) {
            pageData = _post.title + '\n\n' + pageData;
        }

        var pageData = ejs.render(template, {
            filename: _post.title,
            page: pageData,
            config: postConfig
        });
        var filePath = path.join(publicDir, _post.path);
        if(!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, { recursive: true }, function (err) {
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

