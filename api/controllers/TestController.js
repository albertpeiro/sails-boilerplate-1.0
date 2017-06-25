
/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  'test': function (req, res) {
    var bob = {
      _name: 'Bob',
      _friends: [],
      printFriends () {
        this._friends.forEach(f =>
          console.log(this._name + ' knows ' + f));
      }
    };
    return res.redirect('www.google.com');
  }
};


