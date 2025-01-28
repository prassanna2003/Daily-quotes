const quotes = [
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" }
];

// Function to generate a random quote
function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quoteText = document.getElementById("quote");
    let quoteAuthor = document.getElementById("author");

    quoteText.textContent = `"${quotes[randomIndex].text}"`;
    quoteAuthor.textContent = `- ${quotes[randomIndex].author}`;

    // Trigger fade-in animation
    quoteText.classList.remove("fade-in");
    void quoteText.offsetWidth; // Trick to restart CSS animation
    quoteText.classList.add("fade-in");
}

// Generate a quote on page load
window.onload = generateQuote;
