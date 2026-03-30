const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.innerHTML = isOpen ? '&#10005;' : '&#9776;';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.innerHTML = '&#9776;';
    });
});

//cv handling
const fileUpload = document.getElementById('file-upload');
const fileUploadName = document.getElementById('file-upload-name');
const uploadBtn = document.getElementById('upload-btn');
const downloadBtn = document.querySelector('a[href*="David-KWIZERA-CV.pdf"]');

if (uploadBtn && fileUpload) {
    uploadBtn.addEventListener('click', () => {
        fileUpload.click();
    });
}

if (fileUpload && fileUploadName) {
    fileUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            fileUploadName.textContent = `Selected file: ${file.name}`;
            // Create blob URL for download
            const blobUrl = URL.createObjectURL(file);
            downloadBtn.href = blobUrl;
            downloadBtn.download = file.name;
            downloadBtn.textContent = `Download ${file.name}`;
        } else {
            fileUploadName.textContent = 'No file selected';
            // Reset to original
            downloadBtn.href = 'media/David-KWIZERA-CV.pdf';
            downloadBtn.download = 'David-KWIZERA-CV.pdf';
            downloadBtn.textContent = 'Download CV';
        }
    });
}
