!function(t){"use strict";var o=t("#grid");t("#filter-trigger").on("tap",function(){t("#filter-trigger").fadeOut(200,function(){t("#filters").fadeIn(500)})}),t("#filters").on("tap","button",function(a){a.stopPropagation();var i=t(this).attr("data-filter");o.isotope({filter:i}),t(".item").addClass("visible"),a.preventDefault()});var a=t('<div class="back-to-top"></div>');t("body").append(a),t("body").on("tap",".back-to-top",function(o){t("html,body").animate({scrollTop:0}),o.preventDefault()}),t(window).scroll(function(){var o=t(window).scrollTop(),i=(100-o/t(window).height()*100)/100;t(".jumbotron").css("opacity",i),o>200?a.addClass("active"):a.removeClass("active")}),t(window).load(function(){t(".container-fluid").addClass("loaded"),o.isotope(),t(".item").waypoint(function(){t(this).addClass("visible"),o.isotope()},{offset:"70%"}),t(".fadeIn").waypoint(function(){t(this).addClass("visible")},{offset:"70%"});var i=t(window).scrollTop();i>200&&a.addClass("active"),t("input, textarea").placeholder()}),t("header").affix(),t(".trigger").on("tap",function(o){o.stopPropagation(),t("#navigation").toggleClass("active")}),t("html").on("tap",function(){t("#navigation").removeClass("active")}),t("a").on("tap",function(o){o.stopPropagation();var a=t(this).attr("href");if("#"==a||t(this).hasClass("lightbox")||t(this).hasClass("anchor")||(t("body").fadeOut(400,function(){window.location=a}),o.preventDefault()),t(this).hasClass("anchor")){var a=t(this).attr("href");t("html,body").animate({scrollTop:t(a).offset().top-50+"px"},800),t("#navigation").removeClass("active"),o.preventDefault()}}),t(window).bind("unload",function(){}),t(window).bind("pageshow",function(t){t.originalEvent.persisted&&window.location.reload()})}(jQuery);