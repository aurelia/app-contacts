System.register(["aurelia-router", "./web-api"], function (_export) {
  var Router, WebAPI, _createClass, _classCallCheck, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

        _createClass(App, null, {
          inject: {
            value: function inject() {
              return [Router, WebAPI];
            }
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNOLE1BQU0saUNBRUQsR0FBRzs7OztBQUhSLFlBQU0sa0JBQU4sTUFBTTs7QUFDTixZQUFNLFdBQU4sTUFBTTs7Ozs7Ozs7O0FBRUQsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixNQUFNLEVBQUUsR0FBRyxFQUFFO2dDQUZkLEdBQUc7O0FBR1osY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7O0FBRWYsY0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO0FBQzFCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFlLFFBQVEsRUFBRSxjQUFjLEVBQUksS0FBSyxFQUFFLFFBQVEsRUFBQyxFQUN0RSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUcsUUFBUSxFQUFFLGdCQUFnQixFQUFFLENBQ3ZELENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQztTQUNKOztxQkFiVSxHQUFHO0FBQ1AsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsQ0FBQzthQUFFOzs7O2VBRGhDLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=