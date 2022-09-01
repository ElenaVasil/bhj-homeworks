const botMsg = [
  `Здравствуйте`,
  `Привет!`,
  `Чем помочь?`,
  `До свидания!`,
  `Извините...`,
  `На небе звезды)`,
  `Оки поки`,
  `Что нужно?`,
  `Кто вы?`,
];

const chat = document.querySelector(`.chat-widget__side`);
const chatPopUp = document.querySelector(`.chat-widget`);
function showChat() {
    chatPopUp.classList.toggle(`chat-widget_active`);
}
chat.addEventListener(`click`, showChat);

let timeStr = null;
function getDate() {
  const timeCurrent = new Date;
  let timeHH = timeCurrent.getHours();
    if (timeHH < 10) {
      timeHH = `0${timeHH}`;
    }
  let timeMM = timeCurrent.getMinutes();
    if (timeMM < 10) {
      timeMM = `0${timeMM}`;
    }
  timeStr = `${timeHH}:${timeMM}`;
}
const clientInput = document.getElementById(`chat-widget__input`);
const msg = document.getElementById(`chat-widget__messages`);

clientInput.addEventListener(`keydown`, event => {
  if (clientInput.value) {
    if (event.keyCode === 13) { //если нажали enter
      getDate();

      msg.innerHTML += `
        <div class="message message_client">
          <div class="message__time">` + timeStr + `</div>
          <div class="message__text">` + clientInput.value + `</div>
        </div>`;
      clientInput.value = ``;

      setTimeout(function() {
        getDate();

        msg.innerHTML += `
          <div class="message">
            <div class="message__time">` + timeStr + `</div>
            <div class="message__text">` + botMsg[Math.floor(Math.random() * botMsg.length)] + `</div>
        </div>`;
        clientInput.value = ``;
        }, 500);
    }
  }
});