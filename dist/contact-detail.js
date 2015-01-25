System.register(["./web-api", "./app"], function (_export) {
  "use strict";

  var WebAPI, App, _prototypeProperties, ContactDetail;
  return {
    setters: [function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }, function (_app) {
      App = _app.App;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      ContactDetail = (function () {
        function ContactDetail(app, api) {
          this.app = app;
          this.api = api;
        }

        _prototypeProperties(ContactDetail, {
          inject: {
            value: function inject() {
              return [App, WebAPI];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(params, qs, config) {
              var _this = this;
              return this.api.getContactDetails(params.id).then(function (contact) {
                _this.app.selectedId = contact.id;
                _this.contact = contact;
                config.navModel.title = contact.firstName;
                _this.originalJSON = JSON.stringify(contact);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          canSave: {
            get: function () {
              return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
            },
            enumerable: true,
            configurable: true
          },
          save: {
            value: function save() {
              var _this2 = this;
              this.api.saveContact(this.contact).then(function () {
                _this2.originalJSON = JSON.stringify(_this2.contact);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          canDeactivate: {
            value: function canDeactivate() {
              if (this.originalJSON != JSON.stringify(this.contact)) {
                var result = confirm("You have unsaved changes. Are you sure you wish to leave?");

                if (!result) {
                  this.app.selectedId = this.contact.id;
                }

                return result;
              }

              return true;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return ContactDetail;
      })();
      _export("ContactDetail", ContactDetail);
    }
  };
});