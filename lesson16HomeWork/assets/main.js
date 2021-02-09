function Student(name, surname, bday) {
    this.name = name;
    this.surname = surname;
    this.bday = bday;
    this.attendance = new Array(30);
    this.score = new Array(30);

}

Student.prototype = {
    studentAge() {
        return (new Date).getFullYear() - this.bday;
    },
    present() {
        function findEmptyElement(item) {
            return item === undefined;
        }
        const indexEmptyElement = this.attendance.findIndex(findEmptyElement);
        if (indexEmptyElement !== -1) {
            this.attendance[indexEmptyElement] = true;
        }
        return this.attendance
    },
    absent() {
        function findEmptyElement(item) {
            return item === undefined;
        }
        const indexEmptyElement = this.attendance.findIndex(findEmptyElement);
        if (indexEmptyElement !== -1) {
            this.attendance[indexEmptyElement] = false;
        }
        return this.attendance
    },
    mark(point) {
        function findEmptyElement(item) {
            return item === undefined;
        }
        const indexEmptyElement = this.score.findIndex(findEmptyElement);
        this.score[indexEmptyElement] = point;
        return this.score
    },
    summary() {
        const sumScore = this.score.reduce(function (point, current) {

            return point + current
        }, 0)

        const middleScore = sumScore / this.score.length;

        const presence = this.attendance.filter(function (item) {

            return item === true
        }, 0)

        const studentAttendance = presence.length / this.attendance.length

        if (middleScore > 9 && studentAttendance > 0.9) {

            return 'Ути какой молодчинка!'
        } else if (middleScore <= 9 && studentAttendance <= 0.9) {

            return 'Редиска!'
        } else {

            return 'Норм, но можно лучше'
        }
    },
}


const ivan = new Student('Ivan', 'Ivanov', 1980);
const nata = new Student('Nata', 'Petrova', 1999);
const pavel = new Student('Pavel', 'Trudovoy', 2005);
console.log(ivan);
console.log(nata);
console.log(pavel);