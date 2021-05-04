//Object Example
let stidentId = 'student-id';
let student = {
    set score(val){
        if(Number.isNaN(val))
        {
            return; 
        }
        this._score = val;
    },
    get score(){
        return this._score;
    },
    [stidentId]: 101,
    firstName:'Deepak',
    lastName: 'Koshy',
    age:35,
    tagline: 'Be Happy',
    hobbies: ['reading', 'swimming', 'dancing'],
    getFullName: function(){
        console.log(this);
        return this.firstName + ' ' +  this.lastName
    },

    //arrow function don't change this 
    getSummary: () =>{
        console.log(this);
        console.log(`My Name is :  ${this.firstName}
          ${this.lastName} and My grade is ${this._score}`);
    },
    getHobbyDetails(){
       return this.hobbies.map((h)=>{
            return h.toUpperCase() + '- ' + this.tagline;
        });
    }
};

console.log(student.getFullName());
let { getFullName } = student;

getFullName();

getFullName.apply(student);

student.getSummary();

const hobbyDetails = student.getHobbyDetails();
console.log(hobbyDetails);

//setting and gettig Score 
student.score = 300;
console.log(student.score);

//accessing student id

console.log(student['student-id'] , student[stidentId]);
