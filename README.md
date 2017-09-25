# TDWG theme

A [Pelican](http://docs.getpelican.com/) theme for the TDWG website.

## Getting started

This theme was developed for the [TDWG website](https://github.com/tdwg/website). It wouldn't make a lot of sense to use for any other website, but you're welcome to adapt it. To get started, download the theme and reference its path in your [Pelican settings](http://docs.getpelican.com/en/latest/settings.html#themes). For example:

```python
THEME = "../tdwg-theme" # If tdwg-theme is in the same directory as your website repo
```

## Repo structure

The repository structure is that of a [Pelican theme](http://docs.getpelican.com/en/latest/themes.html#structure). Files/directories indicated with `GENERATED` should not be edited manually.

```
├── README.md         : Description of this repository
├── LICENSE           : Project license
├── package.json      : npm package description, contains scripts for development
├── .gitignore        : Files and folders to be ignored by git (including node_modules)
│
├── node_modules      : Modules installed by npm, is gitignored. GENERATED
│
├── src
│   ├── js            : Theme specific Javascript files (look here if you want to adapt the JS)
│   └── scss          : Theme specific SCSS (look here if you want to adapt the CSS)
│
├── static            : All static files for this theme. Similar to a "dist" directory. GENERATED
│
└── templates         : Pelican Jinja templates (look here if you want to adapt the HTML)
```

## Development

### Bootstrap

This theme uses [Bootstrap v4.0](https://getbootstrap.com/docs/4.0/getting-started/introduction/) as a framework to create a responsive website. The **HTML** is entirely structured around Bootstrap classes for layout, content, components and utilities, with as little deviation as possible. The **CSS** starts from Bootstrap's SCSS/SASS, with custom variable overwrites in `src/scss/_variables.css` and custom CSS in `src/scss/main.scss`. These get bundled together with Bootstrap in a single `static/css/main.css`.

### Update HTML

The HTML is structured in templates with a Jinja syntax. `templates/base.html` is the main template: all other templates are build upon it. See the [Pelican documentation](http://docs.getpelican.com/en/latest/themes.html) to understand what each template does.

No `npm` scripts need to be run to make HTML changes effective (the `templates` directory is read directly by Pelican).

### Update SCSS and/or Javascript

To update the SCSS and/or JS, [npm](https://www.npmjs.com/get-npm) is required. It is used to install all dependencies (such as [Bootstrap v4.0](https://getbootstrap.com/)) and run development scripts (such as generating the CSS from SCSS).

#### Installation

1. Clone this repo: `git clone https://github.com/tdwg/tdwg-theme`
2. Verify [npm](https://www.npmjs.com/get-npm) is installed: `node -v` (tested with 3.10)
3. Go to the root of this repository
4. Install all dependencies with: `npm install` (will read [package.json](package.json) to create the `node_modules` directory)

#### Update SCSS

1. Go to the `src/scss`
2. Update the relevant `.scss` files
3. Generate the CSS in `static/css` with: `npm run build:css`
4. Or, do step 3 automatically on every change with: `npm run watch:css`

#### Update JS

1. Go to the `src/js`
2. Update or add the relevant `.js` files
3. Copy the updated JS files to `static/js` (will be emptied) as well as the required JS files for Bootstrap with: `npm run build:js`
4. Or, do step 3 automatically on every change with `npm run watch:js`

**Important**: do not touch files in the `static` directory: those are all generated! Look for the files in `src` instead.

## Contributors

[List of contributors](https://github.com/tdwg/tdwg-theme/contributors)

## License

[MIT License](LICENSE)
