import fs from 'fs/promises';

export async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const students = data.split('\n').filter(line => line).slice(1);
        const studentGroups = {};

        for (const student of students) {
            const [firstname, , field] = student.split(',');
            if (!studentGroups[field]) {
                studentGroups[field] = [];
            }
            studentGroups[field].push(firstname);
        }

        return studentGroups;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = readDatabase;
