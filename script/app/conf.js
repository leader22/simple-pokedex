define('conf', ['jquery'], function ($) {
  'use strict';

  var instance;
  if (instance) return instance;

  var lang = (/ja/.test(navigator.language)) ? 'ja' : 'en';
  var Conf = {
    lang: lang,
    jsonPath: {
      base: '/data/monster.json',
      type: '/data/type.json'
    }
  };
  var Lang = {
    ja: {
      jsonPath: {
        lang: '/data/lang/ja.json',
      },
      words: {
        type: 'タイプ',
        typeChart: 'タイプ相性',
        types: {
          normal: 'ノーマル',
          fire: 'ほのお',
          water: 'みず',
          electric: 'でんき',
          grass: 'くさ',
          ice: 'こおり',
          fighting: 'かくとう',
          poison: 'どく',
          ground: 'じめん',
          flying: 'ひこう',
          psychic: 'エスパー',
          bug: 'むし',
          rock: 'いわ',
          ghost: 'ゴースト',
          dragon: 'ドラゴン',
          dark: 'あく',
          steel: 'はがね',
          fairy: 'フェアリー'
        },
        baseStats: {
          title: '種族値',
          hp: 'HP',
          attack: 'こうげき',
          defense: 'ぼうぎょ',
          specialAttack: 'とくこう',
          specialDefense: 'とくぼう',
          speed: 'すばやさ',
          total: '合計'
        },
        abilities: {
          normal: '特性',
          hidden: '夢特性'
        },
        height: '高さ',
        weight: '重さ',
        nationalPokedex: 'ぜんこく図鑑',
        misc: 'その他'
      },
      titles: {
        index: 'ポケモン図鑑',
        detail: '%sの詳細'
      }
    },
    en: {
      jsonPath: {
        lang: '/data/lang/en.json',
      },
      words: {
        type: 'Type',
        typeChart: 'Type Chart',
        types: {
          normal: 'Normal',
          fire: 'Fire',
          water: 'Water',
          electric: 'Electric',
          grass: 'Grass',
          ice: 'Ice',
          fighting: 'Fighting',
          poison: 'Poison',
          ground: 'Ground',
          flying: 'Flying',
          psychic: 'Psychic',
          bug: 'Bug',
          rock: 'Rock',
          ghost: 'Ghost',
          dragon: 'Dragon',
          dark: 'Dark',
          steel: 'Steel',
          fairy: 'Fairy'
        },
        baseStats: {
          title: 'Base Stats',
          hp: 'Hp',
          attack: 'Attack',
          defense: 'Defense',
          specialAttack: 'Special Attack',
          specialDefense: 'Special Defense',
          speed: 'Speed',
          total: 'Total'
        },
        abilities: {
          normal: 'Normal Ability',
          hidden: 'Hidden Ability'
        },
        height: 'Height',
        weight: 'Weight',
        nationalPokedex: 'National Pokédex',
        misc: 'Misc'
      },
      titles: {
        index: 'Pokédex',
        detail: 'About %s'
      }
    }
  };

  instance = $.extend(true, Conf, Lang[lang]);
  return instance;

});
