/* Markup
 *
 * <ul class="tabs">
 *      <li class="tab"><a href="#example1"></a></li>
 *      <li class="tab"><a href="#example2"></a></li>
 * </ul>
 * 
 * <div id="example1" class="tab-content"></div>
 * <div id="example2" class="tab-content"></div>
 *
 **/

var tab = jQuery('.tab'),
    tab_content = jQuery('.tab-content');

    /* Hide All Tab Contents */
    tab_content.hide();

    /* Show First Tab Content */
    tab_content.first().show();

    /* Add active Class to first Tab */
    tab.first().addClass('active');

    /* Click Event */
    tab.find('a').on('click', function(e) {
        e.preventDefault();

        var elem = jQuery(this),
            parent = elem.parent();

        if( !parent.hasClass('active') ) {

            /* Remove Active Class From All Tabs */
            tab.removeClass('active');

            /* Hide All Tab Contents */
            tab_content.hide();

            /* Add Active Class to Current Tab */
            parent.addClass('active');

            /* Show Active Tab Content */
            var activeTab = elem.attr('href');
            jQuery(activeTab).fadeIn();
        }
});