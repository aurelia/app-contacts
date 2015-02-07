System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, latency, id, contacts, WebAPI;


  function getId() {
    return ++id;
  }

  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

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
      WebAPI = (function () {
        function WebAPI() {}

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
            enumerable: true,
            configurable: true
          },
          getContactDetails: {
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
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          saveContact: {
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
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return WebAPI;
      })();
      _export("WebAPI", WebAPI);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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