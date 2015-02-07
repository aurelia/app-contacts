System.register(["nprogress", "aurelia-framework"], function (_export) {
  "use strict";

  var nprogress, Behavior, _prototypeProperties, LoadingIndicator;
  return {
    setters: [function (_nprogress) {
      nprogress = _nprogress["default"];
    }, function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      LoadingIndicator = (function () {
        function LoadingIndicator() {}

        _prototypeProperties(LoadingIndicator, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("loading-indicator").withProperty("loading").noView();
            },
            writable: true,
            enumerable: true,
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
            enumerable: true,
            configurable: true
          }
        });

        return LoadingIndicator;
      })();
      _export("LoadingIndicator", LoadingIndicator);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctaW5kaWNhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFPLFNBQVMsRUFDUixRQUFRLHdCQUVILGdCQUFnQjs7O0FBSHRCLGVBQVM7O0FBQ1IsY0FBUSxxQkFBUixRQUFROzs7Ozs7OztBQUVILHNCQUFnQjtpQkFBaEIsZ0JBQWdCOzs2QkFBaEIsZ0JBQWdCO0FBQ3BCLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2YscUJBQU8sUUFBUSxDQUNaLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUNsQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQ3ZCLE1BQU0sRUFBRSxDQUFDO2FBQ2I7Ozs7OztBQUVELHdCQUFjO21CQUFBLHdCQUFDLFFBQVEsRUFBQztBQUN0QixrQkFBRyxRQUFRLEVBQUM7QUFDVix5QkFBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2VBQ25CLE1BQUk7QUFDSCx5QkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO2VBQ2xCO2FBQ0Y7Ozs7Ozs7ZUFkVSxnQkFBZ0I7O2tDQUFoQixnQkFBZ0IiLCJmaWxlIjoibG9hZGluZy1pbmRpY2F0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==