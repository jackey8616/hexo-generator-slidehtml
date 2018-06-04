# hexo-generator-slidehtml  
[![npm version](https://badge.fury.io/js/hexo-generator-slidehtml.svg)](https://badge.fury.io/js/hexo-generator-slidehtml)

A hexo plugin to generate slide html when build / generating hexo project.

# Usage
Normally hexo would generate index.html in folder.
This will generate a slide.html in same folder for you.
Simply visit `https://[yousite]/path/to/your/article/slide.html` to quickly have a presentation.

If you have a article with a simple post settup.  
```md
---
title: Hello World
slidehtml: true
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
  // For reveal.js's page separator, remember escape special character like '\' .
  horizontalSeparator: '^\\n---\\n',
  verticalSeparator: '^\\n--\\n'
```

# Installation  
`npm i hexo-generator-slidehtml`

# Post Attribute
These attribute in post can override plugin's global setup.
```
---
slidehtml:
  titleMerge: true
  horizontalSeparator: ''
  verticalSeparator: ''
---
```
Be advice that: plugin Config useing YAML as format. so it's need escape char(\) for special char.  
But post settup is Markdown format, so escape char(\) only focus on markdown itself.  

# License
MIT
