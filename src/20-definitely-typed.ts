// 类型声明 declare

/* 很多第三方类库并不一定通过 TS 编写，所以他提供的成员就不会有强类型的特性。
如果想使用强类型的特性，可以尝试安装类库的类型声明模块 (@types/lodash)
再或者，类库内部已经实现了类型声明，直接安装就有强类型的开发体验 (query-string) */

import { camelCase } from 'lodash';
import qs from 'query-string';

// 如果都不行，也可以单独的进行类型声明
// declare function camelCase (input: string): string;

const res = camelCase('hello typed');

qs.parse('?key=value&key2=value2');

export {} // 确保跟其他示例没有成员冲突