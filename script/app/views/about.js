define([
  'util',
  'conf',
  'templates',
  'backbone'
], function (
  util,
  conf,
  JST,
  Backbone
) {
  'use strict';

  var AboutView = Backbone.View.extend({
    initialize: function() {
      util.l('AboutView init');
      this.render();
    },
    template: JST['about'],
    render: function() {
      var that = this;
      util.l('AboutView render', that);


      var data = {
        titles: conf.titles,
        texts: conf.texts.about
      };

      that.$el.html(that.template(data));
      util.title(conf.titles.about);

      return that;
    },
    events: {
      'click .js-back-to': util.backTo
    }
  });



  return AboutView;
});
