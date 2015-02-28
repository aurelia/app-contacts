System.register(["nprogress", "aurelia-framework"], function (_export) {
  var nprogress, Behavior, _prototypeProperties, _classCallCheck, LoadingIndicator;

  return {
    setters: [function (_nprogress) {
      nprogress = _nprogress["default"];
    }, function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      LoadingIndicator = _export("LoadingIndicator", (function () {
        function LoadingIndicator() {
          _classCallCheck(this, LoadingIndicator);
        }

        _prototypeProperties(LoadingIndicator, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("loading-indicator").withProperty("loading").noView();
            },
            writable: true,
            configurable: true
          }
        }, {
          loadingChanged: {
            value: function loadingChanged(newValue) {
              if (newValue) {
                nprogress.start();
              } else {
                nprogress.done();
              }
            },
            writable: true,
            configurable: true
          }
        });

        return LoadingIndicator;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctaW5kaWNhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBTyxTQUFTLEVBQ1IsUUFBUSx5Q0FFSCxnQkFBZ0I7Ozs7QUFIdEIsZUFBUzs7QUFDUixjQUFRLHFCQUFSLFFBQVE7Ozs7Ozs7OztBQUVILHNCQUFnQjtpQkFBaEIsZ0JBQWdCO2dDQUFoQixnQkFBZ0I7Ozs2QkFBaEIsZ0JBQWdCO0FBQ3BCLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2YscUJBQU8sUUFBUSxDQUNaLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUNsQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQ3ZCLE1BQU0sRUFBRSxDQUFDO2FBQ2I7Ozs7O0FBRUQsd0JBQWM7bUJBQUEsd0JBQUMsUUFBUSxFQUFDO0FBQ3RCLGtCQUFHLFFBQVEsRUFBQztBQUNWLHlCQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7ZUFDbkIsTUFBSTtBQUNILHlCQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7ZUFDbEI7YUFDRjs7Ozs7O2VBZFUsZ0JBQWdCIiwiZmlsZSI6ImxvYWRpbmctaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=