System.register(["./app"], function (_export) {
  "use strict";

  var App, _prototypeProperties, NoSelection;
  return {
    setters: [function (_app) {
      App = _app.App;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      NoSelection = (function () {
        function NoSelection(app) {
          this.app = app;
        }

        _prototypeProperties(NoSelection, {
          inject: {
            value: function inject() {
              return [App];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              this.app.selectedId = null;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return NoSelection;
      })();
      _export("NoSelection", NoSelection);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vLXNlbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxHQUFHLHdCQUVFLFdBQVc7OztBQUZoQixTQUFHLFFBQUgsR0FBRzs7Ozs7Ozs7QUFFRSxpQkFBVztBQUVYLGlCQUZBLFdBQVcsQ0FFVixHQUFHLEVBQUM7QUFDZCxjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNoQjs7NkJBSlUsV0FBVztBQUNmLGdCQUFNO21CQUFBLGtCQUFFO0FBQUUscUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUFFOzs7Ozs7QUFLaEMsa0JBQVE7bUJBQUEsb0JBQUU7QUFDUixrQkFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQzVCOzs7Ozs7O2VBUlUsV0FBVzs7NkJBQVgsV0FBVyIsImZpbGUiOiJuby1zZWxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==