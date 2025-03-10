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
    "Kambaata": "https://en.wikipedia.org/wiki/Kambaata_people",
    "Agew": "https://en.wikipedia.org/wiki/Agew_people",
    "Benishangul": "https://en.wikipedia.org/wiki/Benishangul_people",
    "Silt'e": "https://en.wikipedia.org/wiki/Silt%27e_people",
    "Karo": "https://en.wikipedia.org/wiki/Karo_people",
    "Nuer": "https://en.wikipedia.org/wiki/Nuer_people",
    "Shanqella": "https://en.wikipedia.org/wiki/Shanqella_people",
    "Berta": "https://en.wikipedia.org/wiki/Berta_people",
    "Anuak": "https://en.wikipedia.org/wiki/Anuak_people",
    "Dizi": "https://en.wikipedia.org/wiki/Dizi_people",
    "Suri": "https://en.wikipedia.org/wiki/Suri_people",
    "Mursi": "https://en.wikipedia.org/wiki/Mursi_people",
    "Bodi": "https://en.wikipedia.org/wiki/Bodi_people",
    "Kwegu": "https://en.wikipedia.org/wiki/Kwegu_people",
    "Nyangatom": "https://en.wikipedia.org/wiki/Nyangatom_people",
    "Konkombu": "https://en.wikipedia.org/wiki/Konkombu_people",
    "Maale": "https://en.wikipedia.org/wiki/Maale_people",
    "Tsemay": "https://en.wikipedia.org/wiki/Tsemay_people",
    "Omo": "https://en.wikipedia.org/wiki/Omo_people",
    "Ethiopian Jews": "https://en.wikipedia.org/wiki/Ethiopian_Jews",
    "Gedeo": "https://en.wikipedia.org/wiki/Gedeo_people",
    "Arsi": "https://en.wikipedia.org/wiki/Arsi_people",
    "Borana": "https://en.wikipedia.org/wiki/Borana_people",
    "Fuga": "https://en.wikipedia.org/wiki/Fuga_people",
    "Jebena": "https://en.wikipedia.org/wiki/Jebena_people",
    "Macho": "https://en.wikipedia.org/wiki/Macho_people",
    "Dawro": "https://en.wikipedia.org/wiki/Dawro_people",
    "Kambata": "https://en.wikipedia.org/wiki/Kambata_people",
    "Hamar": "https://en.wikipedia.org/wiki/Hamar_people",
    "Bale": "https://en.wikipedia.org/wiki/Bale_people",
    "Wolayta": "https://en.wikipedia.org/wiki/Wolayta_people",
    "Afar": "https://en.wikipedia.org/wiki/Afar_people",
    "Gurage": "https://en.wikipedia.org/wiki/Gurage_people",
    "Mursi": "https://en.wikipedia.org/wiki/Mursi_people",
    "Somali": "https://en.wikipedia.org/wiki/Somali_people",
    "Sidama": "https://en.wikipedia.org/wiki/Sidama_people",
    "Tigray": "https://en.wikipedia.org/wiki/Tigrayans",
    "Agew": "https://en.wikipedia.org/wiki/Agew_people",
    "Konkombu": "https://en.wikipedia.org/wiki/Konkombu_people",
    "Oromo": "https://en.wikipedia.org/wiki/Oromo_people",
    "Berta": "https://en.wikipedia.org/wiki/Berta_people",
    "Dizi": "https://en.wikipedia.org/wiki/Dizi_people",
    "Silt’e": "https://en.wikipedia.org/wiki/Silt%27e_people",
    "Karo": "https://en.wikipedia.org/wiki/Karo_people",
    "Gamo": "https://en.wikipedia.org/wiki/Gamo_people",
    "Harari": "https://en.wikipedia.org/wiki/Harari_people",
    "Kambata": "https://en.wikipedia.org/wiki/Kambata_people",
    "Dawro": "https://en.wikipedia.org/wiki/Dawro_people",
    "Fuga": "https://en.wikipedia.org/wiki/Fuga_people",
    "Suri": "https://en.wikipedia.org/wiki/Suri_people",
    "Nuer": "https://en.wikipedia.org/wiki/Nuer_people",
    "Tsemay": "https://en.wikipedia.org/wiki/Tsemay_people",
    "Maale": "https://en.wikipedia.org/wiki/Maale_people",
    "Shanqella": "https://en.wikipedia.org/wiki/Shanqella_people",
    "Gedeo": "https://en.wikipedia.org/wiki/Gedeo_people"
};

// Populate dropdown
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

// Fetch dictionary definition from Wikipedia
async function searchDictionary() {
    let word = document.getElementById("searchWord").value.trim();
    let resultElement = document.getElementById("dictionaryResult");

    if (!word) {
        resultElement.textContent = "Please enter a word.";
        return;
    }

    const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(word)}`;

    try {
        let response = await fetch(wikiUrl);
        let data = await response.json();

        if (data.type === "disambiguation" || !data.extract) {
            resultElement.textContent = "No clear definition found. Try another word.";
        } else {
            resultElement.textContent = data.extract;
        }
    } catch (error) {
        resultElement.textContent = "Error fetching definition. Try again.";
    }
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
    document.body.style.backgroundImage = "url('https
