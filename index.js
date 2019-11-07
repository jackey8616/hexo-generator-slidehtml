/**
 * Created by clooooode on 2018/05/30.
 */
'use strict';

const filter = require('./lib/filter');

var config = hexo.config.slidehtml = Object.assign({
    titleMerge: true,
    horizontalSeparator: '^\\n---\\n',
    verticalSeparator: '^\\n--\\n',
    startTag: '<!-- Slide Start -->'
}, hexo.config.slidehtml);

hexo.extend.generator.register('slidehtml', require('./lib/generator'));
hexo.extend.filter.register('before_post_render', filter.beforePostRender);
hexo.extend.filter.register('after_post_render', filter.afterPostRender);
