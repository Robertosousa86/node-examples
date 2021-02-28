function MyClass() {}

MyClass.prototype = {
  method: function () {
    return "Hello";
  },
};

var myClass = new MyClass();
/*
 * Objetos podem ser exportados, incluíndo outros objetos,
 * metodos e prorpiedadess
 *
 */

exports.method2 = function () {
  return "Hello again";
};

module.exports = myClass;
