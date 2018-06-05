/**
 * Created by clooooode on 2018/05/30.
 */
'use strict';

var assign = require('object-assign');

var config = hexo.config.slidehtml = assign({
    titleMerge: true,
    horizontalSeparator: '^\\n---\\n',
    verticalSeparator: '^\\n--\\n',
    startTag: '<!-- Slide Start -->'
}, hexo.config.slidehtml);

hexo.extend.generator.register('slidehtml', require('./lib/generator'));
hexo.extend.filter.register('before_post_render', require('./lib/filter'));

