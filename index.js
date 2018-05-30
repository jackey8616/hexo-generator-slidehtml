/**
 * Created by clooooode on 2018/05/30.
 */
'use strict';

var assign = require('object-assign');

var config = hexo.config.slidehtml = assign({
    titleMerge: true
}, hexo.config.slidehtml);

hexo.extend.generator.register('slidehtml', require('./lib/generator'));

