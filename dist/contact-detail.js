System.register(["./web-api", "./app"], function (_export) {
  var WebAPI, App, _prototypeProperties, _classCallCheck, ContactDetail;

  return {
    setters: [function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }, function (_app) {
      App = _app.App;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ContactDetail = _export("ContactDetail", (function () {
        function ContactDetail(app, api) {
          _classCallCheck(this, ContactDetail);

          this.app = app;
          this.api = api;
        }

        _prototypeProperties(ContactDetail, {
          inject: {
            value: function inject() {
              return [App, WebAPI];
            },
            writable: true,
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
            configurable: true
          },
          canSave: {
            get: function () {
              return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
            },
            configurable: true
          },
          save: {
            value: function save() {
              var _this = this;

              this.api.saveContact(this.contact).then(function (contact) {
                _this.contact = contact;
                _this.originalJSON = JSON.stringify(_this.contact);
              });
            },
            writable: true,
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
            configurable: true
          }
        });

        return ContactDetail;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxNQUFNLEVBQ04sR0FBRyx5Q0FFRSxhQUFhOzs7O0FBSGxCLFlBQU0sV0FBTixNQUFNOztBQUNOLFNBQUcsUUFBSCxHQUFHOzs7Ozs7Ozs7QUFFRSxtQkFBYTtBQUViLGlCQUZBLGFBQWEsQ0FFWixHQUFHLEVBQUMsR0FBRztnQ0FGUixhQUFhOztBQUd0QixjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNmLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2hCOzs2QkFMVSxhQUFhO0FBQ2pCLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFNeEMsa0JBQVE7bUJBQUEsa0JBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUM7OztBQUMxQixxQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDM0Qsc0JBQUssR0FBRyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO0FBQ2pDLHNCQUFLLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsc0JBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDM0Msc0JBQUssWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7ZUFDN0MsQ0FBQyxDQUFDO2FBQ0o7Ozs7QUFFRyxpQkFBTztpQkFBQSxZQUFFO0FBQ1gscUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQzthQUNsRjs7O0FBRUQsY0FBSTttQkFBQSxnQkFBRTs7O0FBQ0osa0JBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDakQsc0JBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixzQkFBSyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFLLE9BQU8sQ0FBQyxDQUFDO2VBQ2xELENBQUMsQ0FBQzthQUNKOzs7O0FBRUQsdUJBQWE7bUJBQUEseUJBQUU7QUFDYixrQkFBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDO0FBQ25ELG9CQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsMkRBQTJELENBQUMsQ0FBQzs7QUFFbEYsb0JBQUcsQ0FBQyxNQUFNLEVBQUM7QUFDVCxzQkFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7aUJBQ3ZDOztBQUVELHVCQUFPLE1BQU0sQ0FBQztlQUNmOztBQUVELHFCQUFPLElBQUksQ0FBQzthQUNiOzs7Ozs7ZUF2Q1UsYUFBYSIsImZpbGUiOiJjb250YWN0LWRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9