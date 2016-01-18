/**
 * FooController
 *
 * @description :: Server-side logic for managing foos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  createRobinsonCrusoe: function (req, res) {
    //
    // Note that since the ORM hook is overridden, NONE OF THE DOCUMENTATION FOR
    // MODELS/WATERLINE/CONNECTIONS/ADAPTERS/ETC is relevant!
    //
    // Please read the README file from https://github.com/mikermcneil/sails-hook-orm-mongoose
    // in its entirety before using this example.
    //
    // Remember: blueprints and resourceful pubsub are disabled.
    //
    // Notice that, while this usage looks a lot like normal Waterline usage, it isn't!
    // This is talking directly to Mongoose.
    Foo.create({
      title:  'Robinson Crusoe',
      author: 'Daniel Defoe',
      body:   'A book about a guy on an island.',
      comments: [],
      hidden: false,
      meta: {}
    }, function (err, newFoo) {
      if (err) {
        return res.negotiate(err);
      }

      return res.ok();
    });
  },

  create: function (req, res) {

    if ( !_.isString(req.param('title')) ) {
      return res.badRequest('`title` parameter must be specfied as a string!');
    }
    if ( !_.isString(req.param('author')) ) {
      return res.badRequest('`author` parameter must be specfied as a string!');
    }
    if ( !_.isString(req.param('body')) ) {
      return res.badRequest('`body` parameter must be specfied as a string!');
    }

    //
    // Note that since the ORM hook is overridden, NONE OF THE DOCUMENTATION FOR
    // MODELS/WATERLINE/CONNECTIONS/ADAPTERS/ETC is relevant!
    //
    // Please read the README file from https://github.com/mikermcneil/sails-hook-orm-mongoose
    // in its entirety before using this example.
    //
    // Remember: blueprints and resourceful pubsub are disabled.
    //
    // Notice that, while this usage looks a lot like normal Waterline usage, it isn't!
    // This is talking directly to Mongoose.
    Foo.create({
      title:  req.param('title'),
      author: req.param('author'),
      body:   req.param('body'),
      comments: [],
      hidden: false,
      meta: {}
    }, function (err, newFoo) {
      if (err) {
        return res.negotiate(err);
      }

      return res.ok();
    });
  },

  find: function (req, res) {
    //
    // Note that since the ORM hook is overridden, NONE OF THE DOCUMENTATION FOR
    // MODELS/WATERLINE/CONNECTIONS/ADAPTERS/ETC is relevant!
    //
    // Please read the README file from https://github.com/mikermcneil/sails-hook-orm-mongoose
    // in its entirety before using this example.
    //
    // Remember: blueprints and resourceful pubsub are disabled.
    //
    // Notice that, while this usage looks a lot like normal Waterline usage, it isn't!
    // This is talking directly to Mongoose.
    Foo.find({
      /* remember, this is Mongoose syntax, not Waterline.  Foo is a Mongoose model- refer to Mongoose's docs. */
    }, function (err, foos) {
      if (err) {
        return res.negotiate(err);
      }

      return res.json(foos);
    });
  }

};

