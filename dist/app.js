System.register(['aurelia-framework', 'aurelia-router', './web-api'], function (_export) {
  var inject, Router, WebAPI, _classCallCheck, App;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      App = (function () {
        function App(router, api) {
          _classCallCheck(this, App);

          this.router = router;
          this.api = api;

          this.router.configure(function (config) {
            config.title = 'Contacts';
            config.map([{ route: '', moduleId: 'no-selection', title: 'Select' }, { route: 'contacts/:id', moduleId: 'contact-detail' }]);
          });
        }

        _export('App', App = inject(Router, WebAPI)(App) || App);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOytDQUthLEdBQUc7Ozs7aUNBTFIsTUFBTTs7OEJBQ04sTUFBTTs7dUJBQ04sTUFBTTs7Ozs7OztBQUdELFNBQUc7QUFDSCxpQkFEQSxHQUFHLENBQ0YsTUFBTSxFQUFFLEdBQUcsRUFBRTtnQ0FEZCxHQUFHOztBQUVaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztBQUVmLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztBQUMxQixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBZSxRQUFRLEVBQUUsY0FBYyxFQUFJLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDdEUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxDQUN2RCxDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7dUJBWlUsR0FBRyxHQURmLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQ1YsR0FBRyxLQUFILEdBQUc7O2VBQUgsR0FBRzs7O3FCQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=