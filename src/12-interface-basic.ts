// 接口 Interfaces

export {} // 确保跟其他示例没有成员冲突

/* 可以理解为一种规范/契约
一句话总结：接口就是用来约束对象的结构 */

interface Post {
    title: string;
    content: string;
}

function printPost (post: Post) {
    console.log(post.title);
    console.log(post.content);
}

printPost({
    title: 'Hello TypeSccript',
    content: 'A JavaScript superset'
});