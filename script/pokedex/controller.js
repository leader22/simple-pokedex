define([
  'marionette',
  'util',
  'app',
  'collection/monsters',
  'view/about',
  'view/detail',
  'view/header',
  'view/index',
  'view/list'
], function(
  Marionette,
  util,
  App,
  MonstersCollection,
  AboutView,
  DetailView,
  HeaderView,
  IndexView,
  ListView
) {
  'use strict';

  /**
   * @class Controller
   *
   * ルーターからキックされるコントローラー。
   */
  var Controller = Marionette.Controller.extend({
    initialize: function() {
      // ヘッダは作って放置
      App.header.attachView(new HeaderView());

      this.collection = new MonstersCollection();
      this.collection.once('reset', function() {
        // showしなくても元からDOMで見えてる
        util.loading.hide();
      });
      this.collectionFetch = this.collection.fetch();
    },
    /**
     * いわゆるトップページ
     */
    index: function() {
      util.scroller.store();
      var indexView = new IndexView();
      App.content.show(indexView);
    },
    /**
     * このサイトについてページ
     */
    about: function() {
      util.scroller.store();
      var aboutView = new AboutView();
      App.content.show(aboutView);
    },
    /**
     * リストのページ
     * カテゴリで絞りこまれればその内容を、指定がなければ全てを一覧で。
     *
     * @param {String} ctg 名前の頭文字のカテゴリ
     */
    list: function(ctg) {
      util.scroller.restore();
      var that = this;
      that.collectionFetch.done(function() {
        var listView = new ListView({
          collection: that.collection,
          isMega: (ctg === 'mega'),
          category: ctg
        });
        App.content.show(listView);
      });
    },
    /**
     * 詳細ページ
     * 渡されたcidで、モンスターの詳細を表示。
     *
     * @param {Number} cid モンスターのモデルのcid
     */
    detail: function(cid) {
      util.scroller.store();
      var that = this;
      that.collectionFetch.done(function() {
        var detailView = new DetailView({
          collection: that.collection,
          cid: cid
        });
        App.content.show(detailView);
      });
    }
  });

  return Controller;
});
