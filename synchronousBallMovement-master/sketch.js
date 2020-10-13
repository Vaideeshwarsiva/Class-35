var database;
var playerCount;
var gameState = 0;
var form, player, game;

function setup(){
  var canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();  
}

function draw(){

}