
# setter-method

  getter setter methods without the boilerplate

## Installation

_With [packin](//github.com/jkroso/packin) or [component](//github.com/component/component)_

    $ packin add jkroso/setter-method

then in your app:

```js
var addSetter = require('setter-method')
```

## API

### addSetter(object, property, default)

  create a chainable getter/setter method on `obj`

```js
var object = {};

// create methods and default values
addSetter(object, 'width', 50);
addSetter(object, 'height', 100);
addSetter(object, 'color', 'aliceblue');

// set values
object
  .width(1200)
  .height(800);

// get values
object.width(); // => 1200
object.color(); // => 'aliceblue'
```

## Running the tests

Just run `make` and navigate your browser to the test directory.
