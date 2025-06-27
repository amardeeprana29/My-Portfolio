jQuery(document).ready(function () {
    var toggleHandler = function (button) {
        var originalText = jQuery(button).text();
        var targetSelector = jQuery(button).attr("data-toggle-target");

        jQuery(button).addClass("toggle-btn-visible");
        jQuery(targetSelector).addClass("toggle-target-hidden");

        jQuery(button).click(function () {
            if (jQuery(button).text() === jQuery(button).attr("data-toggle-text")) {
                jQuery(button).text(originalText);
            }
            else {
                jQuery(button).text(jQuery(button).attr("data-toggle-text"));
            }

            jQuery(targetSelector).slideToggle(400, function () {
                jQuery(targetSelector).toggleClass("toggle-target-expanded").css("display", "");
            });
        });
    };

    if (jQuery("[data-toggle-target]").length) {
        jQuery("[data-toggle-target]").each(function () {
            toggleHandler(this);
        });
    }

    // ✅ Auto-close menu when a nav link is clicked
    jQuery('.menu a').on('click', function () {
        jQuery('#menu').removeClass('toggle-target-expanded').addClass('toggle-target-hidden');
    });

    // ✅ Auto-close menu when clicking outside the menu
    jQuery(document).on('click touchstart', function (e) {
        const menu = jQuery('#menu');
        const toggle = jQuery('.toggle-btn');
        if (!menu.is(e.target) && menu.has(e.target).length === 0 &&
            !toggle.is(e.target) && toggle.has(e.target).length === 0) {
            menu.removeClass('toggle-target-expanded').addClass('toggle-target-hidden');
        }
    });    
});