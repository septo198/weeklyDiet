document.addEventListener("DOMContentLoaded", () => {
  const weekGrid = document.querySelector(".week-grid");
  if (!weekGrid) return;

  const weekPlan = [
    {
      name: "Lunedì",
      meals: [
        "80g pane int, ricotta, miele, spremuta",
        "20g formaggio, mezza mela",
        "3 uova, 90g piada int, carote",
        "20g mandorle, mezza mela",
        "-",
        "130g hummus, carote, 90g piada int",
      ],
    },
    {
      name: "Martedì",
      meals: [
        "150g yogurt greco, 3-4 cucchiai muesli, fragole, miele, spremuta",
        "20g cioccolato fond, mezza mela",
        "pasta al pesto, insalata, mozzarella",
        "20g mandorle, mezza mela",
        "-",
        "90g pane int, insalata, 130g pollo",
      ],
    },
    {
      name: "Mercoledì",
      meals: [
        "80g pane int, ricotta, miele, spremuta, granola",
        "20g parmigiano, mezza mela",
        "90g pane int, carote, 130g pollo",
        "20g mandorle, mezza mela",
        "-",
        "160g crocchette pesce, insalata, 80g pane int",
      ],
    },
    {
      name: "Giovedì",
      meals: [
        "150g yogurt greco, 3-4 cucchiai muesli, fragole, miele, spremuta",
        "20g cioccolato, mezza mela",
        "160g crocchette pesce, carote, 80g pane int",
        "20g mandorle, mezza mela",
        "40g pane int, sale, olio",
        "130g hummus, carote, 90g piada int",
      ],
    },
    {
      name: "Venerdì",
      meals: [
        "80g pane int, ricotta, miele, spremuta, granola",
        "20g parmigiano, mezza mela",
        "pasta al tonno, insalata",
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
        "-",
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
