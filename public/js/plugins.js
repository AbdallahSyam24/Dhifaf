(()=>{function e(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}var n=$(".sidenav-main"),a=($(".content-overlay"),$(".navbar .nav-collapsible")),l=$("#breadcrumbs-wrapper");function o(){n.hasClass("nav-expanded")&&!n.hasClass("nav-lock")?(n.toggleClass("nav-expanded"),$("#main").toggleClass("main-full")):$("#main").toggleClass("main-full")}function t(){if(!$(".sidenav-main.nav-collapsible").hasClass("nav-lock")){var e=$(".collapsible .open").children().length;$(".sidenav-main.nav-collapsible, .navbar .nav-collapsible").addClass("nav-collapsed").removeClass("nav-expanded"),$("#slide-out > li.open > a").parent().addClass("close").removeClass("open"),setTimeout((function(){if(e>1){var n=$(".sidenav-main .collapsible");M.Collapsible.getInstance(n).close($(".collapsible .close").index())}}),100)}}$("body").hasClass("menu-collapse")&&$(window).width()>993&&(n.removeClass("nav-lock"),$(".nav-collapsible .navbar-toggler i").text("radio_button_unchecked"),a.removeClass("sideNav-lock"),o(),t()),$(window).on("load",(function(){$("body").removeClass("preload-transitions")})),$((function(){"use strict";var i;function s(){var e=" -webkit- -moz- -o- -ms- ".split(" ");return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)||function(e){return window.matchMedia(e).matches}(["(",e.join("touch-enabled),("),"heartz",")"].join(""))}$(".sidenav-main .sidenav").find("li.active").parents("li").addClass("active"),$(".tabs").tabs(),$(".datepicker").datepicker({autoClose:!0,format:"dd/mm/yyyy",container:"body",onDraw:function(){$(".datepicker-container").find(".datepicker-select").addClass("browser-default"),$(".datepicker-container .select-dropdown.dropdown-trigger").remove()}}),$("#tabs-swipe-demo").length&&$("#tabs-swipe-demo").tabs({swipeable:!0}),$("select").formSelect();var d=document.getElementById("indeterminate-checkbox");null!==d&&(d.indeterminate=!0),$(".slider").slider({full_width:!0}),$(".dropdown-trigger").dropdown(),$(".dropdown-button").dropdown({inDuration:300,outDuration:225,constrainWidth:!1,hover:!0,gutter:0,coverTrigger:!0,alignment:"left"}),$(".notification-button, .profile-button, .translation-button, .dropdown-settings").dropdown({inDuration:300,outDuration:225,constrainWidth:!1,hover:!1,gutter:0,coverTrigger:!1,alignment:"right"}),$(".dropdown-menu").dropdown((e(i={inDuration:300,outDuration:225,constrainWidth:!1,hover:!1,gutter:0,coverTrigger:!1,alignment:"right"},"hover",!1),e(i,"closeOnClick",!1),i)),$(".dropdownSub-menu").dropdown({closeOnClick:!1,constrainWidth:!1,alignment:"left",inDuration:300,outDuration:225,gutter:0,coverTrigger:!0,hover:!0}),$(".dropdown-submenu").on("mouseenter",(function(){var e=$(this);$(this).find(".dropdownSub-menu").dropdown("open");var n=e.find(".dropdown-content");if(n){var a=n.offset().left,l=n.width();$("html[data-textdirection='rtl']").length>0?a>=l?e.find(".dropdown-content").removeClass("right-open").addClass("left-open"):e.find(".dropdown-content").removeClass("left-open").addClass("right-open"):window.innerWidth-(a+l)<=l?e.find(".dropdown-content").removeClass("left-open").addClass("right-open"):e.find(".dropdown-content").removeClass("right-open").addClass("left-open")}})),$(".dropdown-submenu").on("mouseleave",(function(){var e=$(this);e.find(".dropdownSub-menu").dropdown("close"),e.find(".dropdown-content").removeClass("right-open"),e.find(".dropdown-content").removeClass("left-open")})),$(".fixed-action-btn").floatingActionButton(),$(".fixed-action-btn.horizontal").floatingActionButton({direction:"left"}),$(".fixed-action-btn.click-to-toggle").floatingActionButton({direction:"left",hoverEnabled:!1}),$(".fixed-action-btn.toolbar").floatingActionButton({toolbarEnabled:!0}),$(".tab-demo").show().tabs(),$(".tab-demo-active").show().tabs(),$(".scrollspy").scrollSpy(),$(".tooltipped").tooltip({delay:50});var c=document.querySelectorAll(".collapsible");M.Collapsible.init(c);var r=document.querySelector(".collapsible.expandable");M.Collapsible.init(r,{accordion:!1});if(l.attr("data-image")){var u=l.attr("data-image");l.addClass("breadcrumbs-bg-image"),l.css("background-image","url("+u+")")}var v,m=$("li.active .collapsible-sub .collapsible"),p=document.querySelectorAll(".sidenav-main .collapsible");if(M.Collapsible.init(p,{accordion:!0,onOpenStart:function(){$(".collapsible > li.open").removeClass("open"),setTimeout((function(){$("#slide-out > li.active > a").parent().addClass("open")}),10)}}),$("body").hasClass("menu-collapse")){var b=$(".sidenav-main .collapsible");$("#slide-out > li.active").children().length>1&&$("#slide-out > li.active > a").parent().addClass("close"),M.Collapsible.getInstance(b).close($(".collapsible .close").index())}else $("#slide-out > li.active").children().length>1&&$("#slide-out > li.active > a").parent().addClass("open");if(m.find("a.active").length>0&&(m.find("a.active").closest("div.collapsible-body").show(),m.find("a.active").closest("div.collapsible-body").closest("li").addClass("active")),v=$(".sidenav-main li a.active").parent("li.active").parent("ul.collapsible-sub").length>0?$(".sidenav-main li a.active").parent("li.active").parent("ul.collapsible-sub").position():$(".sidenav-main li a.active").parent("li.active").position(),setTimeout((function(){void 0!==v&&$(".sidenav-main ul").stop().animate({scrollTop:v.top-300},300)}),300),$(".nav-collapsible .navbar-toggler").click((function(){o(),"radio_button_unchecked"==$(this).children().text()?($(this).children().text("radio_button_checked"),n.addClass("nav-lock"),a.addClass("sideNav-lock")):($(this).children().text("radio_button_unchecked"),n.removeClass("nav-lock"),a.removeClass("sideNav-lock"))})),$(".sidenav-main.nav-collapsible, .navbar .brand-sidebar").mouseenter((function(){$(".sidenav-main.nav-collapsible").hasClass("nav-lock")||($(".sidenav-main.nav-collapsible, .navbar .nav-collapsible").addClass("nav-expanded").removeClass("nav-collapsed"),$("#slide-out > li.close > a").parent().addClass("open").removeClass("close"),setTimeout((function(){if($(".collapsible .open").children().length>1){var e=$(".sidenav-main .collapsible");M.Collapsible.getInstance(e).open($(".collapsible .open").index())}}),100))})),$(".sidenav-main.nav-collapsible, .navbar .brand-sidebar").mouseleave((function(){t()})),$(".sidenav").sidenav({edge:"left"}),$(".slide-out-right-sidenav").sidenav({edge:"right"}),$(".slide-out-right-sidenav-chat").sidenav({edge:"right"}),s())$(".leftside-navigation,.slide-out-right-body, .chat-body .collection, #ul-horizontal-nav").css("overflow","scroll");else{if($("#slide-out.leftside-navigation").length>0&&!$("#slide-out.leftside-navigation").hasClass("native-scroll"))new PerfectScrollbar(".leftside-navigation",{wheelSpeed:2,wheelPropagation:!1,minScrollbarLength:20});if($(".slide-out-right-body").length>0)new PerfectScrollbar(".slide-out-right-body #messages, .chat-body .collection",{suppressScrollX:!0,wheelPropagation:!1}),new PerfectScrollbar(".slide-out-right-body #settings",{suppressScrollX:!0,wheelPropagation:!1}),new PerfectScrollbar(".slide-out-right-body #activity",{suppressScrollX:!0,wheelPropagation:!1});if($(".chat-body .collection").length>0)new PerfectScrollbar(".chat-body .collection",{suppressScrollX:!0});if($("#ul-horizontal-nav").length>0)var h=new PerfectScrollbar("#ul-horizontal-nav",{wheelPropagation:!1});$("#ul-horizontal-nav").on("mouseenter",(function(){h.update()}))}$("#messages .header-search-input").on("keyup",(function(){$(".chat-user").css("animation","none");var e=$(this).val().toLowerCase();""!=e?$(".right-sidebar-chat .right-sidebar-chat-item").filter((function(){$(this).toggle($(this).text().toLowerCase().indexOf(e)>-1)})):$(".right-sidebar-chat .right-sidebar-chat-item").show()}));var g=$("#right-sidebar-nav #slide-out-chat .chat-body .collection");function s(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}g.length>0&&(g[0].scrollTop=g[0].scrollHeight),$(".toggle-fullscreen").click((function(){document.fullScreenElement&&null!==document.fullScreenElement||!document.mozFullScreen&&!document.webkitIsFullScreen?document.documentElement.requestFullScreen?document.documentElement.requestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen?document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):document.documentElement.msRequestFullscreen&&(document.msFullscreenElement?document.msExitFullscreen():document.documentElement.msRequestFullscreen()):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()})),s()&&$("#nav-mobile").css({overflow:"auto"}),$(".dropdown-language .dropdown-item").on("click",(function(){var e=$(this);e.siblings(".selected").removeClass("selected"),e.addClass("selected");var n=e.find(".flag-icon").attr("class");$(".translation-button .flag-icon").removeClass().addClass(n)}));var f=$("html")[0].lang;if(null!==f){var w=$(".dropdown-language .dropdown-item").find("a[data-language="+f+"] .flag-icon").attr("class");$(".translation-button .flag-icon").removeClass().addClass(w)}$("#ul-horizontal-nav li.active").length>0&&$("#ul-horizontal-nav li.active").closest("ul").parents("li").addClass("active"),$("html[data-textdirection='rtl']").length>0&&($(".sidenav").sidenav({edge:"right"}),$(".slide-out-right-sidenav").sidenav({edge:"left"}),$(".slide-out-right-sidenav-chat").sidenav({edge:"left"}))})),$(window).on("resize",(function(){$(window).width()<994?n.hasClass("nav-collapsed")&&(n.removeClass("nav-collapsed").addClass("nav-lock nav-expanded"),a.removeClass("nav-collapsed").addClass("sideNav-lock")):$(window).width()>993&&$("body").hasClass("menu-collapse")&&n.hasClass("nav-lock")&&(n.removeClass("nav-lock nav-expanded").addClass("nav-collapsed"),a.removeClass("sideNav-lock").addClass("nav-collapsed"))}))})();