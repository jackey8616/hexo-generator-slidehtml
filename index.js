/**
 * Created by clooooode on 2018/05/30.
 */
'use strict';

const filter = require('./lib/filter');

var assign = require('object-assign');

var config = hexo.config.slidehtml = assign({
    titleMerge: true,
    horizontalSeparator: '^\\n---\\n',
    verticalSeparator: '^\\n--\\n',
    startTag: '<!-- Slide Start -->',
    slideTransition: 'none', // none/fade/slide/convex/concave/zoom
}, hexo.config.slidehtml);

hexo.extend.generator.register('slidehtml', require('./lib/generator'));
hexo.extend.filter.register('before_post_render', filter.beforePostRender);
hexo.extend.filter.register('after_post_render', filter.afterPostRender);

