/** 
 * Created by clo5de on 2018/05/30.
 */

var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var ejs = require('ejs');
var yfm = require('hexo-front-matter');
var sourceRoot = path.join('source', '_posts');
var templatePath= path.join('themes', 'landscape', 'layout', 'post-slide.ejs');
var outPathRoot = 'public';

var hexo = hexo != undefined ? hexo : {}; 

hexo.on("generateBefore", function(){
    console.log("Generating slide html file. ", __dirname)

    files.forEach(function (_item) {
        var fileName = _item.toString();
        if(fileName.substring(fileName .lastIndexOf("."))=='.md') {

            // Reading Markdown
            var page = fs.readFileSync(path.join(sourceRoot, _item.toString()), 'UTF-8');

            // Reading title and date
            var title = yfm.parse(page).title;
            var date = new Date(yfm.parse(page).date);
            page = page.replace(/([\r\n\0]*?)---([\S\s]*?)---([\r\n\0]*?)/g, title+'\n');

            // Concat output path
            var year = date.getFullYear().toString();
            var month = ("0" + (date.getMonth() + 1)).slice(-2).toString();
            var day = ("0" + date.getDate()).slice(-2).toString();
            //var outPath = path.join(outPathRoot, year, month, day, title);
            var outPath = path.join(outPathRoot, 'slides');
            if (!fs.existsSync(outPath)) {
                mkdirp(outPath, function (err) {
                    if (err) {
                        console.log(err);
                        //throw err;
                    }
                });
            }

            // Output to HTML file.
            var template = fs.readFileSync(templatePath, 'utf-8');
            var pageData = ejs.render(template, {
                filename:title,
                page: page
            });
            fs.writeFile(path.join(outPath, _item.toString().replace('.md', '.html')), pageData, function (err) {
                if (err) {
                    console.log(err);
                    //throw err;
                }
            });
        }
        console.log(path.join(outPath, _item.toString()) + ' slide generated.');
    });
    console.log('Slides all generated.');
});
