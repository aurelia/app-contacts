System.register([], function (_export) {
  var _prototypeProperties, _classCallCheck, latency, id, contacts, WebAPI;

  function getId() {
    return ++id;
  }

  return {
    setters: [],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      latency = 300;
      id = 0;
      contacts = [{
        id: getId(),
        firstName: "John",
        lastName: "Tolkien",
        email: "tolkien@inklings.com",
        phoneNumber: "867-5309"
      }, {
        id: getId(),
        firstName: "Clive",
        lastName: "Lewis",
        email: "lewis@inklings.com",
        phoneNumber: "867-5309"
      }, {
        id: getId(),
        firstName: "Owen",
        lastName: "Barfield",
        email: "barfield@inklings.com",
        phoneNumber: "867-5309"
      }, {
        id: getId(),
        firstName: "Charles",
        lastName: "Williams",
        email: "williams@inklings.com",
        phoneNumber: "867-5309"
      }, {
        id: getId(),
        firstName: "Roger",
        lastName: "Green",
        email: "green@inklings.com",
        phoneNumber: "867-5309"
      }];
      WebAPI = _export("WebAPI", (function () {
        function WebAPI() {
          _classCallCheck(this, WebAPI);
        }

        _prototypeProperties(WebAPI, null, {
          getContactList: {
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
            },
            writable: true,
            configurable: true
          },
          getContactDetails: {
            value: function getContactDetails(id) {
              var _this = this;

              this.isRequesting = true;
              return new Promise(function (resolve) {
                setTimeout(function () {
                  var found = contacts.filter(function (x) {
                    return x.id == id;
                  })[0];
                  resolve(JSON.parse(JSON.stringify(found)));
                  _this.isRequesting = false;
                }, latency);
              });
            },
            writable: true,
            configurable: true
          },
          saveContact: {
            value: function saveContact(contact) {
              var _this = this;

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

                  _this.isRequesting = false;
                  resolve(instance);
                }, latency);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return WebAPI;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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