/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */


const forecastBtn = document.querySelector('.forecast-btn'); //куда будут вставляться предсказания
const currentForecastText = document.querySelector('h1'); //сгенерированное предсказание
const currentForecastProbability = document.querySelector('p'); //сгенерированное вероятности
const myPredictions = document.querySelector('.forecasts'); //контейнер с моими предсказаниями

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

forecastBtn.addEventListener('click', function () {
  let text = " "; //при клике на кнопку объявили переменную, у которой изначально пустая строка

  let predictionText = getRandomInt(0, 3); //переменная, которая выводит генерацию 3-х предсказаний,которая вставляется в строку h1
  let predictionNumber = getRandomInt(0, 100); //переменная, которая генерирует вероятность, которая вставляется в p
  
  if (predictionText == 1) {
    text = "Скоро будет прибавка к зарплате";
  } else if (predictionText == 2) {
    text = "Вас ожидает повышение и продвижение по карьерной лестнице";
  } else {
    text = "В ближайшее время ожидаются приятные новости";
  }
  
  currentForecastText.textContent = text;
  currentForecastProbability.textContent = predictionNumber + "%";

  const forecastItem = document.querySelector('#forecast-item'); //карточка с пердсказанием

  function createTemplate(predictionText, predictionNumber) {
    const numberCard = forecastItem.content.cloneNode(true);

    const firstCardName = document.querySelector('h3');
    firstCardName.textContent = predictionText;

    const firstCardProbability = document.querySelector('p');
    firstCardProbability.textContent = predictionNumber;

    return numberCard;
  }
  const numberCardOne = createTemplate(predictionText, "Вероятность" + predictionNumber + "%");
  forecastItem.append(numberCardOne);
  myPredictions.append(forecastItem);
});