interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface PrintTeacherFunction {
    firstName: string;
    lastName: string;
}

function printTeacher(teacher: PrintTeacherFunction): string {
    return `${teacher.firstName.charAt(0)}. ${teacher.lastName}`;
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}