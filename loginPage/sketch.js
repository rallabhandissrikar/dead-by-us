var inp1;
var inp2;
var button;
var button2;
var database;
var datainfo;
var textHead;
var playerCount;
var lrc;
var divr;
var fullData;
var logged = false;
var time;
var timer = 10;
var head;
var Warning;
function setup() {
  Warning = createElement("h1","Warning! dont keep password and username same");
  Warning.hide();
  inp1 = select(".inpu1");
  inp2 = select("#inppass");
  button = select(".but");
  button2 = select("#but2");
  divr = select(".lidt");
  textHead = select(".h1");
  database = firebase.database();
  time = createElement("h1", timer);
  time.hide();
  database.ref("/game1/gamePlayerPresent").on("value", (data) => {
  playerCount = data.val();
  })
  database.ref("/").on("value", (data) => {
    fullData = data.val();
  })
  button.mousePressed(() => {
    if (inp1.value() && inp2.value() && inp1.value() !== inp2.value()) {
      inp1.hide();
      inp2.hide();
      textHead.hide();
      button.hide();
      button2.hide();
      divr.hide();
      if (playerCount === 2) {
        lrc = createElement("h1","PLAYERS FULL!!");
        lrc.parent(".lidt");
      }else if (playerCount < 2) {
        if (fullData.game1.players.player1.playername === "notset") {
          logged = true;
            database.ref("/game1").update({
            gamePlayerPresent : playerCount + 1
          })
          database.ref("/game1/players/player1").update({
            playername : inp1.value(),
            playerPassword : inp2.value()
          })
          database.ref("/game1/players/player1").update({
            player1PositionX:200,
            player1PositionY:200
          })
          head = createElement("h1", "please Wait ultill players join")
        }
        else if (fullData.game1.players.player2.playername === "notset") {
          logged = true;
            database.ref("/game1").update({
            gamePlayerPresent : playerCount + 1
          })
          database.ref("/game1/players/player2").update({
            playername : inp1.value(),
            playerPassword : inp2.value()
          })
          database.ref("/game1/players/player2").update({
            player2PositionX:1100,
            player2PositionY:200
          })
          head = createElement("h1", "please Wait ultill players join")
        }
      }
    }
  })
}

function draw() {
  if (playerCount === 2 && logged === true) {
    time.show();
    head.hide();
    if (frameCount % 60 == 0) {
      timer--;
      time.html(timer);
    }
    setTimeout(() => {
      window.location = "game/index.html"
    }, 10000)

  }

  if (inp1.value() === inp2.value() && inp1.value() && inp2.value()) {
    Warning.show();
  }else if (inp2.value() !== inp1.value()) {
    Warning.hide();
  }
}
