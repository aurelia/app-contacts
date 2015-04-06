System.register(['nprogress', 'aurelia-framework'], function (_export) {
  var nprogress, bindableProperty, noView, _classCallCheck, _createClass, LoadingIndicator;

  return {
    setters: [function (_nprogress) {
      nprogress = _nprogress['default'];
    }, function (_aureliaFramework) {
      bindableProperty = _aureliaFramework.bindableProperty;
      noView = _aureliaFramework.noView;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      LoadingIndicator = (function () {
        function LoadingIndicator() {
          _classCallCheck(this, LoadingIndicator);
        }

        _createClass(LoadingIndicator, [{
          key: 'loadingChanged',
          value: function loadingChanged(newValue) {
            if (newValue) {
              nprogress.start();
            } else {
              nprogress.done();
            }
          }
        }]);

        _export('LoadingIndicator', LoadingIndicator = bindableProperty('loading')(LoadingIndicator) || LoadingIndicator);

        _export('LoadingIndicator', LoadingIndicator = noView(LoadingIndicator) || LoadingIndicator);

        return LoadingIndicator;
      })();

      _export('LoadingIndicator', LoadingIndicator);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctaW5kaWNhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7MEVBS2EsZ0JBQWdCOzs7Ozs7MkNBSnJCLGdCQUFnQjtpQ0FBRSxNQUFNOzs7Ozs7Ozs7QUFJbkIsc0JBQWdCO2lCQUFoQixnQkFBZ0I7Z0NBQWhCLGdCQUFnQjs7O3FCQUFoQixnQkFBZ0I7O2lCQUNiLHdCQUFDLFFBQVEsRUFBQztBQUN0QixnQkFBRyxRQUFRLEVBQUM7QUFDVix1QkFBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ25CLE1BQUk7QUFDSCx1QkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2xCO1dBQ0Y7OztvQ0FQVSxnQkFBZ0IsR0FGNUIsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBRWYsZ0JBQWdCLEtBQWhCLGdCQUFnQjs7b0NBQWhCLGdCQUFnQixHQUQ1QixNQUFNLENBQ00sZ0JBQWdCLEtBQWhCLGdCQUFnQjs7ZUFBaEIsZ0JBQWdCOzs7a0NBQWhCLGdCQUFnQiIsImZpbGUiOiJsb2FkaW5nLWluZGljYXRvci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9