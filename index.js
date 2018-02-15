
/**
 * Module dependencies.
 */

var pug = require('pug')
  , path = __dirname + '/src/index/layout.pug'
  , str = require('fs').readFileSync(path, 'utf8')
  , fn = pug.compile(str, { filename: path, pretty: true });

var locals = {
  pages: ['general','contact', 'portfolio', 'cv'],

  firstname: 'prenom',
  name: 'nom',
  institute: 'ENS Rennes',
  quick_info: [
    { name: 'job', value: 'Student', icon: "fa-briefcase" },
    { name: 'location', value: 'Rennes, France', icon: "fa-home" },
    { name: 'mail', value: 'firstname.name@ens-rennes.fr', icon: "fa-envelope" }],
  skills: [
    {
      name: { english: 'Skills', french: 'Compétences' },
      list: [
        ['python', '60%'],
        ['C++', '150%'],
        ['C', '1%'],
        ['Ocaml', '70%'],
        ['lisp', '30%']]
    },
    {
      name: { english: 'Languages', french: 'Langues' },
      list: [
        [{ english: 'french', french: 'français' }, '100%'],
        [{ english: 'english' }, '70%'],
        ['german', '30%']]
    }],
  curiculum: [
    {
      name: { english: 'Experience', french: 'Experience' },
      icon: 'fa-suitcase',
      values: [{name:'aaa',date:{value:'24/24/1024 - ', current:true}}, {name:'aaa',date:{value:'24/24/1024 - ', current:false}}]
    },
    {
      name: { english: 'Education', french: 'Education' },
      icon: 'fa-certificate',
      values: [{name:'aaa',date:{value:'24/24/1024 - ', current:true}}, {name:'aaa',date:{value:'24/24/1024 - ', current:false}}]
    },
  ],
  f: function (obj, language) {
    if (typeof obj === 'object') {
      var tmp = obj[language]
      if (tmp == undefined) {
        return obj['english'].toString()
      }
      else {
        return tmp.toString()
      }
    }
    else {
      return obj.toString()
    }
  },
  language:'french'
};

console.log(fn(locals));