// Generated by CoffeeScript 1.3.3
var a, b, c, cat, cats, eat, lasagna, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;

c = "c";

b = null;

a = (_ref = b != null ? (_ref1 = b.d) != null ? _ref1.property : void 0 : void 0) != null ? _ref : c;

console.log("1. " + a);

console.log("2. ???");

if (typeof lasagna === "function" ? lasagna() : void 0) {
  if (typeof cats !== "undefined" && cats !== null) {
    if ((_ref2 = cats['Garfield']) != null) {
      if (typeof _ref2.eat === "function") {
        _ref2.eat();
      }
    }
  }
}

cats = [];

console.log("2. cats");

if (typeof lasagna === "function" ? lasagna() : void 0) {
  if (cats != null) {
    if ((_ref3 = cats['Garfield']) != null) {
      if (typeof _ref3.eat === "function") {
        _ref3.eat();
      }
    }
  }
}

cats = {
  'Garfield': 'Garfield'
};

console.log("3. cats['Garfield']");

if (typeof lasagna === "function" ? lasagna() : void 0) {
  if (cats != null) {
    if ((_ref4 = cats['Garfield']) != null) {
      if (typeof _ref4.eat === "function") {
        _ref4.eat();
      }
    }
  }
}

eat = function() {
  return console.log("eating");
};

cat = {};

cat.eat = eat;

cats['Garfield'] = cat;

console.log("4. cats['Garfield'].eat");

if (typeof lasagna === "function" ? lasagna() : void 0) {
  if (cats != null) {
    if ((_ref5 = cats['Garfield']) != null) {
      if (typeof _ref5.eat === "function") {
        _ref5.eat();
      }
    }
  }
}

lasagna = function() {
  console.log("Lasagna ");
  return true;
};

console.log("5. cats['Garfield'].eat + lasagna");

if (typeof lasagna === "function" ? lasagna() : void 0) {
  if (cats != null) {
    if ((_ref6 = cats['Garfield']) != null) {
      if (typeof _ref6.eat === "function") {
        _ref6.eat();
      }
    }
  }
}

console.log(cats);

console.log(cats['Garfield']);

console.log(cats['Garfield'].eat);

console.log(cats['Garfield'].eat());