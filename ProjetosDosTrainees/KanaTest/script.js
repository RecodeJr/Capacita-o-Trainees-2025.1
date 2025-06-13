// Tries to autoplay the title theme muted on page load
window.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bgMusic");
  audio.muted = true;
  playMusic("./media/title.mp3");
});

// Unmutes and restart music on first user interaction
window.addEventListener("click", function unmuteMusic() {
  const audio = document.getElementById("bgMusic");
  audio.muted = false;
  audio.currentTime = 0;
  audio.play();
  window.removeEventListener("click", unmuteMusic);
});

// Shows overlay and hides all other content until user clicks
window.addEventListener("DOMContentLoaded", function () {
  document.body.querySelectorAll("div, header, audio").forEach((el) => {
    if (el.id !== "clickAnywhereOverlay") el.style.display = "none";
  });

  document.getElementById("clickAnywhereOverlay").style.display = "flex";
});

window.addEventListener("click", function handleFirstClick() {
  document.getElementById("clickAnywhereOverlay").style.display = "none";
  document.body.querySelectorAll("div, header, audio").forEach((el) => {
    if (el.id !== "clickAnywhereOverlay") el.style.display = "";
  });
  window.removeEventListener("click", handleFirstClick);
});

var score = 0;
// Starts the game properly
document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("startButton").style.display = "none";
  document.getElementById("kanaPrompt").style.display = "flex";
  document.getElementById("textInput").style.display = "block";
  playMusic("./media/game.mp3");
  showNextKana();
});
// Kana structure
function Kana(japanese, romaji) {
  this.japanese = japanese;
  this.romaji = romaji;
}
// Instantiates every kana with its romaji equivalent
const hiraganaList = [
  new Kana("あ", "a"),
  new Kana("い", "i"),
  new Kana("う", "u"),
  new Kana("え", "e"),
  new Kana("お", "o"),
  new Kana("か", "ka"),
  new Kana("き", "ki"),
  new Kana("く", "ku"),
  new Kana("け", "ke"),
  new Kana("こ", "ko"),
  new Kana("さ", "sa"),
  new Kana("し", "shi"),
  new Kana("す", "su"),
  new Kana("せ", "se"),
  new Kana("そ", "so"),
  new Kana("た", "ta"),
  new Kana("ち", "chi"),
  new Kana("つ", "tsu"),
  new Kana("て", "te"),
  new Kana("と", "to"),
  new Kana("な", "na"),
  new Kana("に", "ni"),
  new Kana("ぬ", "nu"),
  new Kana("ね", "ne"),
  new Kana("の", "no"),
  new Kana("は", "ha"),
  new Kana("ひ", "hi"),
  new Kana("ふ", "fu"),
  new Kana("へ", "he"),
  new Kana("ほ", "ho"),
  new Kana("ま", "ma"),
  new Kana("み", "mi"),
  new Kana("む", "mu"),
  new Kana("め", "me"),
  new Kana("も", "mo"),
  new Kana("や", "ya"),
  new Kana("ゆ", "yu"),
  new Kana("よ", "yo"),
  new Kana("ら", "ra"),
  new Kana("り", "ri"),
  new Kana("る", "ru"),
  new Kana("れ", "re"),
  new Kana("ろ", "ro"),
  new Kana("わ", "wa"),
  new Kana("を", "wo"),
  new Kana("ん", "n"),
  new Kana("が", "ga"),
  new Kana("ぎ", "gi"),
  new Kana("ぐ", "gu"),
  new Kana("げ", "ge"),
  new Kana("ご", "go"),
  new Kana("ざ", "za"),
  new Kana("じ", "ji"),
  new Kana("ず", "zu"),
  new Kana("ぜ", "ze"),
  new Kana("ぞ", "zo"),
  new Kana("だ", "da"),
  new Kana("ぢ", "ji"),
  new Kana("づ", "zu"),
  new Kana("で", "de"),
  new Kana("ど", "do"),
  new Kana("ば", "ba"),
  new Kana("び", "bi"),
  new Kana("ぶ", "bu"),
  new Kana("べ", "be"),
  new Kana("ぼ", "bo"),
  new Kana("ぱ", "pa"),
  new Kana("ぴ", "pi"),
  new Kana("ぷ", "pu"),
  new Kana("ぺ", "pe"),
  new Kana("ぽ", "po"),
];

