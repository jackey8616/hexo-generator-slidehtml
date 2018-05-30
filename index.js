/**
 * Created by clooooode on 2018/05/30.
 */
'use strict';

var hexo = hexo != undefined ? hexo : {};

hexo.extend.generator.register('slidehtml', require('./lib/generator'));
