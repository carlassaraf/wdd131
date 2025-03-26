document.querySelector("#hamburger").addEventListener("click", () => {
    // Toggle visibility in nav bar
    document.querySelector(".navigation").classList.toggle("visible");
    // Togle close class in hamburger
    document.querySelector("#hamburger").classList.toggle("close");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 19",
        area: 30659,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-aires-argentina-temple-2012-1021302-wallpaper.jpg"
    },
    {
        templeName: "Cordoba Argentina",
        location: "Cordoba, Argentina",
        dedicated: "2015, May, 17",
        area: 34369,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/2018/400x250/Cordoba-Argentina-Temple01.jpg"
    },
    {
        templeName: "Asuncion Paraguay",
        location: "Asuncion, Paraguay",
        dedicated: "2002, May, 19",
        area: 11906,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/4-e49cfde212b104b97a0463371127c11e47f9c084.jpeg"
    }
];

const templeToHTML = (temple) => {
    const card = document.createElement("div");
    card.setAttribute("class", "temple-card");

    const name = document.createElement("h3");
    name.innerText = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `Location: <span>${temple.location}</span>`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `Dedicated: <span>${temple.dedicated}</span>`;

    const size = document.createElement("p");
    size.innerHTML = `Size: <span>${temple.area}</span> sq ft`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    card.append(name, location, dedicated, size, img);
    document.querySelector("#temples").append(card);
}

const renderCards = (temples) => {
    document.querySelector("#temples").innerHTML = "";
    temples.forEach(temple => templeToHTML(temple));
}

renderCards(temples);

// Filters
document.querySelectorAll(".navigation li a").forEach(a => {
    // Add filter
    a.addEventListener("click", (e) => {
        // Prevent page reload
        e.preventDefault();

        switch(e.target.innerText.toLowerCase()) {

            case "home":
                renderCards(temples);
                break;

            case "old":
                renderCards(temples.filter(temple => temple.dedicated.split(",")[0] < 1900));
                break;

            case "new":
                renderCards(temples.filter(temple => temple.dedicated.split(",")[0] > 2000));
                break;

            case "large":
                renderCards(temples.filter(temple => temple.area > 90000));
                break;

            case "small":
                renderCards(temples.filter(temple => temple.area < 10000));
                break;
        }
    });
});