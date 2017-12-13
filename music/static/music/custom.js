/**
 * Created by tanuj on 29-10-2017.
 */
var initializeAll = function() {
    $('.dropdown-button').dropdown({"hover": false});
    $('ul.tabs').tabs();
    $('.tab-demo').show().tabs();
    $('.parallax').parallax();
    $('.modal-trigger').modal();
    $('.tooltipped').tooltip({"delay": 45});
    $('.collapsible-accordion').collapsible();
    $('.collapsible-expandable').collapsible({"accordion": false});
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({
      menuWidth: 300,
      closeOnClick: true,
      edge: 'right', // <--- CHECK THIS OUT
    });
    $('.datepicker').pickadate();
    $('.chips').material_chip();
    $('.chips-initial').material_chip({
        data: [{
          tag: 'Apple',
        }, {
          tag: 'Microsoft',
        }, {
          tag: 'Google',
        }],
    });
    $('.chips-placeholder').material_chip({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
    });
}
$(document).ready(initializeAll);