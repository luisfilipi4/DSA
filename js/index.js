function checkConsent() {
    return "accepted" === localStorage.getItem("cookieConsent");
}

function setCookieConsent(consent) {
    localStorage.setItem("cookieConsent", consent);
}

function showCookieBanner() {
    if (!checkConsent()) {
        document.getElementById("cookie-banner").classList.add("show");
    }
}

function acceptCookies() {
    setCookieConsent("accepted");
    hideCookieBanner();
}

function rejectCookies() {
    setCookieConsent("rejected");
    hideCookieBanner();
}

function hideCookieBanner() {
    document.getElementById("cookie-banner").classList.remove("show");
}

setTimeout(showCookieBanner, 1000);

document.addEventListener("DOMContentLoaded", () => {
    let categoryButtons = document.querySelectorAll(".category-button");
    let modelItems = document.querySelectorAll(".model-item");
    let desktopView = document.getElementById("desktop-view");
    let mobileView = document.getElementById("mobile-view");

    function filterItems(category) {
        modelItems.forEach(item => {
            if (category === "all" || item.getAttribute("data-category") === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    function toggleView(view) {
        if (view === "desktop") {
            desktopView.classList.add("active");
            mobileView.classList.remove("active");
            if (window.innerWidth <= 768) {
                document.querySelectorAll(".model-item").forEach(item => {
                    item.querySelector(".desktop-view").style.display = "none";
                    item.querySelector("iframe").style.display = "none";
                    item.querySelector(".model-video").style.display = "block";
                });
            } else {
                document.querySelectorAll(".model-item").forEach(item => {
                    item.querySelector(".desktop-view").style.display = "block";
                    item.querySelector("iframe").style.display = "none";
                    item.querySelector(".model-video").style.display = "none";
                });
            }
        } else if (view === "mobile") {
            mobileView.classList.add("active");
            desktopView.classList.remove("active");
            document.querySelectorAll(".model-item").forEach(item => {
                item.querySelector(".desktop-view").style.display = "none";
                item.querySelector("iframe").style.display = "block";
                item.querySelector(".model-video").style.display = "none";
            });
        }
    }

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            let category = button.getAttribute("data-category");
            filterItems(category);
        });
    });

    desktopView.addEventListener("click", () => toggleView("desktop"));
    mobileView.addEventListener("click", () => toggleView("mobile"));

    filterItems("all");
    toggleView("desktop");

    window.addEventListener("resize", () => {
        if (desktopView.classList.contains("active")) {
            toggleView("desktop");
        } else {
            toggleView("mobile");
        }
    });
});

document.getElementById("button-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("caixa-orcamento").style.display = "block";
});

document.querySelector("#caixa-orcamento .close-btn").addEventListener("click", function() {
    document.getElementById("caixa-orcamento").style.display = "none";
});

document.getElementById("button-link-2").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("caixa-orcamento-2").style.display = "block";
});

