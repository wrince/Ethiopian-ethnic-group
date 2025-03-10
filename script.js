const ethnicGroups = {
    "Amhara": "https://en.wikipedia.org/wiki/Amhara_people",
    "Oromo": "https://en.wikipedia.org/wiki/Oromo_people",
    "Tigray": "https://en.wikipedia.org/wiki/Tigrayans",
    "Somali": "https://en.wikipedia.org/wiki/Somali_people",
    "Afar": "https://en.wikipedia.org/wiki/Afar_people",
    "Sidama": "https://en.wikipedia.org/wiki/Sidama_people",
    "Gurage": "https://en.wikipedia.org/wiki/Gurage_people",
    "Wolayta": "https://en.wikipedia.org/wiki/Wolayta_people",
    "Hadiya": "https://en.wikipedia.org/wiki/Hadiya_people",
    "Gamo": "https://en.wikipedia.org/wiki/Gamo_people",
    "Harari": "https://en.wikipedia.org/wiki/Harari_people",
    "Benshangul": "https://en.wikipedia.org/wiki/Benshangul_Gumuz_people",
    "Kambaata": "https://en.wikipedia.org/wiki/Kambaata_people",
    "Kefficho": "https://en.wikipedia.org/wiki/Kefficho_people",
    "Gedeo": "https://en.wikipedia.org/wiki/Gedeo_people",
    "Argobba": "https://en.wikipedia.org/wiki/Argobba_people",
    "Silt’e": "https://en.wikipedia.org/wiki/Silt%E2%80%99e_people",
    "Borana": "https://en.wikipedia.org/wiki/Borana_people",
    "Guji": "https://en.wikipedia.org/wiki/Guji_people",
    "Burji": "https://en.wikipedia.org/wiki/Burji_people",
    "Dawro": "https://en.wikipedia.org/wiki/Dawro_people",
    "Konso": "https://en.wikipedia.org/wiki/Konso_people",
    "Anuak": "https://en.wikipedia.org/wiki/Anuak_people",
    "Berta": "https://en.wikipedia.org/wiki/Berta_people",
    "Mursi": "https://en.wikipedia.org/wiki/Mursi_people",
    "Nuer": "https://en.wikipedia.org/wiki/Nuer_people",
    "Hamar": "https://en.wikipedia.org/wiki/Hamar_people",
    "Maale": "https://en.wikipedia.org/wiki/Maale_people",
    "Karo": "https://en.wikipedia.org/wiki/Karo_people",
    "Suri": "https://en.wikipedia.org/wiki/Suri_people",
    "Shanqilla": "https://en.wikipedia.org/wiki/Shanqilla_people",
    "Tama": "https://en.wikipedia.org/wiki/Tama_people",
    "Mao": "https://en.wikipedia.org/wiki/Mao_people",
    "Zayse": "https://en.wikipedia.org/wiki/Zayse_people",
    "Konta": "https://en.wikipedia.org/wiki/Konta_people",
    "Bench": "https://en.wikipedia.org/wiki/Bench_people",
    "Walayta": "https://en.wikipedia.org/wiki/Walayta_people",
    "Adere": "https://en.wikipedia.org/wiki/Adere_people",
    "Afroasiatic": "https://en.wikipedia.org/wiki/Afroasiatic_peoples",
    "Saho": "https://en.wikipedia.org/wiki/Saho_people",
    "Tigrigna": "https://en.wikipedia.org/wiki/Tigrigna_people",
    "Amahara": "https://en.wikipedia.org/wiki/Amhara_people",
    "Beni": "https://en.wikipedia.org/wiki/Beni_people",
    "Zayse": "https://en.wikipedia.org/wiki/Zayse_people",
    "Bafanji": "https://en.wikipedia.org/wiki/Bafanji_people",
    "Bodi": "https://en.wikipedia.org/wiki/Bodi_people",
    "Cheha": "https://en.wikipedia.org/wiki/Cheha_people",
    "Dizi": "https://en.wikipedia.org/wiki/Dizi_people",
    "Bena": "https://en.wikipedia.org/wiki/Bena_people",
    "Chepen": "https://en.wikipedia.org/wiki/Chepen_people",
    "Mareko": "https://en.wikipedia.org/wiki/Mareko_people",
    "Kachama": "https://en.wikipedia.org/wiki/Kachama_people",
    "Gochama": "https://en.wikipedia.org/wiki/Gochama_people",
    "Odo": "https://en.wikipedia.org/wiki/Odo_people"
};

// Populate dropdown on window load
window.onload = function() {
    const select = document.getElementById("ethnicSelect");
    Object.keys(ethnicGroups).forEach(group => {
        let option = document.createElement("option");
        option.value = group;
        option.textContent = group;
        select.appendChild(option);
    });
};

// Open ethnic group Wikipedia page
function openEthnicGroupWebsite() {
    const selectedGroup = document.getElementById("ethnicSelect").value;
    if (selectedGroup && ethnicGroups[selectedGroup]) {
        window.open(ethnicGroups[selectedGroup], "_blank");
    }
}

// Redirect to Google search for the dictionary word
function searchDictionary() {
    let word = document.getElementById("searchWord").value.trim();

    if (!word) {
        alert("Please enter a word.");
        return;
    }

    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(word)}`;

    // Redirect to Google search for the word
    window.location.href = googleSearchUrl;
}

// Change background from file input
function changeBackgroundFromFile() {
    const fileInput = document.getElementById('backgroundInput');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.body.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
}

// Set a default background image
function setDefaultBackground() {
    document.body.style.backgroundImage = "url('https://example.com/default-background.jpg')"; // Replace with a real image URL
}
