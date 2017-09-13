# brunch-with-hugo
A boilerplate wrapping Hugo using Brunch and Browsersync

## OK I cloned the repo, now what?
First run `npm install` pls.

## How do I run a local server?
At the moment, you must run two tasks.

`npm hugo` will run a hugo server, which does the hugo magic and compiles to `/public`.

`npm start` will commence the Brunching, which runs your JS through Babel and also compiles your postcss. There's Browsersync in there too, which proxies the hugo server at `localhost:3000`. I added Browsersync coz I like it better than LiveReload ok?

## One more thing
I included the entirity of [shoelace.css](https://shoelace.style/docs/installing.html) because it was easier, but I don't recommend using it all. Pick out the bits you want from https://github.com/claviska/shoelace-css/blob/master/source/css/shoelace.css and import those. I usually just use the variables, content, forms, tables, and utilities.

#### P.S.
You can use this with Hugo's nifty `--skeleton` flag like `brunch new --skeleton https://github.com/Jayphen/brunch-with-hugo.git <projectname>`. That will create a project, run an npm install for you, and BAM you have a shitty boilerplate thanks to me!

##### P.P.S
Go check out the [Hugo docs](https://gohugo.io/documentation/) and make something better than this because you're smarter than me.
