# 代码规范

> 强烈建议开发人员遵循这些指南，以帮助提高源代码的可读性并简化软件维护。编码约定仅适用于软件项目的人工维护人员和同行评审人员。

**###### 代码缩进统一采用 4 个半角空格 ######**
**###### 始终将你的代码置于立即执行函数中 ######**

```js
(function() {
    // Your code goes here
});

(() => {
    // Yours code goes here
});
```

## 命名规范

1. 类名使用 UpperCamelCase 风格，必须遵从驼峰形式

```js
class Book {
    // Your code goes here
}

class MyBook {
    // Your code goes here
}


class MyFavoriteBook {
    // Your code goes here
}
```

2. 方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风格，必须遵从驼峰形式

```js
let name = 'Alice';
let userId = 1;
let isAJunior = true;
```

3. 常量命名全部大写，单词间用下划线隔开，要求语义表达清楚

```js
let MAX_USER_COUNT = 1000; // 最大用户数
let MAX_COUNT = 1000; // 错误示例，语义不清
```

4. 除 JQuery, React 等第三方库的习惯性用法外，命名均不能以下划线或美元符号开始，也不能以下划线或美元符号结束

5. 不要使用 `i , j , k` 作为变量名，除非变量在 `for` 或 `for in` 语句中用作计数器或索引器，避免使用 `temp` 等语义不明的变量除非它真的一点也不重要

## 用法规范

1. 所有以右括号 `)` 结尾的语句，都应该加上 `;`（事实上所有语句应当以 `;` 结尾）

```js
(function() {
    // Your code goes here
});

setTimeout(function() {
    // Your code goes here
});

document.addEventListener(function(event) {
    // Your code goes here
});
```

2. 左括号和后一个字符之间不出现空格；同样，右括号和前一个字符之间也不出现空格

```js
if(true) {}; // 规范
if( true ) {}; // 不规范
```

3. `if/for/while/switch/do` 等保留字与左右括号之间都必须加空格

5. 大括号的使用约定。如果是大括号内为空，则简洁地写成 {} 即可，不需要换行；如果是非空代码块则：1）左大括号前不换行。2）左大括号后换行。3）右大括号前换行。4）右大括号后还有 `else` 等代码则不换行；表示终止右大括号后必须换行。左括号和后一个字符之间不出现空格，右括号和前一个字符之间也不出现空格。

```js
let key = {};

if (true) {
    // Your code goes here
} else if (true) {
    // Your code goes here
} else {
    // Your code goes here
}
```

6. 方法参数在定义和传入时，多个参数逗号后边必须加空格

```js
function setValue (key, value) {
    // Your code goes here
}

setValue("name", "Alice");
```

7. 任何运算符左右必须加一个空格

8. 不要使用  `x == true` 或 `x == false` 进行比较。而是使用 `(x)` 或 `(!x)`

9. 使用 `[value1, value2]` 创建一个 JavaScript 数组，而不使用 `new Array(value1, value2)`

```js
let bookList = [ "book1", "book2" ]; // 正确用法
let animals = new Array("cat", "dog"); // 不那么正确的用法
```

10. 使用 `{ member: value, Your code goes here }` 的形式来创建一个 JavaScript 对象，而不使用 `new Object()`

```js
let cat = { name: "yuki", age: 1 }; // 正确用法
let dog = new Object(); // 不那么正确的用法
```

11. 确保代码不会产生 strict JavaScript 警告，如重复的变量定义、未声明的变量或成员和混合使用 `return` 和  `return value` 等

## 注释规范

1. 类、类属性、方法的注释必须使用 javadoc 规范，使用 /** content */ 格式

```js
/**
 * Create a specific animaion
 * 
 * @param {Element} ele The element to execute animation.
 * @param {{properties: ({}), duration?: (string|number), easing?: (string), easings?: ([string]), start?: (Function), complete? : (Function)}} options Parameters to initial animation.
 *   properties=: An object of CSS properties and values that the animation will move toward.
 *   duration=: A string or number determining how long the animation will run. default: 400.
 *   easing=: A string indicating which easing function to use for the transition. default: 'linear'.
 *   easings=: A series strings in array indicating which easing function to use for the transition. default: [].
 *   start=? A function to call when the animation on an element begins.
 *   complete=? A function to call once the animation is complete.
 *   cycle=? If the animate is cycle.
 * @returns Return while there are something not match.
 */
function animate(ele, options) {
    // Your code goes here
}
```

2. 方法内部单行注释，在被注释语句上方另起一行，使用//注释。方法内部多行注释使用/* */注释，注意与代码对齐。

```js
// Name of the book
let bookName = "Alice's Dream"; 

function getBook () {
    /*
     comment 1
     comment 2
    */
}
```