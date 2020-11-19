var map;
var player1;
var player2;
var cm;
var wal;
var canvas;
var playerImageUp, playerImageDown, playerImageLeft, playerImageRight;
var database;
var playerIs = 1;
var player1Direction = "up";
var player2Direction = "up";
var wallSet;
var life = 5;
var bulletSetFor1;
var bulletSetFor2;
var player1Life = 100;
var player2Life = 100;
var inp1;
var inp2;
var submit;
var alldata;
var logged;
var gamestate;
var bbr;
var lifebar;
var lifebar2;
var respawnPointsX = [200, 400, 100, 800, 1000, 1100];
var respawnPointsY = [200,400];
function preload() {
  //player Images
    playerImageUp = loadImage("assets/playerUp.png");
    playerImageDown = loadImage("assets/playerDown.png");
    playerImageLeft = loadImage("assets/playerleft.png");
    playerImageRight = loadImage("assets/playerRight.png");
//----------------------------------------------------------------------------//
}
function setup() {
    //canvas
    canvas = createCanvas(1250, 550);
    // canvas.hide();
//----------------------------------------------------------------------------//
    // //input for name
    // inp1 = createInput("", "text");
    // //input for password
    // inp2 = createInput("","password");
    // //button for login
    // submit = createButton("Submit");
//----------------------------------------------------------------------------//
    //Map
    map = new larMasti();
    //walls
    wallSet = new Group();
    //create walls in map
    map.world();
///---------------------------------------------------------------------------//
    //player1
    player1 = createSprite(200, 200, 40, 40);
    player1.addImage(playerImageUp);
    //player2
    player2 = createSprite(1100, 200, 40, 40);
    player2.addImage(playerImageUp);
    //player scaling
    player1.scale = 0.5;
    player2.scale = 0.5;
    //lifebar
    lifebar = createSprite(0,0,0,0);
    lifebar2 = createSprite(0,0,0,0);
//----------------------------------------------------------------------------//
    //database
    database = firebase.database();
    //full data reading
    database.ref("/").on("value", (data) => {
      alldata = data.val();
    })
    //gamestate
    database.ref("/game1/gameState").on("value", (data) => {
      gameState = data.val();
    })
    database.ref("/gameonly/players/player1/playerlife").on("value", (data) => {
      player1Life = data.val();
    })
    database.ref("/gameonly/players/player2/playerlife").on("value", (data) => {
      player2Life = data.val();
    })
//----------------------------------------------------------------------------//
    //camera zoom
    //camera.zoom = 6;
    //bullet sets
    bulletSetFor1 = new Group();
    bulletSetFor2 = new Group();
//----------------------------------------------------------------------------//

// database.ref("/game1/playersIngame").on("value", (data) => {
//   bbr = data.val();
// })
//     //logingin
//     submit.mousePressed(() => {
//       //check1 - input filled
//       if (inp2.value() && inp1.value()) {
//         //check2- players signed
//         if (alldata.game1.gamePlayerPresent === 2) {
//           //check3 - if player 1 is logging
//           if (inp1.value() === alldata.game1.players.player1.playername && alldata.game1.players.player1.playerPassword === inp2.value()) {
//             inp1.hide();
//             inp2.hide();
//             submit.hide();
//
//             database.ref("/game1").update({
//               playersIngame : bbr+1
//             })
//             database.ref("/game1/players/player1").update({
//               logged : true
//             })
//             playerIs = 1;
//           }
//           //check2 - player 2 is logging
//           else if (inp1.value() === alldata.game1.players.player2.playername && alldata.game1.players.player2.playerPassword === inp2.value()) {
//             inp1.hide();
//             inp2.hide();
//             submit.hide();
//
//             database.ref("/game1").update({
//               playersIngame : bbr+1
//             })
//             database.ref("/game1/players/player2").update({
//               logged : true
//             })
//             playerIs = 2
//           }
//         }
//       }else {
//         alert("fill your data");
//       }
//   });
}


