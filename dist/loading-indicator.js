System.register(["nprogress", "aurelia-framework"], function (_export) {
  var nprogress, Behavior, _createClass, _classCallCheck, LoadingIndicator;

  return {
    setters: [function (_nprogress) {
      nprogress = _nprogress["default"];
    }, function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      LoadingIndicator = _export("LoadingIndicator", (function () {
        function LoadingIndicator() {
          _classCallCheck(this, LoadingIndicator);
        }

        _createClass(LoadingIndicator, {
          loadingChanged: {
            value: function loadingChanged(newValue) {
              if (newValue) {
                nprogress.start();
              } else {
                nprogress.done();
              }
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("loading-indicator").withProperty("loading").noView();
            }
          }
        });

        return LoadingIndicator;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctaW5kaWNhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBTyxTQUFTLEVBQ1IsUUFBUSxpQ0FFSCxnQkFBZ0I7Ozs7QUFIdEIsZUFBUzs7QUFDUixjQUFRLHFCQUFSLFFBQVE7Ozs7Ozs7OztBQUVILHNCQUFnQjtpQkFBaEIsZ0JBQWdCO2dDQUFoQixnQkFBZ0I7OztxQkFBaEIsZ0JBQWdCO0FBUTNCLHdCQUFjO21CQUFBLHdCQUFDLFFBQVEsRUFBQztBQUN0QixrQkFBRyxRQUFRLEVBQUM7QUFDVix5QkFBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2VBQ25CLE1BQUk7QUFDSCx5QkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO2VBQ2xCO2FBQ0Y7OztBQWJNLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2YscUJBQU8sUUFBUSxDQUNaLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUNsQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQ3ZCLE1BQU0sRUFBRSxDQUFDO2FBQ2I7Ozs7ZUFOVSxnQkFBZ0IiLCJmaWxlIjoibG9hZGluZy1pbmRpY2F0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==