const katakanaList = [
  new Kana("ア", "a"),
  new Kana("イ", "i"),
  new Kana("ウ", "u"),
  new Kana("エ", "e"),
  new Kana("オ", "o"),
  new Kana("カ", "ka"),
  new Kana("キ", "ki"),
  new Kana("ク", "ku"),
  new Kana("ケ", "ke"),
  new Kana("コ", "ko"),
  new Kana("サ", "sa"),
  new Kana("シ", "shi"),
  new Kana("ス", "su"),
  new Kana("セ", "se"),
  new Kana("ソ", "so"),
  new Kana("タ", "ta"),
  new Kana("チ", "chi"),
  new Kana("ツ", "tsu"),
  new Kana("テ", "te"),
  new Kana("ト", "to"),
  new Kana("ナ", "na"),
  new Kana("ニ", "ni"),
  new Kana("ヌ", "nu"),
  new Kana("ネ", "ne"),
  new Kana("ノ", "no"),
  new Kana("ハ", "ha"),
  new Kana("ヒ", "hi"),
  new Kana("フ", "fu"),
  new Kana("ヘ", "he"),
  new Kana("ホ", "ho"),
  new Kana("マ", "ma"),
  new Kana("ミ", "mi"),
  new Kana("ム", "mu"),
  new Kana("メ", "me"),
  new Kana("モ", "mo"),
  new Kana("ヤ", "ya"),
  new Kana("ユ", "yu"),
  new Kana("ヨ", "yo"),
  new Kana("ラ", "ra"),
  new Kana("リ", "ri"),
  new Kana("ル", "ru"),
  new Kana("レ", "re"),
  new Kana("ロ", "ro"),
  new Kana("ワ", "wa"),
  new Kana("ヲ", "wo"),
  new Kana("ン", "n"),
  new Kana("ガ", "ga"),
  new Kana("ギ", "gi"),
  new Kana("グ", "gu"),
  new Kana("ゲ", "ge"),
  new Kana("ゴ", "go"),
  new Kana("ザ", "za"),
  new Kana("ジ", "ji"),
  new Kana("ズ", "zu"),
  new Kana("ゼ", "ze"),
  new Kana("ゾ", "zo"),
  new Kana("ダ", "da"),
  new Kana("ヂ", "ji"),
  new Kana("ヅ", "zu"),
  new Kana("デ", "de"),
  new Kana("ド", "do"),
  new Kana("バ", "ba"),
  new Kana("ビ", "bi"),
  new Kana("ブ", "bu"),
  new Kana("ベ", "be"),
  new Kana("ボ", "bo"),
  new Kana("パ", "pa"),
  new Kana("ピ", "pi"),
  new Kana("プ", "pu"),
  new Kana("ペ", "pe"),
  new Kana("ポ", "po"),
];

let allKana = hiraganaList.concat(katakanaList);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(allKana);

let currentKana = null;

function showNextKana() {
  if (allKana.length > 0) {
    currentKana = allKana.shift();
    document.getElementById(
      "kanaPrompt"
    ).innerHTML = `<span style="font-size:24px;">Guess the pronunciation:</span><span>${currentKana.japanese}</span>`;
  } else {
    endGame();
  }
}

// Transitions to final score/rank screen
function endGame() {
  const textInputDiv = document.getElementById("textInput");
  if (textInputDiv) textInputDiv.remove();

  let rank = "";
  if (score < 0 || score > 142) {
    rank = "Huh???";
    playMusic("./media/weird.mp3");
  } else if (score < 20) {
    rank = "Too bad!";
    playMusic("./media/bad_score.mp3");
  } else if (score < 40) {
    rank = "Hmmm, not quite there yet";
    playMusic("./media/bad_score.mp3");
  } else if (score < 70) {
    rank = "You can do better!";
    playMusic("./media/bad_score.mp3");
  } else if (score < 100) {
    rank = "Good one!";
    playMusic("./media/good_score.mp3");
  } else if (score < 120) {
    rank = "Awesome！";
    playMusic("./media/good_score.mp3");
  } else if (score < 130) {
    rank = "Incredible!!";
    playMusic("./media/good_score.mp3");
  } else if (score < 142) {
    rank = "Almost there!!!";
    playMusic("./media/good_score.mp3");
  } else if (score === 142) {
    rank = "Perfect! You are a super player!!!";
    playMusic("./media/perfect_score.mp3");
  }

  // Final screen constructor
  const kanaPromptDiv = document.getElementById("kanaPrompt");
  kanaPromptDiv.innerHTML = `<div style="text-align:center, font-size: clamp(32px, 10vw, 77px);">
        <h2>Final score: ${score}/142</h2>
        <h3>Your rank: ${rank}</h3>
    </div>`;
}

// Answer field handler
document
  .getElementById("kanaInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const userInput = this.value.trim().toLowerCase();
      const correctRomaji = currentKana.romaji.toLowerCase();

      if (userInput === correctRomaji) {
        alert("Correct!");
        score++;
      } else {
        alert("Wrong!");
      }
      this.value = "";
      showNextKana();
    }
  });

// Music playback
function playMusic(src) {
  const audio = document.getElementById("bgMusic");
  audio.loop = src.includes("game.mp3"); // Only loops the main game's music
  if (audio.src.endsWith(src)) return; // Don't reload if already playing
  audio.pause();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}
