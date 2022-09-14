const speedy = document.getElementById("speedy");
let haveFromage = false;

function test() {
    let txt = "";
    txt += "<div class='container'>"
        if (!haveFromage) {
            txt += "<img class='position-absolute bottom-0 start-0' src='img/speedy_1.png' alt='Speedy a vu quelque chose...' style='width:500px;'>"
            txt += "<button type='button' class='position-absolute top-50 start-50 translate-middle fs-4 fw-bold btn btn-speedy' onClick='changeStatus()' style='min-width:350px; min-height:60px'>ATTRAPER LE FROMAGE</button>"
        } else {
            txt += "<img class='position-absolute bottom-0 start-50 translate-middle-x' src='img/speedy_2.png' alt='Speedy a attrapé le fromage...' style='width:500px;'>"
            txt += "<button type='button' class='position-absolute top-50 start-50 translate-middle fs-4 fw-bold btn btn-speedy' onClick='changeStatus()' style='min-width:350px; min-height:60px'>RETOUR</button>"
        }
    txt += "</div>"
    speedy.innerHTML = txt;
}

function changeStatus() {
    haveFromage = !haveFromage;
    test();
}

var words = ['Speedy gonzales', 'a vu un fromage au loin...', "c'est la crise du fromage !", "et tout le monde est à l'affût", "pour s'en procurer"],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;

var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.intro').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

test();