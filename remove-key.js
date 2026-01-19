const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const subdirs = fs.readdirSync(localesDir);

subdirs.forEach(subdir => {
    const filePath = path.join(localesDir, subdir, 'translation.json');
    if (fs.existsSync(filePath)) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const json = JSON.parse(content);

            if (json.home && json.home.whyChoose && json.home.whyChoose.trustedBy) {
                delete json.home.whyChoose.trustedBy;
                fs.writeFileSync(filePath, JSON.stringify(json, null, 4));
                console.log(`Removed trustedBy from ${subdir}`);
            } else {
                console.log(`Key not found in ${subdir}`);
            }
        } catch (e) {
            console.error(`Error processing ${subdir}:`, e.message);
        }
    }
});
