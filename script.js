document.addEventListener("DOMContentLoaded", () => {
  const weekGrid = document.querySelector(".week-grid");
  if (!weekGrid) return;

  const weekPlan = [
    {
      name: "Lunedì",
      meals: [
        "muesli, yogurt greco, spremuta, miele",
        "formaggio, mezza mela",
        "tranci pizza, trecce, yogurt",
        "gelato",
        "-",
        "pollo, insalata, mezza piada int",
      ],
    },
    {
      name: "Martedì",
      meals: [
        "pane, miele, ricotta, banana",
        "20g parmigiano, mezza mela",
        "uova, carote, pane",
        "mandorle, mezza mela",
        "crackers",
        "piada int, carote, hummus",
      ],
    },
    {
      name: "Mercoledì",
      meals: [
        "pane, miele, ricotta, banana",
        "20g parmigiano, mezza mela",
        "hummus, piada int, carote",
        "mandorle, mezza mela",
        "40g pane int, pomodorini, sale, olio",
        "hummus, piada int, carote",
      ],
    },
    {
      name: "Giovedì",
      meals: [
        "spremuta, muesli, yogurt greco, miele, banana",
        "20g parmigiano, mezza mela",
        "pollo, carote, pane",
        "mandorle, mezza mela",
        "40g pane int, pomodorini, sale, olio",
        "hummus, insalata, piada",
      ],
    },
    {
      name: "Venerdì",
      meals: [
        "pane, miele, ricotta, spremuta",
        "20g parmigiano, mezza mela",
        "pasta al pomodoro, insalata, tonno",
        "15 mandorle, mezza mela",
        "40g pane int, pomodorini, sale, olio, parmigiano",
        "hummus, carote, piada",
      ],
    },
    {
      name: "Sabato",
      meals: [
        "spremuta, 150g vasetto di yogurt greco 0%, 4 cucchiai di muesli (misto cerali e frutta secca), banana",
        "-",
        "grigliata",
        "-",
        "-",
        "pizza",
      ],
    },
    {
      name: "Domenica",
      meals: [
        "latte, biscotti int, banana",
        "-",
        "?",
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
