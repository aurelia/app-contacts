System.register(["aurelia-router", "./web-api"], function (_export) {
  "use strict";

  var Router, WebAPI, _prototypeProperties, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      App = (function () {
        function App(router, api) {
          this.router = router;
          this.api = api;

          this.router.configure(function (config) {
            config.title = "Contacts";
            config.map([{ route: "", moduleId: "no-selection", title: "Select" }, { route: "contacts/:id", moduleId: "contact-detail" }]);
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router, WebAPI];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          select: {
            value: function select(contact) {
              this.selectedId = contact.id;
              this.router.navigate("contacts/" + contact.id);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          activate: {
            value: function activate() {
              var _this = this;
              return this.api.getContactList().then(function (contacts) {
                _this.contacts = contacts;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return App;
      })();
      _export("App", App);
    }
  };
});