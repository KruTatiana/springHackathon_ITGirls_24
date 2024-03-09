const quotes = [
  {
    quote: "Я пошел за молоком, дорогая.",
    autor: " Жаклин Уилсон",
  },
  {
    quote:
      "Самое важное - это верить в себя. Если ты веришь в себя, то все возможно",
    autor: " Мэри Кэй Аш",
  },
  {
    quote:
      "Никогда не позволяй никому сказать тебе, что ты не можешь сделать чего-то. Если у тебя есть мечта, защищай её.",
    autor: "Габби Дуглас",
  },
  {
    quote:
      "Самое важное в жизни - это умение принимать вызовы и не бояться перемен",
    autor: "Мэй Уэст",
  },
  {
    quote:
      "Женщина может достичь всего, если она верит в себя и не боится рисковать.",
    autor: " Энжела Меркель",
  },
];

const subtextQuote = document.getElementById("subtextQuote");
const btn = document.getElementById("blockTextQuote");

// получить случайное целое число
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

// задержка в мс
async function delay(x) {
  return new Promise((res) => setTimeout(res, x));
}

// вывести цитату
async function printq(q) {
  for (let i = 0; i < q.length; i++) {
    subtextQuote.textContent += q[i];
    await delay(50);
  }
}

// менять цитаты случайно
async function type() {
  while (true) {
    subtextQuote.textContent = "";
    let quote = quotes[randomInt(quotes.length)];
    await printq("« " + quote.quote + "» " + quote.autor);
    await delay(1000 + randomInt(2000)); // случайная задержка между цитатами
  }
}

btn.addEventListener("click", type);
console.log(btn);
//   type();
