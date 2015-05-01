System.register(['./web-api'], function (_export) {
  var WebAPI, _classCallCheck, _createClass, App;

  return {
    setters: [function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      App = (function () {
        function App(api) {
          _classCallCheck(this, App);

          this.api = api;
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Contacts';
            config.map([{ route: '', moduleId: 'no-selection', title: 'Select' }, { route: 'contacts/:id', moduleId: 'contact-detail' }]);

            this.router = router;
          }
        }], [{
          key: 'inject',
          value: [WebAPI],
          enumerable: true
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzZDQUVhLEdBQUc7Ozs7dUJBRlIsTUFBTTs7Ozs7Ozs7O0FBRUQsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixHQUFHLEVBQUU7Z0NBRk4sR0FBRzs7QUFHWixjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNoQjs7cUJBSlUsR0FBRzs7aUJBTUMseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQztBQUM3QixrQkFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7QUFDMUIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQWUsUUFBUSxFQUFFLGNBQWMsRUFBSSxLQUFLLEVBQUUsUUFBUSxFQUFDLEVBQ3RFLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsQ0FDdkQsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2lCQWJlLENBQUMsTUFBTSxDQUFDOzs7O2VBRGIsR0FBRzs7O3FCQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=