# generator-hyper-angular

HyperAngular (`generator-hyper-angular`) is a Yeoman generator for AngularJS/Express/node.js apps emphasizing modularity, configuration,
and testing. It's designed to provide plenty of tooling to help you code expressively at all scales, while putting up
railings to keep your code consistent and clean. It stamps out a simple application that tests itself and self-documents
the structure of the generated template.

## Getting Started

You need Yeoman:
```
$ npm install -g yo
```

Get yourself a nice Protractor environment going:
```
$ npm install -g protractor
$ webdriver-manager update --standalone
```

To install generator-hyper-angular from npm, run:
```
$ npm install -g generator-hyper-angular
```

Make your project a directory:
```
$ mkdir hyper-angular-project && cd $_
```

Get generating after a couple questions:
```
$ yo hyper-angular
```

## Test

Your application is clean right out of the box. Test the whole thing:
```
$ grunt test:all
```

## Run

The application is the documentation. Start it:
````
$ grunt serve:development
```
After it starts, visit the URL that it tells you to visit in your favorite browser.

## License

MIT

## Feedback

Let me ([Jacob Prystowsky](https://github.com/jprystowsky)) know if you found this useful. I like to build things that are used to build things.
