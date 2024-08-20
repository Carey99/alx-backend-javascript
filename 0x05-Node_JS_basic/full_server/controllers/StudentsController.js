import { readDatabase } from '../utils.js';

class StudentsController {
    static async getAllStudents(req, res) {
        const filePath = process.argv[2];

        try {
            const students = await readDatabase(filePath);
            res.status(200).send(
                `This is the list of our students\n${Object.keys(students)
                    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
                    .map(field => `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`)
                    .join('\n')}`
            );
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const filePath = process.argv[2];
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        try {
            const students = await readDatabase(filePath);
            res.status(200).send(`List: ${students[major].join(', ')}`);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;
