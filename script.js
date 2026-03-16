document.addEventListener("DOMContentLoaded", () => {
  const weekGrid = document.querySelector(".week-grid");
  if (!weekGrid) return;

  const weekPlan = [
    {
      name: "Lunedì",
      meals: [
        "latte, banana, biscotti int",
        "20g cioccolato, mezza mela",
        "3 uova, insalata, pane int",
        "mandorle, mezza mela",
        "40g pane int, pomodorini, sale, olio, parmigiano",
        "hummus, piada, carote",
      ],
    },
    {
      name: "Martedì",
      meals: [
        "spremuta, 80g fette di pane tostato, ricotta, miele",
        "20g cioccolato, mezza mela",
        "pasta pomodoro, insalata, mozzarella",
        "mandorle, mezza mela",
        "40g pane int, pomodorini, sale, olio, parmigiano",
        "pollo, carote, pane",
      ],
    },
    {
      name: "Mercoledì",
      meals: [
        "yogurt greco, muesli, miele, spremuta, mezza mela",
        "20g parmigiano, mezza mela",
        "hummus, carote, piada",
        "mandorle, mezza mela",
        "40g pane int, pomodorini, sale, olio, parmigiano",
        "crocchette pesce affare, pane (poco), insalata",
      ],
    },
    {
      name: "Giovedì",
      meals: [
        "spremuta, 80g fetta di pane tostato, ricotta, miele",
        "20g parmigiano, mezza mela",
        "pollo, insalata, pane",
        "mandorle, mezza mela",
        "40g pane int, pomodorini, sale, olio, parmigiano",
        "crocchette pesce findus, pane (poco), insalata",
      ],
    },
    {
      name: "Venerdì",
      meals: [
        "latte, banana, biscotti int",
        "20g parmigiano, mezza mela",
        "crocchette pesce findus, pane (poco), carote",
        "15 mandorle, mezza mela",
        "40g pane int, pomodorini, sale, olio, parmigiano",
        "piada con prosciutto, mozzarella e insalata",
      ],
    },
    {
      name: "Sabato",
      meals: [
        "spremuta, 150g vasetto di yogurt greco 0%, 4 cucchiai di muesli (misto cerali e frutta secca), banana",
        "-",
        "-",
        "-",
        "-",
        "pizza (libero)",
      ],
    },
    {
      name: "Domenica",
      meals: [
        "spremuta, 80g fetta di pane tostato, ricotta, miele, 2 noci",
        "caffè macchiato",
        "pasta al pomodoro, insalata, affettato ?",
        "cioccolato, mela",
        "40g pane int, pomodorini, sale, olio, parmigiano",
        "hummus, piada, carote",
      ],
    },
  ];

  const mealLabels = ["colazione", "spuntino", "pranzo", "spuntino 1", "spuntino 2", "cena"];

  // 0 = Sunday, 6 = Saturday; convert so 0 = Monday, 6 = Sunday
  const jsDay = new Date().getDay();
  const todayIndex = jsDay === 0 ? 6 : jsDay - 1;

  const cardsHtml = weekPlan
    .map((day, index) => {
      const mealsHtml = day.meals
        .map((mealText, index) => {
          const label = mealLabels[index] || `meal ${index + 1}`;
          return `
            <div class="meal">
              <div class="meal-label">${label}</div>
              <div class="meal-desc">${mealText}</div>
            </div>`;
        })
        .join("");

      const openAttr = index === todayIndex ? " open" : "";

      return `
        <details class="day-card"${openAttr}>
          <summary class="day-header">
            <div class="day-title">
              <span class="day-name">${day.name}</span>
            </div>
            <span class="chevron">▶</span>
          </summary>
          <div class="meals">
            <div class="meals-list">
              ${mealsHtml}
            </div>
          </div>
        </details>`;
    })
    .join("");

  weekGrid.innerHTML = cardsHtml;
});
