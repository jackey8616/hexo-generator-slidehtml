/**
 * Created by clooooode on 2018/05/30.
 */


var hexo = hexo != undefined ? hexo : {};
var hexoConfig = hexo.config

var fs = require('fs');
//var fs = require('hexo-fs');
var path = require('path');
var mkdirp = require('mkdirp');
var ejs = require('ejs');
var yfm = require('hexo-front-matter');
var sourceRoot = path.join('source', '_posts');
var templatePath= path.join('themes', hexoConfig.theme, 'layout', 'post-slide.ejs');
var outPathRoot = 'public';

var files = fs.readdirSync(path.join(sourceRoot));


hexo.on("generateBefore", function(){
    console.log("Generating slide html file. ", __dirname)

    files.forEach(function (_item) {
        var fileName = _item.toString();
        if(fileName.substring(fileName .lastIndexOf("."))=='.md') {

            // Reading Markdown
            var fileName = _item.toString();
            var page = fs.readFileSync(path.join(sourceRoot, fileName), 'UTF-8');

            // Reading title and date
            var title = yfm.parse(page).title;
            var date = yfm.parse(page).date != undefined ? new Date(yfm.parse(page).date) : new Date();
            page = page.replace(/([\r\n\0]*?)---([\S\s]*?)---([\r\n\0]*?)/g, title + '\n');

            // Concat output path
            var year = date.getFullYear().toString();
            var month = ("0" + (date.getMonth() + 1)).slice(-2).toString();
            var day = ("0" + date.getDate()).slice(-2).toString();
            var outPath = path.join(outPathRoot, year, month, day, fileName.replace('.md', ''));
            if (!fs.existsSync(outPath)) {
                mkdirp.sync(outPath, function (err) {
                    if (err) {
                        console.log(err);
                        //throw err;
                    }
                });
            }

            // Output to HTML file.
            var template = fs.readFileSync(templatePath, 'utf-8');
            var pageData = ejs.render(template, {
                filename: title,
                page: page
            });
            fs.writeFileSync(path.join(outPath, 'index-slide.html'), pageData, function (err) {
                if (err) {
                    console.log(err);
                    // throw err;
                }
            });
        }
        console.log(outPath + ' slide generated.');
    });
    console.log('Slides all generated.');
});
