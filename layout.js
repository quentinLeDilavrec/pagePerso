
/**
 * Module dependencies.
 */

var pug = require('pug')
  , path = __dirname + '/src/layout.pug'
  , str = require('fs').readFileSync(path, 'utf8')
  , fn = pug.compile(str, { filename: path, pretty: true });

var locals = {


  firstname: 'prenom',
  name: 'nom',
  institute: 'ENS Rennes',
  quick_info: [
    { name: 'job', value: 'Student', icon: "fa-briefcase" },
    { name: 'location', value: 'Rennes, France', icon: "fa-home" },
    { name: 'mail', value: 'fistname.name@ens-rennes.fr', icon: "fa-envelope" }],
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
      values: ['', '']
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