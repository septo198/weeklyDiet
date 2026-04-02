document.addEventListener("DOMContentLoaded", () => {
  const weekGrid = document.querySelector(".week-grid");
  if (!weekGrid) return;

  const weekPlan = [
    {
      name: "Lunedì",
      meals: [
        "spremuta, 80g fette di pane tostato, ricotta, miele",
        "20g cioccolato, mezza mela",
        "grigliata (libero)",
        "-",
        "-",
        "hummus, carote, piada",
      ],
    },
    {
      name: "Martedì",
      meals: [
        "latte, banana, biscotti int",
        "20g cioccolato, mezza mela",
        "hummus, carote, piada",
        "mandorle, mezza mela",
        "40g pane int, pomodorini, sale, olio, parmigiano",
        "pollo, insalata, pane",
      ],
    },
    {
      name: "Mercoledì",
      meals: [
        "yogurt greco, muesli, miele, spremuta, mezza mela",
        "20g parmigiano, mezza mela",
        "pollo, carote, pane",
        "mandorle, mezza mela",
        "40g pane int, pomodorini, sale, olio, parmigiano",
        "sushi (libero)",
      ],
    },
    {
      name: "Giovedì",
      meals: [
        "spremuta, 80g fetta di pane tostato, ricotta, miele",
        "20g parmigiano, mezza mela",
        "uova, pane, carote",
        "mandorle, mezza mela",
        "40g pane int, pomodorini, sale, olio, parmigiano",
        "hummus, carote, piada",
      ],
    },
    {
      name: "Venerdì",
      meals: [
        "latte, banana, biscotti int",
        "20g parmigiano, mezza mela",
        "pasta al pomodoro, insalata, affettato",
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
        "pasta al pomodoro, insalata, formaggi",
        "-",
        "40g pane int, pomodorini, sale, olio, parmigiano",
        "pizza (libero)",
      ],
    },
    {
      name: "Domenica",
      meals: [
        "spremuta, 80g fetta di pane tostato, ricotta, miele, 2 noci",
        "-",
        "-",
        "-",
        "-",
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
