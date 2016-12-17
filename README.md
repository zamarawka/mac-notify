# Mac-notify

Simpliest and slimmest notifier for Mac without dependecies. Only 39 lines.

## Use it
Install:
```sh
$ npm i --save-dev mac-notify
```

In your code:
```js
const notify = require('mac-notify');

notify();

notify('Oh yeah!!!'); // == { title: 'Oh yeah!!!' }

notify({
    title: 'Hey',
    subtitle: 'You are watching me!',
    message: 'Why do you do this?'
});
```

## License

This is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).