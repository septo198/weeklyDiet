document.addEventListener("DOMContentLoaded", () => {
  const weekGrid = document.querySelector(".week-grid");
  if (!weekGrid) return;

  const weekPlan = [
    {
      name: "Lunedì",
      meals: [
        "latte, cereali",
        "crackers",
        "tonno, carote, crackers, mela",
        "mandorle, 2 toast con prosciutto",
        "pane, maiale, mela",
      ],
    },
    {
      name: "Martedì",
      meals: [
        "latte, cereali",
        "cioccolatino, crackers",
        "pane, maiale, mela",
        "mandorle",
        "sushi (libero)",
      ],
    },
    {
      name: "Mercoledì",
      meals: [
        "spremuta, 150g vasetto di yogurt greco 0%, 4 cucchiai di muesli (misto cerali e frutta secca), banana",
        "20g cioccolato fondente, mezza mela",
        "3 uova, carote (min 50g), panino integrale",
        "15 mandorle, mezza mela",
        "hummus (130g), piada integrale (110g), insalata",
      ],
    },
    {
      name: "Giovedì",
      meals: [
        "200ml latte parzialmente scremato, 50g biscotti secchi integrali, banana",
        "20g cioccolato fondente, mezza mela",
        "hummus (130g), piada integrale (110g), insalata",
        "15 mandorle, mezza mela",
        "panino integrale, 160g merluzzo, carote",
      ],
    },
    {
      name: "Venerdì",
      meals: [
        "spremuta, 80g fetta di pane tostato di grano duro/integrale/segale, spalmata di cucchiaio di ricotta magra, miele, 2 noci",
        "20g cioccolato fondente, mezza mela",
        "panino integrale, 160g merluzzo, carote",
        "15 mandorle, mezza mela",
        "hummus (130g), piada (110g), insalata",
      ],
    },
    {
      name: "Sabato",
      meals: [
        "spremuta, 150g vasetto di yogurt greco 0%, 4 cucchiai di muesli (misto cerali e frutta secca), banana",
        "20g cioccolato fondente, mezza mela",
        "pasta pomodoro, formaggi, insalata",
        "15 mandorle, mezza mela",
        "(libero)",
      ],
    },
    {
      name: "Domenica",
      meals: [
        "200ml latte parzialmente scremato, 50g biscotti secchi integrali, banana",
        "20g cioccolato fondente, mezza mela",
        "semi-libero",
        "15 mandorle, mezza mela",
        "80g affettato, verdura",
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
