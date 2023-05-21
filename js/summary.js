const {href} = window.location ;

fetch(`${href}/js/data.json`)
  .then((response) => response.json())
  .then((data) => {
    let scoreResult = 0;
    data.forEach((item) => {
      scoreResult += item.score;
      document.getElementById("items").appendChild(itemTemplate({ ...item }));
    });
    document.getElementById("scoreResult").innerText = Math.floor(
      scoreResult / data.length
    );
  });

function itemTemplate({ category, icon, score }) {
  const itemHTML = `
    <div class="item-name">
        <img src="${icon}" alt="${category}" />
        <span>${category}</span>
    </div>
    <div class="item-qualifications">
        <span>${score}</span>
        <span>/</span>
        <span>100</span>
    </div>
    `;
  const element = document.createElement("div");
  element.classList.add("item");
  element.classList.add(category.toLowerCase());
  element.innerHTML = itemHTML;

  return element;
}
