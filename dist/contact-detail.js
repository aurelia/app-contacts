System.register(["aurelia-event-aggregator", "./web-api", "./app", "./messages", "./compare"], function (_export) {
  var EventAggregator, WebAPI, App, ContactUpdated, ContactViewed, areEqual, _createClass, _classCallCheck, ContactDetail;

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
    }, function (_compare) {
      areEqual = _compare.areEqual;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ContactDetail = _export("ContactDetail", (function () {
        function ContactDetail(app, api, ea) {
          _classCallCheck(this, ContactDetail);

          this.app = app;
          this.api = api;
          this.ea = ea;
        }

        _createClass(ContactDetail, {
          activate: {
            value: function activate(params, qs, config) {
              var _this = this;

              return this.api.getContactDetails(params.id).then(function (contact) {
                _this.contact = contact;
                config.navModel.title = contact.firstName;
                _this.originalContact = JSON.parse(JSON.stringify(contact));
                _this.ea.publish(new ContactViewed(contact));
              });
            }
          },
          canSave: {
            get: function () {
              return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
            }
          },
          save: {
            value: function save() {
              var _this = this;

              this.api.saveContact(this.contact).then(function (contact) {
                _this.contact = contact;
                _this.originalJSON = JSON.stringify(_this.contact);
                _this.ea.publish(new ContactUpdated(_this.contact));
              });
            }
          },
          canDeactivate: {
            value: function canDeactivate() {
              if (!areEqual(this.originalContact, JSON.parse(JSON.stringify(this.contact)))) {
                var result = confirm("You have unsaved changes. Are you sure you wish to leave?");

                if (!result) {
                  this.ea.publish(new ContactViewed(this.contact));
                }

                return result;
              }

              return true;
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [App, WebAPI, EventAggregator];
            }
          }
        });

        return ContactDetail;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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