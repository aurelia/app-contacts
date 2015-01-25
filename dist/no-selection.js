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