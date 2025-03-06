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
    "Harari": "https://en.wikipedia.org/wiki/Harari_people"
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
    document.body.style.backgroundImage = "url('https://example.com/default-background.jpg')"; // Replace with a real image URL
}