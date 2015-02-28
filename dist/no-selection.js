System.register(["./app"], function (_export) {
  var App, _prototypeProperties, _classCallCheck, NoSelection;

  return {
    setters: [function (_app) {
      App = _app.App;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NoSelection = _export("NoSelection", (function () {
        function NoSelection(app) {
          _classCallCheck(this, NoSelection);

          this.app = app;
        }

        _prototypeProperties(NoSelection, {
          inject: {
            value: function inject() {
              return [App];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              this.app.selectedId = null;
            },
            writable: true,
            configurable: true
          }
        });

        return NoSelection;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vLXNlbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsR0FBRyx5Q0FFRSxXQUFXOzs7O0FBRmhCLFNBQUcsUUFBSCxHQUFHOzs7Ozs7Ozs7QUFFRSxpQkFBVztBQUVYLGlCQUZBLFdBQVcsQ0FFVixHQUFHO2dDQUZKLFdBQVc7O0FBR3BCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2hCOzs2QkFKVSxXQUFXO0FBQ2YsZ0JBQU07bUJBQUEsa0JBQUU7QUFBRSxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBS2hDLGtCQUFRO21CQUFBLG9CQUFFO0FBQ1Isa0JBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUM1Qjs7Ozs7O2VBUlUsV0FBVyIsImZpbGUiOiJuby1zZWxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==