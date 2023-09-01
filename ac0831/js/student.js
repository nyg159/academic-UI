class Student{

    constructor(name, score){
        this.name = name;
        this.score = score;
    }

    show(){
        return `${this.name} (${this.score} 점)`;
    }


}