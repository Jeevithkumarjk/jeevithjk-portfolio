function previewReport() {
    window.open('https://drive.google.com/file/d/1QecZDkKMXy9EL7zC_wuX7PdIY-VPvddT/view?usp=drive_link', '_blank');
}

function previewPhotos() {
    window.open('https://drive.google.com/drive/folders/17TUNkg6nwWq76RprUwvKcvlWVY9Me8xM?usp=sharing', '_blank');
}

function previewAllCertificates() {
    const certificateLinks = [
        'https://drive.google.com/drive/folders/1iu6DegIx23SkB_jMFupm0RfLIP-DvsJg?usp=drive_link'
    ];
    
    certificateLinks.forEach(link => window.open(link, '_blank'));
}
