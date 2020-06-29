// Class 类的访问修饰符

export {} // 确保跟其他示例没有成员冲突

/* 类的访问修饰符，可以控制类的成员的可访问级别
- public : 共有的，默认值
- private : 私有的，只能在当前类的内部访问
- protected : 受保护的，只能在当前类的内部和子类访问
- readonly : 只读属性 */

class Person {
    public name: string; // = 'init name'
    private age: number;
    protected gender: boolean;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
        this.gender = true;
    }

    sayHi (msg: string): void {
        console.log(`I am ${this.name}, ${msg}`);
        console.log(this.age);
    }
}

class Student extends Person {
    private constructor (name: string, age: number) {
        super(name, age);
        console.log(this.gender);
    }

    static create (name: string, age: number) {
        return new Student(name, age);
    }
}

const tom = new Person('tom', 18);
console.log(tom.name);
// console.log(tom.age);
// console.log(tom.gender);

// Student 的构造函数为私有的，不能在类的外部 new
// const jack = new Student('jack', 20);
const jack = Student.create('jack', 20);
