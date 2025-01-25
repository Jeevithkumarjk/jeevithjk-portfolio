const previewDocument = (projectId, type) => {
    const baseUrl = ""; // Replace with your actual base URL
    let fileName = '';

    switch (projectId) {
        case 'autonomousShuttle':
            fileName = type === 'report' ? 'Autonomous-shuttle-report.pdf' : '';
            break;
        case 'circularFooting':
            fileName = type === 'report' ? 'Report of Experimental Investigation on Behavior of Circular Footing.pdf' : '';
            break;
        case 'roadSafety':
            fileName = type === 'report' ? 'Report on Road Condition and Safety of Road.pdf' : '';
            break;
        case 'plasticRoads':
            fileName = type === 'abstract' ? 'plastic road abstract.pdf' : '';
            break;
        default:
            console.error('Invalid project ID or type');
            return;
    }

    if (fileName) {
        const fileUrl = `${fileName}`;
        window.open(fileUrl, '_blank');
    } else {
        console.error('File not found for the given project ID and type');
    }
};

const previewWebsite = (projectId) => {
    let websiteUrl = '';

    switch (projectId) {
        case 'autonomousShuttle':
            websiteUrl = 'https://jeevithkumarjk2001.wixsite.com/mysite';
            break;
        default:
            console.error('Website not available for the given project ID');
            return;
    }

    if (websiteUrl) {
        window.open(websiteUrl, '_blank');
    } else {
        console.error('Website URL not found for the given project ID');
    }
};

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.preview-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.closest('.project-card').id;
            const type = button.classList.contains('report-btn') ? 'report' : 
                         button.classList.contains('abstract-btn') ? 'abstract' : '';
            
            if (button.classList.contains('website-btn')) {
                previewWebsite(projectId);
            } else {
                previewDocument(projectId, type);
            }
        });
    });
});
