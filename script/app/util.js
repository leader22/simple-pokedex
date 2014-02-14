define('util', ['conf'], function (conf) {
  'use strict';

  var instance;
  if (instance) return instance;

  var util = {
    l: console.log.bind(console),
    title: (function() {
      var $header = $('#js-view-header');
      return function(title) {
        var rep = Array.prototype.slice.call(arguments, 1);
        title = this.printf(title, rep);
        document.title = title;
        $header.text(title);
      };
    }()),
    printf: function(l) {
      var i = 1, args = arguments;
      return l.replace(/%s/g, function() {
        return (i < args.length) ? args[i++] : '';
      });
    },
    navigate: function(e) {
      e.preventDefault();
      var dest = $(e.target).data('href');
      Backbone.history.navigate(dest, {trigger: true});
    },
    backTo: function(e) {
      e.preventDefault();
      history.back();
    },
    scroller: (function() {
      var scrollY = 0;
      var $window = $('html,body');
      return {
        restore: function() {
          var t = setTimeout(function() {
            $window.animate({ scrollTop: scrollY }, 250);
            clearTimeout(t);
          }, 100);
        },
        store: function(y) {
          scrollY = y || 0;
          var t = setTimeout(function() {
            $window.animate({ scrollTop: 0 }, 250);
          }, 100);
        }
      };
    }())
  };

  instance = util;
  return instance;

});
