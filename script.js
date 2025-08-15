const moodSelector = document.getElementById('moodSelector');
const quoteDisplay = document.getElementById('quoteDisplay');

const quotes = {
    happy: [
        "Happiness is a journey, not a destination.",
        "Smile, and the world smiles with you.",
        "Be happy with what you have while working for what you want."
    ],
    sad: [
        "It's okay to feel sad. Healing takes time.",
        "Tears are words that need to be written.",
        "Sadness flies away on the wings of time."
    ],
    motivated: [
        "Push yourself, because no one else is going to do it for you.",
        "Dream big and dare to fail.",
        "Great things never come from comfort zones."
    ],
    calm: [
        "Breathe in peace, breathe out stress.",
        "Calmness is the cradle of power.",
        "Peace comes from within."
    ]
};

// Load last mood from localStorage
if(localStorage.getItem("mood")) {
    document.body.className = localStorage.getItem("mood");
    const mood = localStorage.getItem("mood");
    quoteDisplay.textContent = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
    moodSelector.value = mood;
}

moodSelector.addEventListener('change', function() {
    const mood = moodSelector.value;
    document.body.className = mood;
    if (quotes[mood]) {
        quoteDisplay.textContent = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
        localStorage.setItem("mood", mood);
    } else {
        quoteDisplay.textContent = "Select a mood to see a quote.";
        localStorage.removeItem("mood");
    }
});
