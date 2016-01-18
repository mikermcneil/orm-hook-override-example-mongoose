# orm-hook-override-example


> #### IMPORTANT
> Please read the README file from https://github.com/mikermcneil/sails-hook-orm-mongoose in its entirety before using this example.
>
> After you've read that, please proceed! To recap, if you use this override then:
> - you cannot use blueprint routing, blueprint actions, or resourceful pubsub methods (technically, use of resourceful pubsub methods is possible, but it has not been tested, and I did not want to enable it in this hook and risk overriding anything important on the Mongoose models)
> - you should use the Mongoose documentation instead of Sails/Waterline docs when dealing with models (your models are Mongoose model instances)
> - none of the model, connection, or blueprint configuration options apply to your app


### What is this?

This is an example app using `sails-hook-orm-mongoose`.

To play around, first pull this down and `npm install`.  Then see `config/mongoose.js` and customize `uri` and/or `connectionOpts` settings to point to your Mongo database.

> Note: in the future, this may be as easy as a one-line install.  In this case, we modified the `.sailsrc` file to disable the original ORM hook.



### Exploring this example

After changing your config, try lifting (`sails lift`) and visiting `/foos` in your browser.  There are three example routes set up in this example, pointing at 3 different actions in `FooController.js`.  Use Postman to send a POST request to `/foos/test` (this will create a record).  Now if you visit `/foos` in your browser again, you'll see that a record has been added.

Now run:

```bash
sails console
```


In this example, there is a single model to can play with which you can access as `sails.models.foo` or just `Foo` (just like with the normal ORM hook, models are globalized by default but can be enabled/disabled using the same settings -- see http://sailsjs.org/documentation/reference/configuration/sails-config-globals for more on that).

You can also use `sails.mongoose` to access the Mongoose object directly.  See https://github.com/mikermcneil/sails-hook-orm-mongoose for more information.

### License

MIT

&copy; 2016, Mike McNeil.
