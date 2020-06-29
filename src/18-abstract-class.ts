// 抽象类 abstract

export {} // 确保跟其他示例没有成员冲突

/* 抽象类: abstract 关键字，本身不能执行 new 去创建实例，只能让子类去继承 */
abstract class Animal {
    eat (food: string): void {
        console.log(`呼噜呼噜的吃: ${food}`);
    }
    abstract run (distance: number): void
}

// const dog = new Animal(); // Cannot create an instance of an abstract class.

class Dog extends Animal {
    run(distance: number): void {
        console.log('四角爬行', distance);
    }
}

const d = new Dog();
d.eat('exb');
d.run(100);
