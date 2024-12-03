// Function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the info parameter
const info = getQueryParam('info');

// Map of info to titles, paragraphs, and images
const contentMap = {
    "Image Replacement": {
        title: "Title1",
        paragraph: "Paragraph 1",
        image: "image-replacement.jpg" // Path to the image
    },
    "Fake Captcha Test": {
        title: "Title2",
        paragraph: "Paragraph 2",
        image: "fake-captcha.jpg" // Path to the image
    },
    "Redacted Information": {
        title: "Title3",
        paragraph: "Paragraph 3",
        image: "redacted-info.jpg" // Path to the image
    },
};

// Get elements
const titleElement = document.getElementById('page-title');
const contentElement = document.getElementById('page-content');
const imageElement = document.getElementById('dynamic-image');

// Update content based on info parameter
if (info && contentMap[info]) {
    titleElement.textContent = contentMap[info].title;
    contentElement.textContent = contentMap[info].paragraph;
    imageElement.src = contentMap[info].image;
    imageElement.style.display = "block"; // Show the image
} else {
    titleElement.textContent = "Default Title";
    contentElement.textContent = "Default paragraph content for unrecognized info.";
    imageElement.style.display = "none"; // Hide the image
}