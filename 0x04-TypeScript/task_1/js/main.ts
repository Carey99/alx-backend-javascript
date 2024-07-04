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
    