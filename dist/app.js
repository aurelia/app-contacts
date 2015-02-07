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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLEVBQ04sTUFBTSx3QkFFRCxHQUFHOzs7QUFIUixZQUFNLGtCQUFOLE1BQU07O0FBQ04sWUFBTSxXQUFOLE1BQU07Ozs7Ozs7O0FBRUQsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZCLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztBQUVmLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztBQUMxQixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBZSxRQUFRLEVBQUUsY0FBYyxFQUFJLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDdEUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxDQUN2RCxDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7NkJBYlUsR0FBRztBQUNQLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFBRTs7Ozs7O0FBYzVDLGdCQUFNO21CQUFBLGdCQUFDLE9BQU8sRUFBQztBQUNiLGtCQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDN0Isa0JBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDaEQ7Ozs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQUU7O0FBQ1IscUJBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEQsc0JBQUssUUFBUSxHQUFHLFFBQVEsQ0FBQztlQUMxQixDQUFDLENBQUM7YUFDSjs7Ozs7OztlQXhCVSxHQUFHOztxQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9