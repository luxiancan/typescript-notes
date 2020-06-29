// 泛型 Generics

export {} // 确保跟其他示例没有成员冲突

/* 以函数为例，泛型就是在声明某个函数时不指定具体的类型，在调用时再传递具体的类型
就是，把我们定义时不能明确的类型，变成一个参数，让我们在使用时再传递这个类型参数 */


// before 没有使用泛型
function createNumberArray (length: number, value: number): number[] {
    const arr = new Array<number>(length).fill(value);
    return arr;
}

// 只能用来创建 number 类型的数组
// const res = createNumberArray(3 ,100);
// res => [100, 100, 100];

// 如果还需要创建 string 类型的数组，笨一点的方式就是再创建一个函数，类型改为 string 。。。
function createStringArray (length: number, value: string): string[] {
    const arr = new Array<string>(length).fill(value);
    return arr;
}


// after 使用泛型
function createArray<T> (length: number, value: T): T[] {
    const arr = new Array<T>(length).fill(value);
    return arr;
}

const res1 = createArray<number>(3, 100);
const res2 = createArray<string>(3, 'value');