function draw() {
    background(300);
    if (playerIs === 2) {
      database.ref("/gameonly/players/player2").on("value", (data) => {
        var bbc = data.val();
        player2.position.x = bbc.playerX;
        player2.position.y = bbc.playerY;
      })
      lifebar.position.x = player2.position.x
      lifebar.position.y = player2.position.y - 30;
      lifebar.width = player2Life;
      lifebar.height = 1;
      lifebar.shapeColor = "red"
      if (player2Life > 50) {
        lifebar.shapeColor = "green";
      }else if (player2Life < 50) {
        lifebar.shapeColor = "red";
      }


      lifebar2.position.x = player1.position.x;
      lifebar2.position.y = player1.position.y -30;
      lifebar2.width = player1Life;
      lifebar2.height = 1;
      lifebar2.shapeColor = "red"
      if (player1Life > 50) {
        lifebar2.shapeColor = "green";
      }else if (player1Life < 50) {
        lifebar2.shapeColor = "red";
      }
      database.ref("/gameonly/players/player1").on("value", (data) => {
        var rbc = data.val();
        player1.position.x = rbc.positionX;
        player1.position.y = rbc.positionY;
      })
    }

    if (playerIs === 1) {
      database.ref("/gameonly/players/player1").on("value", (data) => {
        var bbc = data.val();
        player1.position.x = bbc.playerX;
        player1.position.y = bbc.playerY;
      })
      lifebar.position.x = player1.position.x;
      lifebar.position.y = player1.position.y -30;
      lifebar.width = player1Life;
      lifebar.height = 1;
      if (player1Life > 50) {
        lifebar.shapeColor = "green";
      }else if (player1Life < 50) {
        lifebar.shapeColor = "red";
      }
      lifebar2.position.x = player2.position.x;
      lifebar2.position.y = player2.position.y -30;
      lifebar2.width = player2Life;
      lifebar2.height = 1;
      lifebar2.shapeColor = "red"
      if (player2Life > 50) {
        lifebar2.shapeColor = "green";
      }else if (player2Life < 50) {
        lifebar2.shapeColor = "red";
      }
      database.ref("/gameonly/players/player2").on("value", (data) => {
        var rbc = data.val();
        player2.position.x = rbc.positionX;
        player2.position.y = rbc.positionY
      })
    }

    //console.log(player2Life);

    if (playerIs === 1) {
        if (keyDown("UP_ARROW")) {
            database.ref("gameonly/players/player1/").update({
              playerY : player1.position.y - 10,
              playerDirection : "up"
            })

        }

        if (keyDown("DOWN_ARROW")) {
          database.ref("gameonly/players/player1/").update({
            playerY : player1.position.y + 10,
            playerDirection : "down"
          })
        }

        if (keyDown("LEFT_ARROW")) {
          database.ref("gameonly/players/player1/").update({
            playerX : player1.position.x - 10,
            playerDirection : "left"
          })

        }

        if (keyDown("RIGHT_ARROW")) {
          database.ref("gameonly/players/player1/").update({
            playerX : player1.position.x + 10,
            player1Direction : "right"
          })

        }
    }

    if (playerIs === 2) {
        if (keyDown("UP_ARROW")) {
          database.ref("gameonly/players/player2/").update({
            playerY : player2.position.y - 10,
            player2Direction : "up"
          })
        }

        if (keyDown("DOWN_ARROW")) {
          database.ref("gameonly/players/player2/").update({
            playerY : player2.position.y + 10,
            player2Direction : "right"
          })

        }

        if (keyDown("LEFT_ARROW")) {
          database.ref("gameonly/players/player2/").update({
            playerX : player2.position.x - 10,
            player2Direction : "left"
          })


        }

        if (keyDown("RIGHT_ARROW")) {
          database.ref("gameonly/players/player2/").update({
            playerX : player2.position.x + 10,
            player2Direction : "right"
          })
        }
    }

    if (keyDown("space")) {
        if (playerIs === 1) {
            if (player1Direction === "up") {
                bullet = Bullet();
                bullet.velocity.y = -20;
            }
            if (player1Direction === "down") {
                bullet = Bullet();
                bullet.velocity.y = 20;
            }
            if (player1Direction === "left") {
                bullet = Bullet();
                bullet.velocity.x = -20;
            }
            if (player1Direction === "right") {
                bullet = Bullet();
                bullet.velocity.x = 20;
            }
        }

        if (playerIs === 2) {
            if (player2Direction === "up") {
                bullet = Bullet();
                bullet.velocity.y = -20;
            }
            if (player2Direction === "down") {
                bullet = Bullet();
                bullet.velocity.y = 20;
            }
            if (player2Direction === "left") {
                bullet = Bullet();
                bullet.velocity.x = -20;
            }
            if (player2Direction === "right") {
                bullet = Bullet();
                bullet.velocity.x = 20;
            }
        }
    }

    player1.collide(player2);

    if (playerIs === 1) {
        player1.collide(wallSet);
        camera.position.x = player1.position.x;
        camera.position.y = player1.position.y;

    }
    if (playerIs === 2) {
        player2.collide(wallSet);
        camera.position.x = player2.position.x;
        camera.position.y = player2.position.y;
    }

    for (var b = 0; b < bulletSetFor1.length; b++) {
        if (bulletSetFor1.get(b).collide(wallSet)) {
            bulletSetFor1.get(b).destroy();
        }

    }
    for (var a = 0; a < bulletSetFor2.length; a++) {
        if (bulletSetFor2.get(a).collide(wallSet)) {
            bulletSetFor2.get(a).destroy();
        }
    }

    if (playerIs === 2) {
      for (var a = 0; a < bulletSetFor2.length;a ++) {
            if (bulletSetFor2.get(a).collide(player1)) {
                bulletSetFor2.get(a).destroy();
                player1Life -= 1;
                database.ref("/gameonly/players/player1").update({
                  playerlife : player1Life - 1
                })
                respawn();
            }
      }
    }

    if (playerIs === 1) {
      for (var a = 0; a < bulletSetFor1.length;a ++) {
            if (bulletSetFor1.get(a).collide(player2)) {
                bulletSetFor1.get(a).destroy();
                database.ref("/gameonly/players/player2").update({
                  playerlife : player2Life - 1
                })
                respawn();
            }
      }
    }

    drawSprites();
}

function Bullet() {
    if (playerIs === 1) {
        var spr = createSprite(player1.position.x, player1.position.y, 2, 2);
        spr.shapeColor = "red";
        spr.depth = player1.depth - 1;
        spr.lifetime = 200;
        bulletSetFor1.add(spr);
        return spr;

    }

    if (playerIs === 2) {
        var spr = createSprite(player2.position.x, player2.position.y, 2, 2);
        spr.shapeColor = "orange";
        spr.depth = player2.depth - 1;
        spr.lifetime = 200;
        bulletSetFor2.add(spr);
        return spr;

    }
}

function respawn() {
  if (player1Life < 2 && playerIs === 2) {
          player1.position.x = random(respawnPointsX);
          player1.position.y = random(respawnPointsY);
          database.ref("/gameonly/players/player1").update({
            playerlife : 100
          })
  }else if (player2Life < 2 && playerIs === 1) {
          player2.position.x = random(respawnPointsX);
          player2.position.y = random(respawnPointsY);
          player2Life = 100;
          database.ref("/gameonly/players/player2").update({
            playerlife : 100
          })
  }
}
