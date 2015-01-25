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