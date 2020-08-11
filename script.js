
//Bise
class Student {
    constructor(university, course, fullName){
  this.course = course;
  this.university = university;
  this.fullName = fullName;
  this.marksAll = [5, 4, 4, 5];
  this.myStudent = true;
    };

    getInfo(){
        return (`Студент (${this.university}) ${this.course} курсу - ${this.fullName}.`);
    };

    get Marks() {
     if(this.myStudent){
        return this.marksAll;
    } else {
        return null;
    }
};

    set Marks(mark) {
     if(this.myStudent){
            this.marksAll.push(mark);
        return this.marksAll;
    } else {
         return null;
    };
};
   
    getAverageMark(){
     if(this.myStudent){
        return this.marksAll.reduce((acc , cur) => acc + cur ) / this.marksAll.length; 
    };
};

    dismiss(){
        return this.myStudent =  false;
    };
    
    recover(){
        return this.myStudent = true;
    };
};

const student1 = new Student('ЛДУВС ', "5-го ", "Демкович Дмитро ");

console.log(student1);
console.log(student1.getInfo());
console.log(student1.marksAll);
student1.Marks = 5;
console.log(student1.marksAll);
console.log(student1.getAverageMark());
console.log(student1.dismiss());
console.log(student1.recover());



//Advanced*

class BudgetStudent extends Student {
    constructor(university, course, fullName){
        super(university, course, fullName);
        setInterval(() => this.getScholarship(), 10000);
    }

  getScholarship(){
     if(this.myStudent){
        this.getAverageMark() >= 4 ;
        console.log(`Ви отримали 20 000 грн. стипендії !!!`);
     } else {
      console.log(`Ви трохи не дотягнули до степендії `);
     }
  }
};


const student2 = new BudgetStudent('НУ ЛП ', '2-го ', 'Прокопюк Андрій ');
console.log(student2);


  
