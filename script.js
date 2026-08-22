document.addEventListener("DOMContentLoaded", () => {
  const weekGrid = document.querySelector(".week-grid");
  if (!weekGrid) return;

  const weekPlan = [
    {
      name: "Lunedì",
      meals: [
        "caffè, 80g pane tostato, marmellata 100%, frutto",
        "30g cioccolato fondente",
        "130g pasta integrale con pomodoro, carote",
        "30g frutta secca",
        "300g pollo, zucchine alla piastra",
      ],
    },
    {
      name: "Martedì",
      meals: [
        "caffè, 150g yogurt greco, 30g frutta secca, 10g semi zucca",
        "frutto, crackers",
        "130g pasta integrale con pomodoro, insalata",
        "125g yogurt greco, 15g frutta secca",
        "300g hummus, carote",
      ],
    },
    {
      name: "Mercoledì",
      meals: [
        "caffè, 80g pane tostato, marmellata 100%, frutto",
        "30g cioccolato fondente",
        "130g pasta integrale con pomodoro, carote",
        "30g frutta secca",
        "300g pesce (no gratinato), zucchine alla piastra",
      ],
    },
    {
      name: "Giovedì",
      meals: [
        "caffè, 150g yogurt greco, 30g frutta secca, 10g semi zucca",
        "30g cioccolato fondente",
        "300g pollo, melanzane alla piastra",
        "30g frutta secca",
        "130g pasta integrale con pomodoro, carote",
      ],
    },
    {
      name: "Venerdì",
      meals: [
        "caffè, 80g pane tostato, marmellata 100%, frutto",
        "30g cioccolato fondente",
        "130g pasta integrale con pomodoro, carote",
        "30g frutta secca",
        "300g hummus, carote",
      ],
    },
    {
      name: "Sabato",
      meals: [
        "caffè, 150g yogurt greco, 30g frutta secca, 10g semi zucca",
        "frutto, crackers",
        "4 uova/300g pesce, carote",
        "125g yogurt greco, 15g frutta secca",
        "libero",
      ],
    },
    {
      name: "Domenica",
      meals: [
        "caffè, 80g pane tostato, marmellata 100%, frutto",
        "frutto, crackers",
        "libero",
        "125g yogurt greco, 15g frutta secca",
        "300g hummus/pesce, zucchine/melanzane alla piastra",
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