document.querySelector("#caixa-orcamento-2 .close-btn").addEventListener("click", function() {
    document.getElementById("caixa-orcamento-2").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function() {
    let phoneNumbers = document.querySelectorAll(".phone-number");
    let popup = document.getElementById("popup");

    phoneNumbers.forEach(phone => {
        phone.addEventListener("click", function() {
            let phoneNumber = phone.textContent.trim();
            navigator.clipboard.writeText(phoneNumber).then(function() {
                let showPopup = function(message) {
                    let copiedMessage = document.getElementById("phone-number-copied");
                    copiedMessage.textContent = message;
                    popup.style.display = "block";
                    setTimeout(function() {
                        popup.style.display = "none";
                    }, 3000);
                };
                showPopup(phoneNumber);
            }).catch(function(error) {
                console.error("Erro ao copiar: ", error);
            });
        });
    });
});

var map = L.map("map").setView([-14.235004, -51.92528], 4);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var projects = [
    {type: "mobile", city: "Porto Alegre", state: "RS", lat: -30.0346, lon: -51.2177, info: "Projeto Mobile 1"},
    {type: "website", city: "Porto Alegre", state: "RS", lat: -30.0346, lon: -51.2177, info: "Projeto Website 1"},
    {type: "mobile", city: "Caxias do Sul", state: "RS", lat: -29.1682, lon: -51.1794, info: "Projeto Mobile 2"},
    {type: "website", city: "Caxias do Sul", state: "RS", lat: -29.1682, lon: -51.1794, info: "Projeto Website 2"},
    {type: "mobile", city: "Pelotas", state: "RS", lat: -31.7649, lon: -52.3377, info: "Projeto Mobile 3"},
    {type: "website", city: "Pelotas", state: "RS", lat: -31.7649, lon: -52.3377, info: "Projeto Website 3"},
    {type: "mobile", city: "Santa Maria", state: "RS", lat: -29.6866, lon: -53.8140, info: "Projeto Mobile 4"},
    {type: "website", city: "Santa Maria", state: "RS", lat: -29.6866, lon: -53.8140, info: "Projeto Website 4"},
    {type: "mobile", city: "Novo Hamburgo", state: "RS", lat: -29.6855, lon: -51.1263, info: "Projeto Mobile 5"},
    {type: "website", city: "Novo Hamburgo", state: "RS", lat: -29.6855, lon: -51.1263, info: "Projeto Website 5"},
    {type: "mobile", city: "Canoas", state: "RS", lat: -29.9189, lon: -51.1814, info: "Projeto Mobile 6"},
    {type: "website", city: "Canoas", state: "RS", lat: -29.9189, lon: -51.1814, info: "Projeto Website 6"},
    {type: "mobile", city: "Porto Alegre", state: "RS", lat: -30.0346, lon: -51.2177, info: "Projeto Mobile 7"},
    {type: "website", city: "Porto Alegre", state: "RS", lat: -30.0346, lon: -51.2177, info: "Projeto Website 7"},
    {type: "mobile", city: "Porto Alegre", state: "RS", lat: -30.0346, lon: -51.2177, info: "Projeto Mobile 8"},
    {type: "website", city: "Porto Alegre", state: "RS", lat: -30.0346, lon: -51.2177, info: "Projeto Website 8"},
    {type: "mobile", city: "Caxias do Sul", state: "RS", lat: -29.1682, lon: -51.1794, info: "Projeto Mobile 9"},
    {type: "website", city: "Caxias do Sul", state: "RS", lat: -29.1682, lon: -51.1794, info: "Projeto Website 9"},
    {type: "mobile", city: "Pelotas", state: "RS", lat: -31.7649, lon: -52.3377, info: "Projeto Mobile 10"},
    {type: "website", city: "Pelotas", state: "RS", lat: -31.7649, lon: -52.3377, info: "Projeto Website 10"},
    {type: "mobile", city: "Santa Maria", state: "RS", lat: -29.6866, lon: -53.8140, info: "Projeto Mobile 11"},
    {type: "website", city: "Santa Maria", state: "RS", lat: -29.6866, lon: -53.8140, info: "Projeto Website 11"},
    {type: "mobile", city: "Novo Hamburgo", state: "RS", lat: -29.6855, lon: -51.1263, info: "Projeto Mobile 12"},
    {type: "website", city: "Novo Hamburgo", state: "RS", lat: -29.6855, lon: -51.1263, info: "Projeto Website 12"},
    {type: "mobile", city: "Canoas", state: "RS", lat: -29.9189, lon: -51.1814, info: "Projeto Mobile 13"},
    {type: "website", city: "Canoas", state: "RS", lat: -29.9189, lon: -51.1814, info: "Projeto Website 13"},
    {type: "mobile", city: "Porto Alegre", state: "RS", lat: -30.0346, lon: -51.2177, info: "Projeto Mobile 14"},
    {type: "website", city: "Porto Alegre", state: "RS", lat: -30.0346, lon: -51.2177, info: "Projeto Website 14"},
    {type: "mobile", city: "São Paulo", state: "SP", lat: -23.5505, lon: -46.6333, info: "Projeto Mobile 15"},
    {type: "website", city: "São Paulo", state: "SP", lat: -23.5505, lon: -46.6333, info: "Projeto Website 15"},
    {type: "mobile", city: "Rio de Janeiro", state: "RJ", lat: -22.9068, lon: -43.1729, info: "Projeto Mobile 16"},
    {type: "website", city: "Curitiba", state: "PR", lat: -25.4284, lon: -49.2733, info: "Projeto Website 16"},
    {type: "mobile", city: "Salvador", state: "BA", lat: -12.9714, lon: -38.5014, info: "Projeto Mobile 17"},
    {type: "website", city: "Fortaleza", state: "CE", lat: -3.7172, lon: -38.5433, info: "Projeto Website 17"},
    {type: "mobile", city: "Belo Horizonte", state: "MG", lat: -19.9191, lon: -43.9386, info: "Projeto Mobile 18"},
    {type: "website", city: "Brasília", state: "DF", lat: -15.7801, lon: -47.9292, info: "Projeto Website 18"},
    {type: "mobile", city: "Manaus", state: "AM", lat: -3.1190, lon: -60.0217, info: "Projeto Mobile 19"},
    {type: "website", city: "Recife", state: "PE", lat: -8.0476, lon: -34.8770, info: "Projeto Website 19"},
    {type: "mobile", city: "Belém", state: "PA", lat: -1.4553, lon: -48.4902, info: "Projeto Mobile 20"},
    {type: "website", city: "São Luís", state: "MA", lat: -2.5489, lon: -44.2828, info: "Projeto Website 20"},
    {type: "mobile", city: "Goiânia", state: "GO", lat: -16.6864, lon: -49.2643, info: "Projeto Mobile 21"},
    {type: "website", city: "São José dos Campos", state: "SP", lat: -23.2237, lon: -45.9009, info: "Projeto Website 21"},
    {type: "mobile", city: "João Pessoa", state: "PB", lat: -7.1158, lon: -34.8638, info: "Projeto Mobile 22"},
    {type: "website", city: "Natal", state: "RN", lat: -5.7945, lon: -35.2110, info: "Projeto Website 22"},
    {type: "mobile", city: "Maceió", state: "AL", lat: -9.6658, lon: -35.7350, info: "Projeto Mobile 23"},
    {type: "website", city: "Aracaju", state: "SE", lat: -10.9472, lon: -37.0731, info: "Projeto Website 23"},
    {type: "mobile", city: "Teresina", state: "PI", lat: -5.0892, lon: -42.8028, info: "Projeto Mobile 24"},
    {type: "website", city: "Campo Grande", state: "MS", lat: -20.4697, lon: -54.6201, info: "Projeto Website 24"},
    {type: "mobile", city: "Cuiabá", state: "MT", lat: -15.6010, lon: -56.0979, info: "Projeto Mobile 25"},
    {type: "website", city: "Palmas", state: "TO", lat: -10.1847, lon: -48.3339, info: "Projeto Website 25"},
    {type: "mobile", city: "Porto Velho", state: "RO", lat: -8.7610, lon: -63.9003, info: "Projeto Mobile 26"},
    {type: "website", city: "Boa Vista", state: "RR", lat: 2.8230, lon: -60.6758, info: "Projeto Website 26"},
    {type: "mobile", city: "Uberlândia", state: "MG", lat: -18.9183, lon: -48.2740, info: "Projeto Mobile 27"},
    {type: "website", city: "Divinópolis", state: "MG", lat: -20.1482, lon: -44.9228, info: "Projeto Website 27"},
    {type: "mobile", city: "Juiz de Fora", state: "MG", lat: -21.7654, lon: -43.3503, info: "Projeto Mobile 28"},
    {type: "website", city: "Contagem", state: "MG", lat: -19.9312, lon: -44.0522, info: "Projeto Website 28"},
];

var icons = {
    mobile: L.icon({
        iconUrl: "icons/icons-smartphone.png",
        iconSize: [34, 34],
        iconAnchor: [10, 34],
        popupAnchor: [0, -34]
    }),
    website: L.icon({
        iconUrl: "icons/icons-website.png",
        iconSize: [34, 34],
        iconAnchor: [10, 34],
        popupAnchor: [0, -34]
    })
};

var markers = L.markerClusterGroup();
var mobileLayer = L.layerGroup();
var websiteLayer = L.layerGroup();
var latlngs = [];

projects.forEach(project => {
    var icon = project.type === "mobile" ? icons.mobile : icons.website;
    var marker = L.marker([project.lat, project.lon], { icon: icon })
        .bindPopup("<b>" + project.city + "</b><br>" + project.info + "<br><img src='image-url.jpg' alt='image' style='width: 100px; height: auto;'><br>");
    
    markers.addLayer(marker);
    latlngs.push([project.lat, project.lon]);

    if (project.type === "mobile") {
        mobileLayer.addLayer(marker);
    } else {
        websiteLayer.addLayer(marker);
    }
});

map.addLayer(markers);

var polyline = L.polyline(latlngs, { color: "blue" }).addTo(map).snakeIn();

var baseMaps = {
    "Mobile Projects": mobileLayer,
    "Website Projects": websiteLayer
};

L.control.layers(baseMaps).addTo(map);

markers.eachLayer(marker => {
    marker.on("click", function() {
        map.flyTo(marker.getLatLng(), 10, { animate: true, duration: 1.5 });
    });
});
