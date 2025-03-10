// Ethnic Groups List
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

// Populate Ethnic Group Dropdown
window.onload = function() {
    const select = document.getElementById("ethnicSelect");
    Object.keys(ethnicGroups).forEach(group => {
        let option = document.createElement("option");
        option.value = group;
        option.textContent = group;
        select.appendChild(option);
    });
};

// Open Ethnic Group Wikipedia Page
function openEthnicGroupWebsite() {
    const selectedGroup = document.getElementById("ethnicSelect").value;
    if (selectedGroup && ethnicGroups[selectedGroup]) {
        window.open(ethnicGroups[selectedGroup], "_blank");
    }
}

// Dictionary Function (Uses Google, Wikipedia, DictionaryAPI.dev)
async function searchDictionary() {
    let word = document.getElementById("searchWord").value.trim();
    let resultElement = document.getElementById("dictionaryResult");

    if (!word) {
        resultElement.textContent = "Please enter a word.";
        return;
    }

    // 1. Google Search (Oxford Dictionary)
    let googleSearchUrl = `https://www.google.com/search?q=define+${encodeURIComponent(word)}`;
    resultElement.innerHTML = `Click <a href="${googleSearchUrl}" target="_blank">here</a> for the definition on Google.`;

    // 2. Wikipedia
    const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(word)}`;
    try {
        let response = await fetch(wikiUrl);
        let data = await response.json();

        if (data.extract) {
            resultElement.innerHTML += `<br><strong>Wikipedia:</strong> ${data.extract}`;
            return;
        }
    } catch (error) {
        console.warn("Wikipedia fetch failed:", error);
    }

    // 3. DictionaryAPI.dev (No API Key Required)
    const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;
    try {
        let response = await fetch(dictionaryUrl);
        let data = await response.json();

        if (response.ok && data.length > 0) {
            let meaning = data[0].meanings[0].definitions[0].definition;
            resultElement.innerHTML += `<br><strong>Dictionary API:</strong> ${meaning}`;
            return;
        }
    } catch (error) {
        console.warn("DictionaryAPI.dev fetch failed:", error);
    }

    // If all fail
    resultElement.innerHTML += "<br>No definition found. Try another word.";
}

// Change Background from File Input
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

// Set a Default Background
function setDefaultBackground() {
    document.body.style.backgroundImage = "url('https://example.com/default-background.jpg')"; // Replace with a real image URL
        }
