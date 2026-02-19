document.addEventListener("DOMContentLoaded", () => {
  const weekGrid = document.querySelector(".week-grid");
  if (!weekGrid) return;

  const weekPlan = [
    {
      name: "Lunedì",
      meals: [
        "spremuta, banana, yogurt greco, muesli, caffe",
        "cioccolata, mezza mela",
        "3 uova, carote, pane integrale",
        "mandorle, mezza mela",
        "pollo, patate, crackers",
      ],
    },
    {
      name: "Martedì",
      meals: [
        "fette biscotatte, ricotta, miele, spremuta",
        "cioccolata, mezza mela",
        "pasta pomodoro, sgombro, insalata",
        "mandorle, mezza mela",
        "pesce al forno, carote, pane integrale",
      ],
    },
    {
      name: "Mercoledì",
      meals: [
        "spremuta, 150g vasetto di yogurt greco 0%, 4 cucchiai di muesli (misto cerali e frutta secca), banana",
        "20g cioccolato fondente, mezza mela",
        "pesce al forno, carote, pane integrale",
        "15 mandorle, mezza mela",
        "ape (2 drink, patatine), 2 brioche, 1 toast",
      ],
    },
    {
      name: "Giovedì",
      meals: [
        "spremuta, 80g fetta di pane tostato di grano duro/integrale/segale, spalmata di cucchiaio di ricotta magra, miele, 2 noci",
        "20g cioccolato fondente, mezza mela",
        "pollo, carote, crackers integrali",
        "15 mandorle, mezza mela",
        "hummus, pane integrale, carote",
      ],
    },
    {
      name: "Venerdì",
      meals: [
        "200ml latte parzialmente scremato, 50g biscotti secchi integrali, banana",
        "20g cioccolato fondente, mezza mela",
        "pollo, insalata",
        "15 mandorle, mezza mela",
        "sushi (libero)",
      ],
    },
    {
      name: "Sabato",
      meals: [
        "spremuta, 150g vasetto di yogurt greco 0%, 4 cucchiai di muesli (misto cerali e frutta secca), banana",
        "20g cioccolato fondente, mezza mela",
        "pollo, insalata, pane integrale",
        "15 mandorle, mezza mela",
        "pizza (libero)",
      ],
    },
    {
      name: "Domenica",
      meals: [
        "200ml latte parzialmente scremato, 50g biscotti secchi integrali, banana",
        "20g cioccolato fondente, mezza mela",
        "pasta pesto, formaggio, insalata",
        "15 mandorle, mezza mela",
        "hummus, piada integrale, carote",
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
