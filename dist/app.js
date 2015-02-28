System.register(["aurelia-router", "./web-api"], function (_export) {
  var Router, WebAPI, _prototypeProperties, _classCallCheck, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router, api) {
          _classCallCheck(this, App);

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
            configurable: true
          }
        }, {
          select: {
            value: function select(contact) {
              this.selectedId = contact.id;
              this.router.navigate("contacts/" + contact.id);
            },
            writable: true,
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
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNOLE1BQU0seUNBRUQsR0FBRzs7OztBQUhSLFlBQU0sa0JBQU4sTUFBTTs7QUFDTixZQUFNLFdBQU4sTUFBTTs7Ozs7Ozs7O0FBRUQsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixNQUFNLEVBQUUsR0FBRztnQ0FGWixHQUFHOztBQUdaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztBQUVmLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztBQUMxQixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBZSxRQUFRLEVBQUUsY0FBYyxFQUFJLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDdEUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxDQUN2RCxDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7NkJBYlUsR0FBRztBQUNQLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFjNUMsZ0JBQU07bUJBQUEsZ0JBQUMsT0FBTyxFQUFDO0FBQ2Isa0JBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztBQUM3QixrQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNoRDs7OztBQUVELGtCQUFRO21CQUFBLG9CQUFFOzs7QUFDUixxQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNoRCxzQkFBSyxRQUFRLEdBQUcsUUFBUSxDQUFDO2VBQzFCLENBQUMsQ0FBQzthQUNKOzs7Ozs7ZUF4QlUsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==