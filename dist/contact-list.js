System.register(["aurelia-event-aggregator", "./web-api", "./messages"], function (_export) {
  var EventAggregator, WebAPI, ContactUpdated, ContactViewed, _createClass, _classCallCheck, ContactList;

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

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

        _createClass(ContactList, {
          created: {
            value: function created() {
              var _this = this;

              this.api.getContactList().then(function (contacts) {
                _this.contacts = contacts;
              });
            }
          },
          select: {
            value: function select(contact) {
              this.selectedId = contact.id;
              return true;
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [WebAPI, EventAggregator];
            }
          }
        });

        return ContactList;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsZUFBZSxFQUNmLE1BQU0sRUFDTixjQUFjLEVBQUUsYUFBYSxpQ0FFeEIsV0FBVzs7OztBQUpoQixxQkFBZSwyQkFBZixlQUFlOztBQUNmLFlBQU0sV0FBTixNQUFNOztBQUNOLG9CQUFjLGFBQWQsY0FBYztBQUFFLG1CQUFhLGFBQWIsYUFBYTs7Ozs7Ozs7O0FBRXhCLGlCQUFXO0FBRVgsaUJBRkEsV0FBVyxDQUVWLEdBQUcsRUFBQyxFQUFFLEVBQUM7OztnQ0FGUixXQUFXOztBQUdwQixjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNmLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztBQUVuQixZQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxVQUFBLEdBQUc7bUJBQUksTUFBSyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztXQUFBLENBQUMsQ0FBQztBQUM3RCxZQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxVQUFBLEdBQUcsRUFBSTtBQUNsQyxnQkFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDeEIsZ0JBQUksS0FBSyxHQUFHLE1BQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUM7cUJBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFO2FBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JELGtCQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDbkMsQ0FBQyxDQUFDO1NBQ0o7O3FCQVpVLFdBQVc7QUFjdEIsaUJBQU87bUJBQUEsbUJBQUU7OztBQUNQLGtCQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUN6QyxzQkFBSyxRQUFRLEdBQUcsUUFBUSxDQUFDO2VBQzFCLENBQUMsQ0FBQzthQUNKOztBQUVELGdCQUFNO21CQUFBLGdCQUFDLE9BQU8sRUFBQztBQUNiLGtCQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDN0IscUJBQU8sSUFBSSxDQUFDO2FBQ2I7OztBQXRCTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsTUFBTSxFQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEekMsV0FBVyIsImZpbGUiOiJjb250YWN0LWxpc3QuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==