const fs = require('fs');
const path = require('path');

function addFooter(githubUsername, projectPath) {
    const footerContent = `<footer>GitHub: ${githubUsername}</footer>`;
    const footerFilePath = path.join(projectPath, 'footer.html');

    fs.writeFileSync(footerFilePath, footerContent, 'utf8');
    console.log(`Footer added to ${footerFilePath}`);
}

module.exports = addFooter;
