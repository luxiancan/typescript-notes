// 类型断言 Type assertions

export {} // 确保跟其他示例没有成员冲突

// 假定这个 nums 来自一个明确的接口
const nums = [110, 120, 119, 112];

const res = nums.find(i => i > 0);

// const square = res * res; // Object is possibly 'undefined'

// 使用断言，明确告诉 TS ，这个变量一定是 number 类型的
const num1 = res as number; // 推荐写法

const num2 = <number>res; // JSX 下不能使用，跟标签的语法冲突
