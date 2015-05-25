/**
 * Made by NeoTheFox, 2015
 *
 * Licenced under GNU GPLv2 licence
 * 
 * s a t o r
 * a r e p o
 * t e n e t
 * o p e r a
 * r o t a s
 *
 */

//Pebble stuff
var UI = require('ui');
var Vector2 = require('vector2');
var Settings = require('settings');

//Game values
var seeds = 0;
var seedss = 1;
var lizards = 0;
var lizardss = 0; 
var town = 0;

var main = new UI.Card({
  title: 'You have:',
  style: 'small'
});

//Update, duh
function update() {
  seeds += seedss;
  lizards += lizardss;
  
  if(seeds >= 1000){
    if(town === 0) {
      town = 1;
    }
    seeds = 0;
    lizards += 1;
  }
  
  if(town === 0){
    main.body('seeds: ' + seeds.toString() + '+' + seedss.toString() + '/s');
  } else if(town == 1) {
    main.body('seeds: ' + seeds.toString() + '+' + seedss.toString() + '/s' + '\n' +
    'lizards: ' + lizards.toString() + '+' + lizardss.toString() + '/s');
  }
  
  main.show();
}

setInterval(update, 1000);
