interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    location: 'California'
};

const studentsList: Array<Student> = [student1, student2];
