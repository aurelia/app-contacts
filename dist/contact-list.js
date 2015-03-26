System.register(["aurelia-event-aggregator", "./web-api", "./messages"], function (_export) {
  var EventAggregator, WebAPI, ContactUpdated, ContactViewed, _prototypeProperties, _classCallCheck, ContactList;

  return {
    setters: [function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }, function (_messages) {
      ContactUpdated = _messages.ContactUpdated;
      ContactViewed = _messages.ContactViewed;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ContactList = _export("ContactList", (function () {
        function ContactList(api, ea) {
          var _this = this;

          _classCallCheck(this, ContactList);

          this.api = api;
          this.contacts = [];

          ea.subscribe(ContactViewed, function (msg) {
            return _this.select(msg.contact);
          });
          ea.subscribe(ContactUpdated, function (msg) {
            var id = msg.contact.id;
            var found = _this.contacts.filter(function (x) {
              return x.id == id;
            })[0];
            Object.assign(found, msg.contact);
          });
        }

        _prototypeProperties(ContactList, {
          inject: {
            value: function inject() {
              return [WebAPI, EventAggregator];
            },
            writable: true,
            configurable: true
          }
        }, {
          created: {
            value: function created() {
              var _this = this;

              this.api.getContactList().then(function (contacts) {
                _this.contacts = contacts;
              });
            },
            writable: true,
            configurable: true
          },
          select: {
            value: function select(contact) {
              this.selectedId = contact.id;
              return true;
            },
            writable: true,
            configurable: true
          }
        });

        return ContactList;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsZUFBZSxFQUNmLE1BQU0sRUFDTixjQUFjLEVBQUUsYUFBYSx5Q0FFeEIsV0FBVzs7OztBQUpoQixxQkFBZSwyQkFBZixlQUFlOztBQUNmLFlBQU0sV0FBTixNQUFNOztBQUNOLG9CQUFjLGFBQWQsY0FBYztBQUFFLG1CQUFhLGFBQWIsYUFBYTs7Ozs7Ozs7O0FBRXhCLGlCQUFXO0FBRVgsaUJBRkEsV0FBVyxDQUVWLEdBQUcsRUFBQyxFQUFFOzs7Z0NBRlAsV0FBVzs7QUFHcEIsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixjQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7QUFFbkIsWUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsVUFBQSxHQUFHO21CQUFJLE1BQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7V0FBQSxDQUFDLENBQUM7QUFDN0QsWUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsVUFBQSxHQUFHLEVBQUk7QUFDbEMsZ0JBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0FBQ3hCLGdCQUFJLEtBQUssR0FBRyxNQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO3FCQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRTthQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCxrQkFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1dBQ25DLENBQUMsQ0FBQztTQUNKOzs2QkFaVSxXQUFXO0FBQ2YsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE1BQU0sRUFBQyxlQUFlLENBQUMsQ0FBQzthQUFFOzs7OztBQWFwRCxpQkFBTzttQkFBQSxtQkFBRTs7O0FBQ1Asa0JBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ3pDLHNCQUFLLFFBQVEsR0FBRyxRQUFRLENBQUM7ZUFDMUIsQ0FBQyxDQUFDO2FBQ0o7Ozs7QUFFRCxnQkFBTTttQkFBQSxnQkFBQyxPQUFPLEVBQUM7QUFDYixrQkFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO0FBQzdCLHFCQUFPLElBQUksQ0FBQzthQUNiOzs7Ozs7ZUF2QlUsV0FBVyIsImZpbGUiOiJjb250YWN0LWxpc3QuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==