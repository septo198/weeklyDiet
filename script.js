document.addEventListener("DOMContentLoaded", () => {
  const weekGrid = document.querySelector(".week-grid");
  if (!weekGrid) return;

  const weekPlan = [
    {
      name: "Lunedì",
      meals: [
        "pane, ricotta, miele, spremuta",
        "-",
        "pollo, insalata, pane int",
        "crackers",
        "risotto salsiccia, spritz, torte, erbazzone (libero)",
      ],
    },
    {
      name: "Martedì",
      meals: [
        "latte, caffè, biscotti int",
        "parmigiano, mezza mela",
        "pollo, carote, pane, 5 mandorle",
        "10 mandorle, mezza mela",
        "focaccia, mozzarella, biscotti int",
      ],
    },
    {
      name: "Mercoledì",
      meals: [
        "yogurt greco, muesli, miele, spremuta, mezza mela",
        "parmigiano, mezza mela",
        "hummus, carote, piada, 5 mandorle",
        "10 mandorle, mezza mela",
        "pollo, insalata, pane",
      ],
    },
    {
      name: "Giovedì",
      meals: [
        "spremuta, 80g fetta di pane tostato, ricotta, miele",
        "20g parmigiano, mezza mela",
        "pollo, insalata, pane",
        "15 mandorle, mezza mela",
        "hummus, pane, carote",
      ],
    },
    {
      name: "Venerdì",
      meals: [
        "spremuta, 150g vasetto di yogurt greco 0%, 4 cucchiai di muesli (misto cerali e frutta secca), banana",
        "20g parmigiano, mezza mela",
        "pasta al tonno/sgombro, insalata",
        "15 mandorle, mezza mela",
        "pesce al forno, insalata, pane",
      ],
    },
    {
      name: "Sabato",
      meals: [
        "spremuta, 150g vasetto di yogurt greco 0%, 4 cucchiai di muesli (misto cerali e frutta secca), banana",
        "20g cioccolato fondente, mezza mela",
        "pasta pomodoro, affettato, insalata",
        "15 mandorle, mezza mela",
        "pizza (libero)",
      ],
    },
    {
      name: "Domenica",
      meals: [
        "spremuta, 80g fetta di pane tostato, ricotta, miele, 2 noci",
        "-",
        "pasta",
        "-",
        "hummus, piada, carote",
      ],
    },
  ];

  const mealLabels = ["colazione", "spuntino", "pranzo", "spuntino", "cena"];

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
