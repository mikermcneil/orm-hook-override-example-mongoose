module.exports = {
  //
  // Note that since the ORM hook is overridden, NONE OF THE DOCUMENTATION FOR
  // MODELS/WATERLINE/CONNECTIONS/ADAPTERS/ETC is relevant!
  //
  // Please read the README file from https://github.com/mikermcneil/sails-hook-orm-mongoose
  // in its entirety before using this example.
  //
  schema: {
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  },



  /**
   * constructSchema()
   *
   * Note that this function must be synchronous!
   *
   * @param  {Dictionary} schemaDefinedAbove  [the raw schema defined above, or `{}` if no schema was provided]
   * @param  {SailsApp} sails                 [just in case you have globals disabled, this way you always have access to `sails`]
   * @return {MongooseSchema}
   */
  constructSchema: function (schemaDefinedAbove, sails) {
    // e.g. we might want to pass in a second argument to the schema constructor
    var newSchema = new sails.mongoose.Schema(schemaDefinedAbove, { autoIndex: false });

    // Or we might want to define an instance method:
    newSchema.method('meow', function () {
      console.log('meeeeeoooooooooooow');
    });

    // Or a static ("class") method:
    newSchema.static('findByName', function (name, callback) {
      return this.find({ name: name }, callback);
    });

    // Regardless, you must return the instantiated Schema instance.
    return newSchema;
  }

};
