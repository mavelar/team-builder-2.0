!function($){$(document).ready(function(){$.fn.pushpin=function(options){var defaults={top:0,bottom:1/0,offset:0};return options=$.extend(defaults,options),$index=0,this.each(function(){function removePinClasses(object){object.removeClass("pin-top"),object.removeClass("pinned"),object.removeClass("pin-bottom")}function updateElements(objects,scrolled){objects.each(function(){options.top<=scrolled&&options.bottom>=scrolled&&!$(this).hasClass("pinned")&&(removePinClasses($(this)),$(this).css("top",options.offset),$(this).addClass("pinned")),scrolled<options.top&&!$(this).hasClass("pin-top")&&(removePinClasses($(this)),$(this).css("top",0),$(this).addClass("pin-top")),scrolled>options.bottom&&!$(this).hasClass("pin-bottom")&&(removePinClasses($(this)),$(this).addClass("pin-bottom"),$(this).css("top",options.bottom-$original_offset))})}var $uniqueId=Materialize.guid(),$this=$(this),$original_offset=$(this).offset().top;updateElements($this,$(window).scrollTop()),$(window).on("scroll."+$uniqueId,function(){var $scrolled=$(window).scrollTop()+options.offset;updateElements($this,$scrolled)})})}})}(jQuery);