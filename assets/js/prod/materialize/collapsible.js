!function($){$.fn.collapsible=function(options){var defaults={accordion:void 0};return options=$.extend(defaults,options),this.each(function(){function accordionOpen(object){$panel_headers=$this.find("> li > .collapsible-header"),object.hasClass("active")?object.parent().addClass("active"):object.parent().removeClass("active"),object.parent().hasClass("active")?object.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){$(this).css("height","")}}):object.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){$(this).css("height","")}}),$panel_headers.not(object).removeClass("active").parent().removeClass("active"),$panel_headers.not(object).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){$(this).css("height","")}})}function expandableOpen(object){object.hasClass("active")?object.parent().addClass("active"):object.parent().removeClass("active"),object.parent().hasClass("active")?object.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){$(this).css("height","")}}):object.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){$(this).css("height","")}})}function isChildrenOfPanelHeader(object){var panelHeader=getPanelHeader(object);return panelHeader.length>0}function getPanelHeader(object){return object.closest("li > .collapsible-header")}var $this=$(this),$panel_headers=$(this).find("> li > .collapsible-header"),collapsible_type=$this.data("collapsible");$this.off("click.collapse",".collapsible-header"),$panel_headers.off("click.collapse"),options.accordion||"accordion"===collapsible_type||void 0===collapsible_type?($panel_headers=$this.find("> li > .collapsible-header"),$panel_headers.on("click.collapse",function(e){var element=$(e.target);isChildrenOfPanelHeader(element)&&(element=getPanelHeader(element)),element.toggleClass("active"),accordionOpen(element)}),accordionOpen($panel_headers.filter(".active").first())):$panel_headers.each(function(){$(this).on("click.collapse",function(e){var element=$(e.target);isChildrenOfPanelHeader(element)&&(element=getPanelHeader(element)),element.toggleClass("active"),expandableOpen(element)}),$(this).hasClass("active")&&expandableOpen($(this))})})},$(document).ready(function(){$(".collapsible").collapsible()})}(jQuery);