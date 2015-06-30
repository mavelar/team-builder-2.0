!function($){function updateCounter(){var maxLength=+$(this).attr("length"),actualLength=+$(this).val().length,isValidLength=maxLength>=actualLength;$(this).parent().find('span[class="character-counter"]').html(actualLength+"/"+maxLength),addInputStyle(isValidLength,$(this))}function addCounterElement($input){var $counterElement=$("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1);$input.parent().append($counterElement)}function removeCounterElement(){$(this).parent().find('span[class="character-counter"]').html("")}function addInputStyle(isValidLength,$input){var inputHasInvalidClass=$input.hasClass("invalid");isValidLength&&inputHasInvalidClass?$input.removeClass("invalid"):isValidLength||inputHasInvalidClass||($input.removeClass("valid"),$input.addClass("invalid"))}$.fn.characterCounter=function(){return this.each(function(){var itHasLengthAttribute=void 0!==$(this).attr("length");itHasLengthAttribute&&($(this).on("input",updateCounter),$(this).on("focus",updateCounter),$(this).on("blur",removeCounterElement),addCounterElement($(this)))})},$(document).ready(function(){$("input, textarea").characterCounter()})}(jQuery);