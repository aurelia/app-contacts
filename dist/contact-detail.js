System.register(["aurelia-event-aggregator", "./web-api", "./app", "./messages", "./utility"], function (_export) {
  var EventAggregator, WebAPI, App, ContactUpdated, ContactViewed, areEqual, _prototypeProperties, _classCallCheck, ContactDetail;

  return {
    setters: [function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }, function (_app) {
      App = _app.App;
    }, function (_messages) {
      ContactUpdated = _messages.ContactUpdated;
      ContactViewed = _messages.ContactViewed;
    }, function (_utility) {
      areEqual = _utility.areEqual;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ContactDetail = _export("ContactDetail", (function () {
        function ContactDetail(app, api, ea) {
          _classCallCheck(this, ContactDetail);

          this.app = app;
          this.api = api;
          this.ea = ea;
        }

        _prototypeProperties(ContactDetail, {
          inject: {
            value: function inject() {
              return [App, WebAPI, EventAggregator];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(params, qs, config) {
              var _this = this;

              return this.api.getContactDetails(params.id).then(function (contact) {
                _this.contact = contact;
                config.navModel.title = contact.firstName;
                _this.originalContact = JSON.parse(JSON.stringify(contact));
                _this.ea.publish(new ContactViewed(contact));
              });
            },
            writable: true,
            configurable: true
          },
          canSave: {
            get: function () {
              return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
            },
            configurable: true
          },
          save: {
            value: function save() {
              var _this = this;

              this.api.saveContact(this.contact).then(function (contact) {
                _this.contact = contact;
                _this.originalContact = JSON.parse(JSON.stringify(contact));
                _this.ea.publish(new ContactUpdated(_this.contact));
              });
            },
            writable: true,
            configurable: true
          },
          canDeactivate: {
            value: function canDeactivate() {
              if (!areEqual(this.originalContact, this.contact)) {
                var result = confirm("You have unsaved changes. Are you sure you wish to leave?");

                if (!result) {
                  this.ea.publish(new ContactViewed(this.contact));
                }

                return result;
              }

              return true;
            },
            writable: true,
            configurable: true
          }
        });

        return ContactDetail;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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