document.addEventListener("DOMContentLoaded", () => {
  const weekGrid = document.querySelector(".week-grid");
  if (!weekGrid) return;

  const weekPlan = [
    {
      name: "Lunedì",
      meals: [
        "pane, miele, ricotta, banana",
        "formaggio, mezza mela",
        "uova, pane, carote",
        "mandorle, mezza mela",
        "bruschetta olio, sale, rosmarino",
        "pollo, insalata, pane",
      ],
    },
    {
      name: "Martedì",
      meals: [
        "muesli, yogurt greco, spremuta, miele",
        "20g parmigiano, mezza mela",
        "crocchette pesce, carote, pane",
        "mandorle, mezza mela",
        "-",
        "piada int, carote, hummus",
      ],
    },
    {
      name: "Mercoledì",
      meals: [
        "pane, miele, ricotta, spremuta",
        "20g parmigiano, mezza mela",
        "crocchette pesce, carote, pane",
        "mandorle, mezza mela",
        "40g pane int, pomodorini, sale, olio",
        "hummus, piada int, carote",
      ],
    },
    {
      name: "Giovedì",
      meals: [
        "spremuta, muesli, yogurt greco, miele, banana",
        "20g cioccolato, banana",
        "pasta al pomodoro, affettato, insalata",
        "banana, mandorle",
        "40g pane int, pomodorini, sale, olio",
        "piada con affettato e sottiletta",
      ],
    },
    {
      name: "Venerdì",
      meals: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      name: "Sabato",
      meals: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      name: "Domenica",
      meals: [
        "-",
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
