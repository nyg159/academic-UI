class Car{

    constructor(name, speed){
        this.name = name;
        this.speed = speed;

    }
    
    show() {
        return `${this.name} (${this.speed} km/h)`;
    }


}