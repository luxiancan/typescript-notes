
## Build Setup

``` bash
# install dependencies
yarn

# compile typescript code in the src directory
yarn tsc
```

## TypeScript 与 JavaScript 之间的关系？

- TypeScript 是 JavaScript 的一个超集（扩展集），就是在 JS 的基础上多出一些扩展特性
- 这些扩展特性包括：强大的类型系统、对 ES6+ 的良好支持
- TS 最终会被编译为 JS 运行

## 关于 TypeScript：
- 因为 TS 最终会编译为 JS 工作，所以任何一种 JS 运行环境都支持使用 TS 做开发（浏览器应用、node应用、React Native、桌面应用）
- 作为一门完整的编程语言，功能很强大，生态也很健全、完善
- 微软自家的 VSCode 对 TS 的支持非常良好
- 目前有很多大型的开源项目开始使用 TS 进行开发了 (Angular, Vue.js3.0)
- TypeScript —— 前端领域中的第二语言


## TypeScript 优缺点：

优点：

- 使用 TS 开发中大型项目，项目代码的健壮性增强，代码错误更早暴露。
- 编辑器支持情况良好，比如：VSCode，有很多智能提示，编码更准确，提升开发效率。
- 使用 TS 的强类型特性来开发项目，可以使得项目代码重构更牢靠。
- 使用 TS 的强类型特性来编写代码，可以减少很多不必要的类型判断。
- TS 最终会被编译为 JS 运行，可以将 ES6+ 编译为ES5/ES3，兼容性好。
- TS 是渐进式的，完全可以使用 JS 编写代码，可以将新特性慢慢应用到项目中。

缺点：
- 引入了很多概念和新语法（枚举、接口、泛型等等），有一定的学习成本。
- 对于一些周期较短的小项目，会增加开发成本（项目初期需要定义很多类型声明）。
- 开发过程中遇到问题，可能相关 TS 的网上资料相比 JS 会少一些，需要花一些精力查找资料去解决问题。


## TypeScript 快速上手

**1 安装 TypeScript**

先进入你的项目根目录，然后初始化一个 package.json, 在命令窗口输入：

`yarn init --yes`

TypeScript 本身是一个 npm 模块，可以安装在项目中。这里我们使用 yarn 来安装，命令窗口输入：

`yarn add typescript --dev`

如果你使用的编辑器是 VSCode，新版默认就包含了 TypeScript 插件。


**2 创建第一个 TS 文件**

在项目根目录新建文件 `01-getting-started.ts` ，TypeScript 文件的后缀名是 .ts，输入以下内容：

```typescript
// 01-getting-started.ts
const hello = (name: string) => {
    console.log(`Hello, ${name}`);
};
hello('TypeScript');
```


**3 编译代码，转换成 JS**

在命令窗口输入：

`yarn tsc 01-getting-started.ts`

tsc 是之前安装的 typescript 模块提供的命令，表示 typescript compiler

然后在同级目录就会生成一个编译过后的 js 文件

```javascript
// 01-getting-started.js
var hello = function (name) {
    console.log("Hello, " + name);
};
hello('TypeScript');
```

可以看到，包含 ES6 新特性的代码，以及 TS 类型注解的代码，都被编译转换成 JS 了


**4 使用配置文件，编译整个项目**

创建 tsconfig.json 配置文件，命令窗口执行以下命令即可创建默认模板：

`yarn tsc --init`

打开文件，可以简单配置一下相关属性

```javascript
{
    "compilerOptions": {
        // ...
        "sourceMap": true, // 开启源代码映射，可以方便调试 TS 代码
        "outDir": "dist", // 代码编译输出的目录
        "rootDir": "src", // 源代码所在目录，也就是 typescript 代码所在文件夹
        // ...
    }
}
```

更详细的配置参考官网 https://www.tslang.cn/docs/handbook/tsconfig-json.html

根据刚刚的配置，在项目根目录创建 src 目录，然后将所有 ts 文件移动到 src 目录，然后执行：

`yarn tsc`

这个命令会让刚刚的配置文件生效，不用指定文件名，默认会编译 src 目录下所有的 ts 文件输出到 dist 目录

