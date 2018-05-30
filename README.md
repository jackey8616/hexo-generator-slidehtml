# hexo-generator-slidehtml

A hexo plugin to generate slide html when build / generating hexo project.

# Usage
Normally hexo would generate index.html in folder.
This generator will generate a slide.html in same folder.

If you have a article with post settup
```md
---
title: Hello World
slide: true
---
```
this will generate a slide page for it.

# Demo  
[Aritcle](https://jackey8616.github.io/hexo-generator-slidehtml/2018/05/30/hello-world/)  
[Slide](https://jackey8616.github.io/hexo-generator-slidehtml/2018/05/30/hello-world/slide.html)  

# Config
```yml
slidehtml: 
  // Merge title as first slide page.
  titleMerge: true
```

# License
MIT
