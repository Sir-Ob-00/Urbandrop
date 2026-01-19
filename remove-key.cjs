const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const subdirs = fs.readdirSync(localesDir);

subdirs.forEach(subdir => {
    const filePath = path.join(localesDir, subdir, 'translation.json');
    if (fs.existsSync(filePath)) {
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            const originalLength = content.length;

            // Remove lines containing "trustedBy":
            const lines = content.split('\n');
            const newLines = lines.filter(line => !line.trim().startsWith('"trustedBy":'));

            if (lines.length !== newLines.length) {
                const newContent = newLines.join('\n');
                fs.writeFileSync(filePath, newContent);
                console.log(`Removed trustedBy from ${subdir} (Regex)`);
            } else {
                console.log(`Key trustedBy not found in ${subdir} (Regex)`);
            }
        } catch (e) {
            console.error(`Error processing ${subdir}:`, e.message);
        }
    }
});
