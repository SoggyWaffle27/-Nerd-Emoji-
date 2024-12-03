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
        title: "Title1",
        paragraph: "Paragraph 1",
        image: "Images/ReplaceCover.png",
        file: "Downloads/ImageReplacement.zip" // Path to the downloadable file
    },
    "Fake Captcha Test": {
        title: "Title2",
        paragraph: "Paragraph 2",
        image: "Images/CaptchaCover.png",
        file: "Downloads/Captcha-Redirect.zip" // Path to the downloadable file
    },
    "Redacted Information": {
        title: "Title3",
        paragraph: "Paragraph 3",
        image: "Images/RedactedCover.png",
        file: "Downloads/RedactedBeta.zip" // Path to the downloadable file
    },
};

// Get elements
const titleElement = document.getElementById('page-title');
const contentElement = document.getElementById('page-content');
const imageElement = document.getElementById('dynamic-image');
const downloadButton = document.getElementById('download-button');

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
} else {
    titleElement.textContent = "Default Title";
    contentElement.textContent = "Default paragraph content for unrecognized info.";
    imageElement.style.display = "none"; // Hide the image
    downloadButton.style.display = "none"; // Hide the download button
}