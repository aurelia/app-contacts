System.register(['nprogress', 'aurelia-framework'], function (_export) {
  var nprogress, bindable, noView, _classCallCheck, _createDecoratedClass, LoadingIndicator;

  return {
    setters: [function (_nprogress) {
      nprogress = _nprogress['default'];
    }, function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      noView = _aureliaFramework.noView;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      LoadingIndicator = (function () {
        var _instanceInitializers = {};

        function LoadingIndicator() {
          _classCallCheck(this, LoadingIndicator);

          this.loading = _instanceInitializers.loading.call(this);
        }

        _createDecoratedClass(LoadingIndicator, [{
          key: 'loading',
          enumerable: true,
          decorators: [bindable],
          initializer: function () {
            return false;
          }
        }, {
          key: 'loadingChanged',
          value: function loadingChanged(newValue) {
            if (newValue) {
              nprogress.start();
            } else {
              nprogress.done();
            }
          }
        }], null, _instanceInitializers);

        _export('LoadingIndicator', LoadingIndicator = noView(LoadingIndicator) || LoadingIndicator);

        return LoadingIndicator;
      })();

      _export('LoadingIndicator', LoadingIndicator);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctaW5kaWNhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7MkVBSWEsZ0JBQWdCOzs7Ozs7bUNBSHJCLFFBQVE7aUNBQUUsTUFBTTs7Ozs7Ozs7O0FBR1gsc0JBQWdCOzs7aUJBQWhCLGdCQUFnQjtnQ0FBaEIsZ0JBQWdCOztlQUNqQixPQUFPLHlCQUFQLE9BQU87Ozs4QkFETixnQkFBZ0I7Ozt1QkFDMUIsUUFBUTs7bUJBQVcsS0FBSzs7OztpQkFFWCx3QkFBQyxRQUFRLEVBQUM7QUFDdEIsZ0JBQUcsUUFBUSxFQUFDO0FBQ1YsdUJBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNuQixNQUFJO0FBQ0gsdUJBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQjtXQUNGOzs7b0NBVFUsZ0JBQWdCLEdBRDVCLE1BQU0sQ0FDTSxnQkFBZ0IsS0FBaEIsZ0JBQWdCOztlQUFoQixnQkFBZ0I7OztrQ0FBaEIsZ0JBQWdCIiwiZmlsZSI6ImxvYWRpbmctaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=