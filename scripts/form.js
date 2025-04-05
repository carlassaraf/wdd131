const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


products.forEach(product => {
  const opt = document.createElement("option");
  opt.setAttribute("id", product.id);
  opt.innerText = product.name;
  opt.value = product.averagerating;

  document.querySelector("select").append(opt);
});

document.querySelector("form").addEventListener("submit", () => {

  let count = localStorage.getItem("reviews");
  if(count) { localStorage.setItem("reviews", parseInt(count)+1); }
  else { localStorage.setItem("reviews", 1); }
})