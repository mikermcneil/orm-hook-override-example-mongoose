# orm-hook-override-example

a [Sails](http://sailsjs.org) application



### What is this?

This is an example app using `sails-hook-orm-mongoose`.  To play around, first pull this down and `npm install`.  Then see `config/mongoose.js` and customize `uri` and/or `connectionOpts` settings to point to your Mongo database.


Now run:

```bash
sails console
```


There is a single model to can play with which you can access as `sails.models.foo` or just `Foo` (just like with the normal ORM hook, models are globalized by default but can be enabled/disabled using the same settings -- see http://sailsjs.org/documentation/reference/configuration/sails-config-globals for more on that).

You can also use `sails.mongoose` to access the Mongoose object directly.  See https://github.com/mikermcneil/sails-hook-orm-mongoose for more information.


> Note: in the future, this may be as easy as a one-line install.  In this case, we modified the `.sailsrc` file to disable the original ORM hook.


### License

MIT

&copy; 2016, Mike McNeil.
