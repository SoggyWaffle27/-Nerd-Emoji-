const modeSwitcher = document.getElementById('modeSwitcher');
const body = document.body;

modeSwitcher.addEventListener('click', () => {
    // Toggle the dark mode class on the body element
    body.classList.toggle('dark-mode');

    // Update button text based on current mode
    if (body.classList.contains('dark-mode')) {
        modeSwitcher.textContent = 'Light Mode'; 
    } else {
        modeSwitcher.textContent = 'Dark Mode';
    }
});

// Function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
} 

// Get the info parameter 
const info = getQueryParam('info');

// Map of info to titles, paragraphs, images, and downloadable files
const contentMap = {
    "Image Replacement": {
        title: "Silly Image Overlay",
        paragraph: "This chrome extension applies silly images overtop of any google search image or youtube thumbnail. The instructions for installation are linked below",
        image: "Images/ReplaceCover.png",
        file: "Downloads/ImageReplacement.zip", // Path to the downloadable file,
        link: "https://www.youtube.com/watch?v=XEiswpJjNnM"
    },
    "Fake Captcha Test": {
        title: "Fake Captcha Test",
        paragraph: "This chrome extension replaces the google newtab page with a fake captcha test. The tests varry from really realistic to absolutly absurd! On top of this, the test doesnt even check what the user inputs, so they will only be able to succeed at random.",
        image: "Images/CaptchaCover.png",
        file: "Downloads/Captcha-Redirect.zip", // Path to the downloadable file,
        link: "https://www.youtube.com/watch?v=sgmiIkoIt4I"
    },
    "Redacted Information": {
        title: "Redacted [Beta]",
        paragraph: "This chrome extension 'redacts' information on almost any website! It takes any html with the <p> tag and replaces a random amount of words in that text with 'REDACTED', to mess with the user.",
        image: "Images/RedactedCover.png",
        file: "Downloads/RedactedBeta.zip", // Path to the downloadable,
        link: "https://www.youtube.com/watch?v=sgmiIkoIt4I"
    },
};

// Get elements
const titleElement = document.getElementById('page-title');
const contentElement = document.getElementById('page-content');
const imageElement = document.getElementById('dynamic-image');
const downloadButton = document.getElementById('download-button');
const ytButton = document.getElementById('youtube-button');

// Update content based on info parameter
if (info && contentMap[info]) {
    const content = contentMap[info];
    titleElement.textContent = content.title;
    contentElement.textContent = content.paragraph;
    imageElement.src = content.image;
    imageElement.style.display = "block"; // Show the image

    // Update the download button
    downloadButton.href = content.file;
    downloadButton.download = content.file.split('/').pop(); // Set the file name for download
    downloadButton.textContent = `Download ${content.title} File`;
    downloadButton.style.display = "inline-block"; // Show the button

    ytButton.href = content.link;
    //downloadButton.download = content.link.split('/').pop(); // Set the file name for download
    ytButton.textContent = `Youtube Tourtorial`;
    ytButton.style.display = "inline-block"; // Show the button
} else {
    titleElement.textContent = "Default Title";
    contentElement.textContent = "Default paragraph content for unrecognized info.";
    imageElement.style.display = "none"; // Hide the image
    downloadButton.style.display = "none"; // Hide the download button
}