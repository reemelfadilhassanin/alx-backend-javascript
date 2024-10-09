// Subject.ts

namespace Subjects {
    export class Subject {
        teacher!: Teacher; // Implementing the Teacher interface

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}
