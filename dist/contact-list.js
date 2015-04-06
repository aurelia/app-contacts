System.register(['aurelia-framework', 'aurelia-event-aggregator', './web-api', './messages'], function (_export) {
  var inject, EventAggregator, WebAPI, ContactUpdated, ContactViewed, _classCallCheck, _createClass, ContactList;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }, function (_messages) {
      ContactUpdated = _messages.ContactUpdated;
      ContactViewed = _messages.ContactViewed;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      ContactList = (function () {
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

        _createClass(ContactList, [{
          key: 'created',
          value: function created() {
            var _this2 = this;

            this.api.getContactList().then(function (contacts) {
              _this2.contacts = contacts;
            });
          }
        }, {
          key: 'select',
          value: function select(contact) {
            this.selectedId = contact.id;
            return true;
          }
        }]);

        _export('ContactList', ContactList = inject(WebAPI, EventAggregator)(ContactList) || ContactList);

        return ContactList;
      })();

      _export('ContactList', ContactList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FHQU1hLFdBQVc7Ozs7aUNBTmhCLE1BQU07O2dEQUNOLGVBQWU7O3VCQUNmLE1BQU07O2lDQUNOLGNBQWM7Z0NBQUUsYUFBYTs7Ozs7Ozs7O0FBR3hCLGlCQUFXO0FBQ1gsaUJBREEsV0FBVyxDQUNWLEdBQUcsRUFBRSxFQUFFLEVBQUM7OztnQ0FEVCxXQUFXOztBQUVwQixjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNmLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztBQUVuQixZQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxVQUFBLEdBQUc7bUJBQUksTUFBSyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztXQUFBLENBQUMsQ0FBQztBQUM3RCxZQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxVQUFBLEdBQUcsRUFBSTtBQUNsQyxnQkFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDeEIsZ0JBQUksS0FBSyxHQUFHLE1BQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUM7cUJBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFO2FBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JELGtCQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDbkMsQ0FBQyxDQUFDO1NBQ0o7O3FCQVhVLFdBQVc7O2lCQWFmLG1CQUFFOzs7QUFDUCxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDekMscUJBQUssUUFBUSxHQUFHLFFBQVEsQ0FBQzthQUMxQixDQUFDLENBQUM7V0FDSjs7O2lCQUVLLGdCQUFDLE9BQU8sRUFBQztBQUNiLGdCQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDN0IsbUJBQU8sSUFBSSxDQUFDO1dBQ2I7OzsrQkF0QlUsV0FBVyxHQUR2QixNQUFNLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUNuQixXQUFXLEtBQVgsV0FBVzs7ZUFBWCxXQUFXOzs7NkJBQVgsV0FBVyIsImZpbGUiOiJjb250YWN0LWxpc3QuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==