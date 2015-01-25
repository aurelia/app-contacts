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

      latency = 500;
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