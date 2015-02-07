System.register(["./web-api", "./app"], function (_export) {
  "use strict";

  var WebAPI, App, _prototypeProperties, ContactDetail;
  return {
    setters: [function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }, function (_app) {
      App = _app.App;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      ContactDetail = (function () {
        function ContactDetail(app, api) {
          this.app = app;
          this.api = api;
        }

        _prototypeProperties(ContactDetail, {
          inject: {
            value: function inject() {
              return [App, WebAPI];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(params, qs, config) {
              var _this = this;
              return this.api.getContactDetails(params.id).then(function (contact) {
                _this.app.selectedId = contact.id;
                _this.contact = contact;
                config.navModel.title = contact.firstName;
                _this.originalJSON = JSON.stringify(contact);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          canSave: {
            get: function () {
              return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
            },
            enumerable: true,
            configurable: true
          },
          save: {
            value: function save() {
              var _this2 = this;
              this.api.saveContact(this.contact).then(function (contact) {
                _this2.contact = contact;
                _this2.originalJSON = JSON.stringify(_this2.contact);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          canDeactivate: {
            value: function canDeactivate() {
              if (this.originalJSON != JSON.stringify(this.contact)) {
                var result = confirm("You have unsaved changes. Are you sure you wish to leave?");

                if (!result) {
                  this.app.selectedId = this.contact.id;
                }

                return result;
              }

              return true;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return ContactDetail;
      })();
      _export("ContactDetail", ContactDetail);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLE1BQU0sRUFDTixHQUFHLHdCQUVFLGFBQWE7OztBQUhsQixZQUFNLFdBQU4sTUFBTTs7QUFDTixTQUFHLFFBQUgsR0FBRzs7Ozs7Ozs7QUFFRSxtQkFBYTtBQUViLGlCQUZBLGFBQWEsQ0FFWixHQUFHLEVBQUMsR0FBRyxFQUFDO0FBQ2xCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2YsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDaEI7OzZCQUxVLGFBQWE7QUFDakIsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLEdBQUcsRUFBQyxNQUFNLENBQUMsQ0FBQzthQUFFOzs7Ozs7QUFNeEMsa0JBQVE7bUJBQUEsa0JBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUM7O0FBQzFCLHFCQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUMzRCxzQkFBSyxHQUFHLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDakMsc0JBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixzQkFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUMzQyxzQkFBSyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztlQUM3QyxDQUFDLENBQUM7YUFDSjs7Ozs7QUFFRyxpQkFBTztpQkFBQSxZQUFFO0FBQ1gscUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQzthQUNsRjs7OztBQUVELGNBQUk7bUJBQUEsZ0JBQUU7O0FBQ0osa0JBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDakQsdUJBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2Qix1QkFBSyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFLLE9BQU8sQ0FBQyxDQUFDO2VBQ2xELENBQUMsQ0FBQzthQUNKOzs7OztBQUVELHVCQUFhO21CQUFBLHlCQUFFO0FBQ2Isa0JBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQztBQUNuRCxvQkFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7O0FBRWxGLG9CQUFHLENBQUMsTUFBTSxFQUFDO0FBQ1Qsc0JBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2lCQUN2Qzs7QUFFRCx1QkFBTyxNQUFNLENBQUM7ZUFDZjs7QUFFRCxxQkFBTyxJQUFJLENBQUM7YUFDYjs7Ozs7OztlQXZDVSxhQUFhOzsrQkFBYixhQUFhIiwiZmlsZSI6ImNvbnRhY3QtZGV0YWlsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=