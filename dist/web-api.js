System.register([], function (_export) {
  var _classCallCheck, _createClass, latency, id, contacts, WebAPI;

  function getId() {
    return ++id;
  }

  return {
    setters: [],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      latency = 300;
      id = 0;
      contacts = [{
        id: getId(),
        firstName: 'John',
        lastName: 'Tolkien',
        email: 'tolkien@inklings.com',
        phoneNumber: '867-5309'
      }, {
        id: getId(),
        firstName: 'Clive',
        lastName: 'Lewis',
        email: 'lewis@inklings.com',
        phoneNumber: '867-5309'
      }, {
        id: getId(),
        firstName: 'Owen',
        lastName: 'Barfield',
        email: 'barfield@inklings.com',
        phoneNumber: '867-5309'
      }, {
        id: getId(),
        firstName: 'Charles',
        lastName: 'Williams',
        email: 'williams@inklings.com',
        phoneNumber: '867-5309'
      }, {
        id: getId(),
        firstName: 'Roger',
        lastName: 'Green',
        email: 'green@inklings.com',
        phoneNumber: '867-5309'
      }];

      WebAPI = (function () {
        function WebAPI() {
          _classCallCheck(this, WebAPI);
        }

        _createClass(WebAPI, [{
          key: 'getContactList',
          value: function getContactList() {
            var _this = this;

            this.isRequesting = true;
            return new Promise(function (resolve) {
              setTimeout(function () {
                var results = contacts.map(function (x) {
                  return {
                    id: x.id,
                    firstName: x.firstName,
                    lastName: x.lastName,
                    email: x.email
                  };
                });
                resolve(results);
                _this.isRequesting = false;
              }, latency);
            });
          }
        }, {
          key: 'getContactDetails',
          value: function getContactDetails(id) {
            var _this2 = this;

            this.isRequesting = true;
            return new Promise(function (resolve) {
              setTimeout(function () {
                var found = contacts.filter(function (x) {
                  return x.id == id;
                })[0];
                resolve(JSON.parse(JSON.stringify(found)));
                _this2.isRequesting = false;
              }, latency);
            });
          }
        }, {
          key: 'saveContact',
          value: function saveContact(contact) {
            var _this3 = this;

            this.isRequesting = true;
            return new Promise(function (resolve) {
              setTimeout(function () {
                var instance = JSON.parse(JSON.stringify(contact));
                var found = contacts.filter(function (x) {
                  return x.id == contact.id;
                })[0];

                if (found) {
                  var index = contacts.indexOf(found);
                  contacts[index] = instance;
                } else {
                  instance.id = getId();
                  contacts.push(instance);
                }

                _this3.isRequesting = false;
                resolve(instance);
              }, latency);
            });
          }
        }]);

        return WebAPI;
      })();

      _export('WebAPI', WebAPI);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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