'use strict';

/* Utility : Object.create dosen't work all browsers. */
if (typeof Object.create !== 'function') {
    Object.create = function (obj) {
        function F() {};
        F.prototype = obj;
        return new F();
    };
}

(function ($, window, document, undefined) {

    var Tab = {
        init: function init(options, elem) {
            var self = this;
            self.elem = elem;
            self.$elem = $(elem);

            /* Extend Options */
            self.options = $.extend({}, $.fn.rtTab.options, options);

            self.rtTabs();
        },

        rtTabs: function rtTabs() {
            var self = this,
                eachTab = self.$elem.find('li');

            /* First Tab Active */
            eachTab.first().addClass('active');

            self.rtTabContent(showFirst = 'yes');
            self.rtClick();
        },

        rtClick: function rtClick() {
            var self = this,
                eachTab = self.$elem.find('li'),
                tabLink = eachTab.find('a');

            tabLink.on('click', function (e) {
                /* Prevent */
                e.preventDefault();

                /* Remove Active Class From All Tabs */
                eachTab.removeClass('active');

                /* Hide All Tab Contents */
                self.rtTabContent();

                /* Add Active Class to Current Tab */
                $(this).parent().addClass('active');

                /* Show Active Tab Content */
                var activeTab = $(this).attr('href');
                jQuery(activeTab).removeClass('hide');

                if (typeof self.options.onComplete === 'function') {
                    self.options.onComplete.apply(self.elem, arguments);
                }
            });
        },

        rtTabContent: function rtTabContent(showFirst) {
            var self = this,
                eachTab = self.$elem.find('li'),
                tabLink = eachTab.find('a');

            tabLink.each(function () {
                var link = $(this),
                    tabContent = link.attr('href');
                if (showFirst === 'yes') {
                    if (!link.parent().hasClass('active')) $(tabContent).addClass('hide');
                } else {
                    $(tabContent).addClass('hide');
                }
            });
        }
    };

    $.fn.rtTab = function (options) {
        return this.each(function () {
            var tab = Object.create(Tab);
            tab.init(options, this);

            /* Store Data */
            $.data(this, 'rtTab', tab);
        });
    };

    $.fn.rtTab.options = {
        onComplete: null
    };
})(jQuery, window, document);