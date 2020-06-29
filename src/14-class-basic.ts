// 类 Class

export {} // 确保跟其他示例没有成员冲突

// 用来描述一类具体对象的抽象成员

class Person {
    name: string; // = 'init name'
    age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHi (msg: string): void {
        console.log(`I am ${this.name}, ${msg}`);
    }
}