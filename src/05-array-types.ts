// Array 类型

export {}; // 确保跟其他示例没有成员冲突

const arr1: Array<number> = [1, 2, 3];

const arr2: number[] = [1, 2, 3];

// ===========================================

function sum (...args: number[]) {
    // 判断每个成员是不是都是数字
    return args.reduce((acc, cur) => acc + cur);
}

sum(1, 2, 3);