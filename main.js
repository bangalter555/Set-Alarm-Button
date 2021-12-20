//DOCUMENT
const $document = document;
//BODY
const $body = document.body;
$body.classList.add("body");

//TITLE
const $pageTitle = document.createElement("h1");
$pageTitle.classList.add("title");
$pageTitle.innerText = `Alarm App`;

//BUTTONS
//PLAY BTN
const $playBtn = document.createElement("button");
$playBtn.innerText = `Start Alarm`;
$playBtn.classList.add("buttons");
//STOP BTN
const $stopBtn = document.createElement("button");
$stopBtn.innerText = `Stop Alarm`;
$stopBtn.classList.add("buttons", "hidden");

//AUDIO
const $alarm = document.createElement("audio");
$alarm.src = "assets/alarm-clock.mp3";
$alarm.volume = 1;
$alarm.loop = true;

//DOM INSERTIONS
$body.insertAdjacentElement("afterbegin", $pageTitle);
$pageTitle.insertAdjacentElement("afterend", $playBtn);
$playBtn.insertAdjacentElement("afterend", $alarm);
$alarm.insertAdjacentElement("afterend", $stopBtn);

//EVENTS DELEGATION
$document.addEventListener("mouseover", (e) => {
  if (e.target === $playBtn || e.target === $stopBtn) {
    e.target.classList.add("buttons-hover");
  }
});

$document.addEventListener("mouseout", (e) => {
  if (e.target === $playBtn || e.target === $stopBtn) {
    e.target.classList.remove("buttons-hover");
  }
});

$document.addEventListener("click", (e) => {
  if (e.target === $playBtn) {
    e.target.classList.toggle("hidden");
    $stopBtn.classList.toggle("hidden");
    $alarm.play();
  }
  if (e.target === $stopBtn) {
    $playBtn.classList.toggle("hidden");
    $stopBtn.classList.toggle("hidden");
    $alarm.pause();
    $alarm.currentTime = 0;
  }
});
