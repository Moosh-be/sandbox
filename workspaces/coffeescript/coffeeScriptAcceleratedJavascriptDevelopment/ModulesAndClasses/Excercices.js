// Generated by CoffeeScript 1.3.3
(function() {
  var Foo, Genie, RestoreOldAphorism, Season, Spring, bar, baz, foo, g1, g2, root,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  root = typeof global !== "undefined" && global !== null ? global : window;

  root.aphorism = 'Fool me 8 or more times, shame on me';

  (RestoreOldAphorism = function() {
    root.aphorism = 'Fool me once, shame on you';
    return console.log(aphorism);
  })();

  console.log(aphorism);

  Genie = function() {};

  Genie.wishesLeft = 3;

  Genie.prototype.grantWish = function() {
    if (Genie.wishesLeft > 0) {
      console.log('wish granted');
      return Genie.wishesLeft--;
    }
  };

  g1 = new Genie;

  g1.grantWish();

  g1.grantWish();

  g2 = new Genie;

  g2.grantWish();

  g2.grantWish();

  g2.grantWish();

  g2.grantWish();

  Season = (function() {

    function Season() {}

    return Season;

  })();

  Spring = (function(_super) {

    __extends(Spring, _super);

    function Spring() {
      return Spring.__super__.constructor.apply(this, arguments);
    }

    return Spring;

  })(Season);

  console.log((new Season).__proto__.__proto__.__proto__);

  console.log((new Season).__proto__.__proto__);

  console.log((new Spring).__proto__.__proto__.__proto__);

  console.log({}.__proto__);

  console.log({}.__proto__.__proto__);

  (typeof window !== "undefined" && window !== null ? window : global).property = 'global context';

  this.property = 'surrounding context';

  Foo = (function() {

    function Foo() {
      this.bar = __bind(this.bar, this);
      this.property = 'instance context';
    }

    Foo.prototype.bar = function() {
      return console.log(this.property);
    };

    Foo.prototype.baz = function() {
      return console.log(this.property);
    };

    return Foo;

  })();

  foo = new Foo;

  bar = foo.bar;

  baz = foo.baz;

  foo.bar();

  bar();

  baz();

  console.log(this.property);

}).call(this);