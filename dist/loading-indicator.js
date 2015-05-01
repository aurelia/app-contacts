System.register(['nprogress', 'aurelia-framework'], function (_export) {
  var nprogress, bindable, noView, _classCallCheck, _createDecoratedClass, _defineDecoratedPropertyDescriptor, LoadingIndicator;

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

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      _defineDecoratedPropertyDescriptor = function (target, key, descriptors) { var _descriptor = descriptors[key]; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer(); Object.defineProperty(target, key, descriptor); };

      LoadingIndicator = (function () {
        var _instanceInitializers = {};

        function LoadingIndicator() {
          _classCallCheck(this, _LoadingIndicator);

          _defineDecoratedPropertyDescriptor(this, 'loading', _instanceInitializers);
        }

        var _LoadingIndicator = LoadingIndicator;

        _createDecoratedClass(_LoadingIndicator, [{
          key: 'loading',
          decorators: [bindable],
          initializer: function () {
            return false;
          },
          enumerable: true
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

        LoadingIndicator = noView(LoadingIndicator) || LoadingIndicator;
        return LoadingIndicator;
      })();

      _export('LoadingIndicator', LoadingIndicator);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctaW5kaWNhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7K0dBSWEsZ0JBQWdCOzs7Ozs7bUNBSHJCLFFBQVE7aUNBQUUsTUFBTTs7Ozs7Ozs7Ozs7QUFHWCxzQkFBZ0I7OztpQkFBaEIsZ0JBQWdCOzs7Ozs7Z0NBQWhCLGdCQUFnQjs7Ozt1QkFDMUIsUUFBUTs7bUJBQVcsS0FBSzs7Ozs7aUJBRVgsd0JBQUMsUUFBUSxFQUFDO0FBQ3RCLGdCQUFHLFFBQVEsRUFBQztBQUNWLHVCQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDbkIsTUFBSTtBQUNILHVCQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbEI7V0FDRjs7O0FBVFUsd0JBQWdCLEdBRDVCLE1BQU0sQ0FDTSxnQkFBZ0IsS0FBaEIsZ0JBQWdCO2VBQWhCLGdCQUFnQjs7O2tDQUFoQixnQkFBZ0IiLCJmaWxlIjoibG9hZGluZy1pbmRpY2F0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==