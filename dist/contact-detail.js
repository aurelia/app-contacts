System.register(['aurelia-event-aggregator', './web-api', './messages', './utility'], function (_export) {
  var EventAggregator, WebAPI, ContactUpdated, ContactViewed, areEqual, _classCallCheck, _createClass, ContactDetail;

  return {
    setters: [function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }, function (_messages) {
      ContactUpdated = _messages.ContactUpdated;
      ContactViewed = _messages.ContactViewed;
    }, function (_utility) {
      areEqual = _utility.areEqual;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      ContactDetail = (function () {
        function ContactDetail(api, ea) {
          _classCallCheck(this, ContactDetail);

          this.api = api;
          this.ea = ea;
        }

        _createClass(ContactDetail, [{
          key: 'activate',
          value: function activate(params, config) {
            var _this = this;

            return this.api.getContactDetails(params.id).then(function (contact) {
              _this.contact = contact;
              config.navModel.setTitle(contact.firstName);
              _this.originalContact = JSON.parse(JSON.stringify(contact));
              _this.ea.publish(new ContactViewed(contact));
            });
          }
        }, {
          key: 'canSave',
          get: function () {
            return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
          }
        }, {
          key: 'save',
          value: function save() {
            var _this2 = this;

            this.api.saveContact(this.contact).then(function (contact) {
              _this2.contact = contact;
              _this2.originalContact = JSON.parse(JSON.stringify(contact));
              _this2.ea.publish(new ContactUpdated(_this2.contact));
            });
          }
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {
            if (!areEqual(this.originalContact, this.contact)) {
              var result = confirm('You have unsaved changes. Are you sure you wish to leave?');

              if (!result) {
                this.ea.publish(new ContactViewed(this.contact));
              }

              return result;
            }

            return true;
          }
        }], [{
          key: 'inject',
          value: [WebAPI, EventAggregator],
          enumerable: true
        }]);

        return ContactDetail;
      })();

      _export('ContactDetail', ContactDetail);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7dUdBS2EsYUFBYTs7OztnREFMbEIsZUFBZTs7dUJBQ2YsTUFBTTs7aUNBQ04sY0FBYztnQ0FBQyxhQUFhOzswQkFDNUIsUUFBUTs7Ozs7Ozs7O0FBRUgsbUJBQWE7QUFFYixpQkFGQSxhQUFhLENBRVosR0FBRyxFQUFFLEVBQUUsRUFBQztnQ0FGVCxhQUFhOztBQUd0QixjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNmLGNBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7O3FCQUxVLGFBQWE7O2lCQU9oQixrQkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDOzs7QUFDdEIsbUJBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzNELG9CQUFLLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsb0JBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxvQkFBSyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDM0Qsb0JBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQzdDLENBQUMsQ0FBQztXQUNKOzs7ZUFFVSxZQUFFO0FBQ1gsbUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztXQUNsRjs7O2lCQUVHLGdCQUFFOzs7QUFDSixnQkFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUNqRCxxQkFBSyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLHFCQUFLLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUMzRCxxQkFBSyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksY0FBYyxDQUFDLE9BQUssT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNuRCxDQUFDLENBQUM7V0FDSjs7O2lCQUVZLHlCQUFFO0FBQ2IsZ0JBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUM7QUFDL0Msa0JBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQywyREFBMkQsQ0FBQyxDQUFDOztBQUVsRixrQkFBRyxDQUFDLE1BQU0sRUFBQztBQUNULG9CQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztlQUNsRDs7QUFFRCxxQkFBTyxNQUFNLENBQUM7YUFDZjs7QUFFRCxtQkFBTyxJQUFJLENBQUM7V0FDYjs7O2lCQXZDZSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUM7Ozs7ZUFEOUIsYUFBYTs7OytCQUFiLGFBQWEiLCJmaWxlIjoiY29udGFjdC1kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==