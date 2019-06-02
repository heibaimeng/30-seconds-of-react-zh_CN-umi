
[30-seconds-of-react](https://github.com/30-seconds/30-seconds-of-react) 项目的中文翻译版本，使用 umi.js 对所有案例进行分析、注释、上线。

共 25 个组件，目前已全部翻译完成 。

![Logo](/logo.png)

# React 30 秒速学

> 精选有用的 React 片段，你可以在30秒或更短的时间内理解。

 - 使用<kbd> Ctrl </kbd> + <kbd> F </kbd>或<kbd>command</kbd> + <kbd> F </kbd>搜索片段。
 - 欢迎贡献（原项目），请阅读<a href="https://github.com/30-seconds/30-seconds-of-react/blob/master/CONTRIBUTING.md" target="_blank">30-seconds-of-react 贡献指南</a>。
 - 片段用React 16.8+编写，充分使用 hooks 特性。

### 先决条件

要将代码段导入项目，必须导入`React`并复制粘贴组件的JavaScript代码，如下所示：

```js
import React from 'react';

function MyComponent(props) {
  /* ... */
}
```

如果有任何与您的组件相关的CSS，请将其复制粘贴到具有相同名称和相应扩展名的新文件，然后将其导入如下：

```js
import './MyComponent.css';
```

要渲染组件，请确保在元素中存在一个名为“root”的节点 ( 最好是`<div>` ) 并且导入了`ReactDOM`，如下所示：

```js
import ReactDOM from 'react-dom';
```

### umi.js 的应用

在 React 30 秒速学这个中文翻译项目里，我使用 umi.js 进行代码的学习。优势是无需定义路由，新建文件即可访问。

把示例代码跑起来：

```
yarn install
yarn dev
```

#### 相关产品

- [30 Seconds of Code](https://30secondsofcode.org)
- [30 Seconds of CSS](https://30-seconds.github.io/30-seconds-of-css/)
- [30 Seconds of Interviews](https://30secondsofinterviews.org/)

## 目录

### Array渲染数组

* [DataList渲染为列表](#DataList渲染为列表)
* [DataTable渲染为表格](#DataTable渲染为表格)
* [MappedTable渲染为映射表格](#MappedTable渲染为映射表格)


### Input输入

* [Input基础输入框](#Input基础输入框)
* [LimitedTextarea限制字符数的多行文本](#LimitedTextarea限制字符数的多行文本)
* [LimitedWordTextarea限制单词数的多行文本](#LimitedWordTextarea限制单词数的多行文本)
* [MultiselectCheckbox复选框](#MultiselectCheckbox复选框)
* [PasswordRevealer密码可见](#PasswordRevealer密码可见)
* [Select下拉选择器](#Select下拉选择器)
* [Slider滑块元素](#Slider滑块元素)
* [TextArea多行文本](#TextArea多行文本)


### Object对象渲染

* [TreeView可折叠无限层级树组件](#TreeView可折叠无限层级树组件)


### String字符串处理

* [AutoLink自动识别文本中的链接](#AutoLink自动识别文本中的链接)


### Visual视觉效果渲染

* [Accordion手风琴组件](#Accordion手风琴组件)
* [Carousel轮播组件](#Carousel轮播组件)
* [Collapse折叠面板](#Collapse折叠面板)
* [CountDown倒计时](#CountDown倒计时)
* [FileDrop文件拖放组件](#FileDrop文件拖放组件)
* [Mailto发送电子邮件](#Mailto发送电子邮件)
* [Modal模态框组件](#Modal模态框组件)
* [StarRating星级评分](#StarRating星级评分)
* [Tabs选项卡组件](#Tabs选项卡组件)
* [Ticker时间控制组件](#Ticker时间控制组件)
* [Toggle开关组件](#Toggle开关组件)
* [Tooltip提示](#Tooltip提示)


---

## Array渲染数组

### DataList渲染为列表

通过数组渲染元素列表。

* 使用 `isOrdered` prop 的值有条件地渲染`<ol>`或`<ul>`列表。
* 使用`Array.prototype.map`将`data`中的每个项目渲染为`<li>`元素，给它一个由其索引和值的串联产生的`key`。
* 默认情况下，省略 `isOrdered` prop 以渲染`<ul>`列表。

```jsx
function DataList({ isOrdered, data }) {
  const list = data.map((val, i) => <li key={`${i}_${val}`}>{val}</li>);
  return isOrdered ? <ol>{list}</ol> : <ul>{list}</ul>;
}
```

例子

```jsx
export default function() {
  const names = ['John', 'Paul', 'Mary'];
  return (
    <div>
      无序列表：
      <DataList data={names} />
      有序列表：
      <DataList data={names} isOrdered />
    </div>
  );
}
```



ps:

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Array/DataList.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Array/DataList)

### DataTable渲染为表格

通过数组渲染表格，动态创建每一行。

*渲染一个带有两列(`ID`和`Value`)的`<table>`元素。
*使用`Array.prototype.map`将`data`中的每个项目渲染为`<tr>`元素，由其索引和值组成，给它一个由两者串联产生的`key`。

```jsx
function DataTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((val, i) => (
          <tr key={`${i}_${val}`}>
            <td>{i}</td>
            <td>{val}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

例子

```jsx
export default function() {
  const people = ['John', 'Jesse'];
  return <DataTable data={people} />;
}
```


ps:

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Array/DataTable.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Array/DataTable)

### MappedTable渲染为映射表格

通过对象数组渲染表格，属性名称与列对应，动态创建每一行。

* 使用`Object.keys()`，`Array.prototype.filter()`，`Array.prototype.includes()`和`Array.prototype.reduce()`生成一个`filteredData`数组，包含所有对象 使用`propertyNames`中指定的键。
* 渲染一个`<table>`元素，其中一组列等于`propertyNames`中的值。
* 使用`Array.prototype.map`将`propertyNames`数组中的每个值渲染为`<th>`元素。
* 使用`Array.prototype.map`将`filteredData`数组中的每个对象渲染为`<tr>`元素，对象中的每个键包含一个`<td>`。

```jsx
function MappedTable({ data, propertyNames }) {
  let filteredData = data.map(v =>
    Object.keys(v)
      .filter(k => propertyNames.includes(k))
      // 使用 reduce 迭代，为 acc 对象赋值：
      // 回调函数为 (acc, key) => ((acc[key] = v[key]), acc) 初始值为 {}
      // ((操作), 返回值) 语法解读：括号里进行任意操作，并指定返回值
      .reduce(( acc, key) => ((acc[key] = v[key]), acc), {}),
  );
  return (
    <table>
      <thead>
        <tr>
          {propertyNames.map(val => (
            <th key={`h_${val}`}>{val}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((val, i) => (
          <tr key={`i_${i}`}>
            {propertyNames.map(p => (
              <td key={`i_${i}_${p}`}>{val[p]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```
#### Notes

此组件不适用于嵌套对象，如果在`propertyNames`中指定的任何属性中有嵌套对象，则会中断。

例子

```jsx
export default function() {
  const people = [
    { name: 'John', surname: 'Smith', age: 42 },
    { name: 'Adam', surname: 'Smith', gender: 'male' },
  ];
  const propertyNames = ['name', 'surname', 'age'];
  return <MappedTable data={people} propertyNames={propertyNames} />;
}
```


ps:

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Array/MappedTable.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Array/MappedTable)


## Input输入
### Input基础输入框

输入框组件，使用回调函数将其值传递给父组件。

* 使用对象解构来设置`<input>`元素的某些属性的默认值。
* 使用适当的属性渲染一个`<input>`元素，并使用`onChange`事件中的`callback`函数将输入值传递给父元素。

```jsx
function Input({ callback, type = 'text', disabled = false, readOnly = false, placeholder = '' }) {
  return (
    <input
      type={type}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      // event.target.value
      onChange={({ target: { value } }) => callback(value)}
    />
  );
}
```

例子

```jsx
export default function() {
  return <Input type="text" placeholder="Insert some text here..." callback={val => console.log(val)} />;
}
```


ps:

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Input/Input.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Input/Input)

### LimitedTextarea限制字符数的多行文本

呈现限制字符数的多行文本组件。

* 使用`React.useState()` hook 创建`content`状态变量并将其值设置为`value`。
创建一个方法`setFormattedContent`，如果它比`limit`长，它会修剪输入的内容。
* 使用`React.useEffect()` hook 来调用`content`状态变量值的`setFormattedContent`方法。
* 使用`<div>`来包装`<textarea>`和`<p>`元素，它显示字符数并绑定`<textarea>`的`onChange`事件来调用`setFormattedContent`处理 `event.target.value`的值。

参考： <a href="https://zh-hans.reactjs.org/docs/hooks-overview.html" target="_blank">hook文档</a>

```jsx
import React from "react";
function LimitedTextarea({ rows, cols, value, limit }) {
  // React.useState(初始值) 通过在函数组件里调用它，来给组件添加一些内部 state
  // 返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。
  const [content, setContent] = React.useState(value);

  const setFormattedContent = text => {
    console.log("setFormattedContent");
    // 符合长度才允许修改
    text.length > limit ? setContent(text.slice(0, limit)) : setContent(text);
  };

  // useEffect 就是一个 Effect Hook ，在组件挂载和更新时执行
  // 可以看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个生命周期函数的组合
  React.useEffect(() => {
    console.log("useEffect");
    setFormattedContent(content);
  }, []);

  return (
    <div>
      <textarea
        rows={rows}
        cols={cols}
        onChange={event => setFormattedContent(event.target.value)}
        value={content}
      />
      <p>
        {content.length}/{limit}
      </p>
    </div>
  );
}
```

例子

```jsx
export default function() {
  return <LimitedTextarea limit={32} value="Hello!" />;
}
```


ps:

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Input/LimitedTextarea.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Input/LimitedTextarea)

### LimitedWordTextarea限制单词数的多行文本

呈现限制单词数的多行文本组件。

* 使用`React.useState()` hook 创建`content`和`wordCount`状态变量，并将它们的值分别设置为`value`和`0`。
* 创建一个方法`setFormattedContent`，它使用`String.prototype.split(' ')`将输入转换为单词数组，并使用 `Array.prototype.filter(Boolean)`检查 `length`是否比 `limit`长。
* 如果上述`length`超过`limit`，则修剪输入，否则返回原始输入，在两种情况下都相应地更新`content`和`wordCount`。
* 使用`React.useEffect()` hook 来调用`content`状态变量值的`setFormattedContent`方法。
* 使用`<div>`来包装`<textarea>`和`<p>`元素，它显示字符数并绑定`<textarea>`的`onChange`事件来调用`setFormattedContent` 处理 `event.target.value`的值。

```jsx
function LimitedWordTextarea({ rows, cols, value, limit }) {
  const [content, setContent] = React.useState(value);
  const [wordCount, setWordCount] = React.useState(0);

  const setFormattedContent = text => {
    let words = text.split(" ");
    // words.filter(Boolean).length 获取数组长度
    // .filter(Boolean) 等价于 .filter((item) => {return Boolean(item)})
    // 也就是说这样写的意思就是去除数组中为 “假” 的元素
    if (words.filter(Boolean).length > limit) {
      setContent(
        text
          .split(" ")
          .slice(0, limit)
          .join(" ")
      );
      setWordCount(limit);
    } else {
      setContent(text);
      setWordCount(words.filter(Boolean).length);
    }
  };

  React.useEffect(() => {
    setFormattedContent(content);
  }, []);

  return (
    <div>
      <textarea
        rows={rows}
        cols={cols}
        onChange={event => setFormattedContent(event.target.value)}
        value={content}
      />
      <p>
        {wordCount}/{limit}
      </p>
    </div>
  );
}
```

例子

```jsx
export default function() {
  return <LimitedWordTextarea limit={5} value="Hello there!" />;
}
```


ps:

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Input/LimitedWordTextarea.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Input/LimitedWordTextarea)

### MultiselectCheckbox复选框

呈现一个复选框列表，该列表使用回调函数将其选定的值/值传递给父组件。

* 使用`React.setState()`创建一个`data`状态变量，并将其初始值设置为等于`options`。
* 创建一个函数`toggle`，用于切换`checked`以更新`data`状态变量，并调用通过组件的props传递的`onChange`回调。
* 渲染一个`<ul>`元素并使用`Array.prototype.map()`将`data`状态变量映射到单独的`<li>`元素，其中`<input>`元素作为它们的子元素。
* 每个`<input>`元素都有`type ='checkbox'`属性并被标记为`readOnly`，因为它的click事件由父`<li>`元素的`onClick`处理程序处理。

```jsx
const style = {
  listContainer: {
    listStyle: 'none',
    paddingLeft: 0
  },
  itemStyle: {
    cursor: 'pointer',
    padding: 5
  }
};

function MultiselectCheckbox({ options, onChange }) {
  const [data, setData] = React.useState(options);

  const toggle = item => {
    data.map((_, key) => {
      if (data[key].label === item.label) data[key].checked = !item.checked;
    });
    setData([...data]);
    onChange(data);
  };

  return (
    <ul style={style.listContainer}>
      {data.map(item => {
        return (
          <li key={item.label} style={style.itemStyle} onClick={() => toggle(item)}>
            <input readOnly type="checkbox" checked={item.checked || false} />
            {item.label}
          </li>
        );
      })}
    </ul>
  );
}
```

例子

```jsx
export default function() {
  const options = [{ label: "Item One" }, { label: "Item Two" }];
  return (
    <MultiselectCheckbox
      options={options}
      onChange={data => {
        console.log(data);
      }}
    />
  );
}
```


ps:

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Input/MultiselectCheckbox.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Input/MultiselectCheckbox)

### PasswordRevealer密码可见

使用“显示”按钮呈现密码输入字段。

* 使用`React.useState()`钩子创建`shown`状态变量并将其值设置为`false`。
* 使用`div>`包装`<input>`和`<button>`元素，用于切换`text`和`password`之间输入字段的类型。

```jsx
function PasswordRevealer({ value }) {
  const [shown, setShown] = React.useState(false);

  return (
    <div>
      <input type={shown ? 'text' : 'password'} value={value} onChange={() => {}} />
      <button onClick={() => setShown(!shown)}>显示/隐藏</button>
    </div>
  );
}
```

例子

```jsx
export default function() {
  return <PasswordRevealer />;
}
```


ps:

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Input/PasswordRevealer.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Input/PasswordRevealer)

### Select下拉选择器

呈现一个`<select>`元素，该元素使用回调函数将其值传递给父组件。

* 使用对象解构来设置`<select>`元素的某些属性的默认值。
* 使用适当的属性渲染一个`<select>`元素，并使用`onChange`事件中的`callback`函数将textarea的值传递给父元素。
* 在`values`数组上使用destructuring来传递`value`和`text`元素的数组以及`selected`属性来定义`<select>`元素的初始`value`。

```jsx
function Select({
  values,
  callback,
  disabled = false,
  readonly = false,
  selected
}) {
  const [current, setCurrent] = React.useState(selected);
  const handleChange = ({ target: { value } }) => {
    setCurrent(value);
    callback(value);
  };
  return (
    <select
      value={current}
      disabled={disabled}
      readOnly={readonly}
      onChange={handleChange}
    >
      {values.map(([value, text]) => (
        <option value={value} key={value}>
          {text}
        </option>
      ))}
    </select>
  );
}
```

例子

```jsx
export default function() {
  let choices = [
    ["grapefruit", "Grapefruit"],
    ["lime", "Lime"],
    ["coconut", "Coconut"],
    ["mango", "Mango"]
  ];
  return (
    <Select
      values={choices}
      selected={"lime"}
      callback={val => {
        console.log(val);
      }}
    />
  );
}
```


ps: 这里的实现跟官方不同，官方使用 option 的 selected 属性，但浏览器报错说不应使用，故更改为 select 的 value 属性。

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Input/Select.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Input/Select)

### Slider滑块元素

呈现滑块元素，使用回调函数将其值传递给父组件。

* 使用对象解构来设置`<input>`元素的某些属性的默认值。
* 渲染一个类型为`range`的`<input>`元素和相应的属性，使用`onChange`事件中的`callback`函数将输入值传递给父元素。

```jsx
function Slider({ callback, disabled = false, readOnly = false }) {
  return (
    <input
      type="range"
      disabled={disabled}
      readOnly={readOnly}
      onChange={({ target: { value } }) => callback(value)}
    />
  );
}
```

例子

```jsx
export default function() {
  return <Slider callback={val => console.log(val)} />;
}
```


ps:

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Input/Slider.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Input/Slider)

### TextArea多行文本

呈现一个`<textarea>`元素，该元素使用回调函数将其值传递给父组件。

* 使用对象解构来设置`<textarea>`元素的某些属性的默认值。
* 使用适当的属性渲染`<textarea>`元素，并使用`onChange`事件中的`callback`函数将textarea的值传递给父元素。

```jsx
function TextArea({
  callback,
  cols = 20,
  rows = 2,
  disabled = false,
  readOnly = false,
  placeholder = ''
}) {
  return (
    <textarea
      cols={cols}
      rows={rows}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={({ target: { value } }) => callback(value)}
    />
  );
}
```

例子

```jsx
export default function() {
  return (
    <TextArea
      placeholder="Insert some text here..."
      callback={val => console.log(val)}
    />
  );
}
```


ps:

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Input/TextArea.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Input/TextArea)

## Object对象渲染
### TreeView可折叠无限层级树组件

可折叠、无限层级、支持数组和对象的树组件。

* 使用对象解构来设置某些传入属性的默认值。
* 使用传入的 `toggled` 属性来确定内容的初始状态（折叠/展开）。
* 使用`React.setState()` hook 来创建`isToggled`状态变量，并在最初为它赋予传入的 `toggled`的值。
* 返回一个`<div>`来包装组件的内容和用于改变组件的`isToggled`状态的`<span>`元素。
* 根据`data`上的`isParentToggled`，`isToggled`，`name`和`Array.isArray()`确定组件的外观。
* 对于`data`中的每个子节点，确定它是对象还是数组，并递归渲染子树。
* 否则，使用适当的样式渲染一个`<p>`元素。

样式：

```css
/* 树节点的基本样式 */
.tree-element {
  margin: 0;
  position: relative;
}
div.tree-element:before {
  content: '';
  position: absolute;
  top: 24px;
  left: 1px;
  height: calc(100% - 48px);
  border-left: 1px solid gray;
}

/* 切换显示、隐藏的按钮元素 */
.toggler {
  position: absolute;
  top: 10px;
  left: 0px;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 5px solid gray;
  cursor: pointer;
}
.toggler.closed {
  transform: rotate(90deg);
}

/* 隐藏节点内容 */
.collapsed {
  display: none;
}
```

树组件：

```jsx
import styles from "./TreeView.css";

function TreeView({
  // 使用对象解构来设置某些传入属性的默认值
  data,
  toggled = true, // 折叠按钮，是否处于折叠状态
  name = null, // 当前属性名，如果子元素是对象显示
  isLast = true, // 是否最后一个
  isChildElement = false, // 是否子元素
  isParentToggled = true // 是否被父节点折叠
}) {
  const [isToggled, setIsToggled] = React.useState(toggled);

  return (
    <div
      style={{ marginLeft: isChildElement ? 16 : 4 + "px" }}
      // 如果父折叠就隐藏
      className={isParentToggled ? styles["tree-element"] : styles.collapsed}
    >
      {/* 折叠按钮，点击设置反状态 */}
      <span
        className={
          isToggled ? styles.toggler : `${styles.toggler} ${styles.closed}`
        }
        onClick={() => setIsToggled(!isToggled)}
      />
      {name ? <strong>&nbsp;&nbsp;{name}: </strong> : <span>&nbsp;&nbsp;</span>}
      {/* 开始符 */}
      {Array.isArray(data) ? "[" : "{"}
      {/* 子元素被折叠 */}
      {!isToggled && "..."}
      {/* 渲染对象的子元素 */}
      {Object.keys(data).map((v, i, a) =>
        // 是对象，递归调用自身
        typeof data[v] == "object" ? (
          <TreeView
            data={data[v]}
            key={i}
            isLast={i === a.length - 1}
            // 子元素的属性名，对象需要显示属性名，数组不显示
            name={Array.isArray(data) ? null : v}
            isChildElement
            isParentToggled={isParentToggled && isToggled}
          />
        ) : ( // 不是对象，显示内容即可
          <p
            key={i}
            style={{ marginLeft: 16 + "px" }}
            className={isToggled ? styles["tree-element"] : styles.collapsed}
          >
            {Array.isArray(data) ? "" : <strong>{v}: </strong>}
            {data[v]}
            {i === a.length - 1 ? "" : ","}
          </p>
        )
      )}
      {/* 结束符 */}
      {Array.isArray(data) ? "]" : "}"}
      {/* 不是最后元素，加个逗号 */}
      {!isLast ? "," : ""}
    </div>
  );
}
```

例子

```jsx
export default function() {
  let data = {
    lorem: {
      ipsum: "dolor sit",
      amet: {
        consectetur: "adipiscing",
        elit: [
          "duis",
          "vitae",
          {
            semper: "orci"
          },
          {
            est: "sed ornare"
          },
          "etiam",
          ["laoreet", "tincidunt"],
          ["vestibulum", "ante"]
        ]
      },
      ipsum: "primis"
    }
  };
  return <TreeView data={data} name="data" />;
}
```



ps:

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Object/TreeView.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Object/TreeView)


## String字符串处理
### AutoLink自动识别文本中的链接

将字符串中的URL转换为适当的 `<a>` 元素。

* 使用正则表达式配合 `String.prototype.split()` 和 `String.prototype.match()`来查找字符串中的URL。
* 返回一个`<React.Fragment>`不产生多余的元素；其匹配的URL呈现为`<a>`元素，必要时需要处理丢失的协议前缀补充为`http://`，并将其余字符串呈现为明文。

```jsx
import React from "react";
function AutoLink({ text }) {
  // 用于找 url 的正则表达式
  const delimiter = /((?:https?:\/\/)?(?:(?:[a-z0-9]?(?:[a-z0-9\-]{1,61}[a-z0-9])?\.[^\.|\s])+[a-z\.]*[a-z]+|(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(?::\d{1,5})*[a-z0-9.,_\/~#&=;%+?\-\\(\\)]*)/gi;

  return (
    <React.Fragment>
      {/* 按正则分割为数组，最终渲染时被显示在了一起 */}
      {text.split(delimiter).map(word => {
        // foo bar baz
        // http://example.org
        //  bar
        console.log(word);
        // 从以上分割的内容中找到具体的url的部分
        // 进行超链接的处理
        let match = word.match(delimiter);
        if (match) {
          let url = match[0];
          return (
            <a href={url.startsWith("http") ? url : `http://${url}`} key={url} target="_blank">{url}</a>
          );
        }
        return word;
      })}
    </React.Fragment>
  );
}
```

例子

```jsx
export default function() {
  return <AutoLink text="foo bar baz http://example.org barhttp://baidu.com 123" />;
}
```




- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/String/AutoLink.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/String/AutoLink)


## Visual视觉效果渲染
### Accordion手风琴组件

手风琴效果组件，包含多个可折叠内容。

* 定义一个`AccordionItem`组件，将它传递给`Accordion`。并通过在`props.children`中识别函数的名称来删除`AccordionItem`所需的不必要的节点。
* 每个`AccordionItem`组有一个`<button>`，用于通过`props.handleClick`回调更新`Accordion`和组件的内容，通过`props.children`向下传递，它的折叠状态由`props.isCollapsed`确定。
* 在`Accordion`组件中，使用`React.useState()`钩子将`bindIndex`状态变量的值初始化为`props.defaultIndex`。
* 在收集的节点上使用`Array.prototype.map`来渲染单个可折叠的元素。
* 定义`changeItem`，它将在单击`AccordionItem`的`<button>`时执行。
`changeItem`执行传递的回调，`onItemClick`并根据点击的元素更新`bindIndex`。

AccordionItem 组件：

```jsx
import React from "react";
function AccordionItem(props) {
  const style = {
    collapsed: {
      display: "none"
    },
    expanded: {
      display: "block"
    },
    buttonStyle: {
      display: "block",
      width: "100%"
    }
  };

  return (
    <div>
      {/* 按钮，点击传入的 handleClick */}
      <button style={style.buttonStyle} onClick={() => props.handleClick()}>
        {props.label}
      </button>
      {/* 控制显示、隐藏状态 */}
      <div
        className="collapse-content"
        style={props.isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={props.isCollapsed}
      >
        {/* 内容 */}
        {props.children}
      </div>
    </div>
  );
}
```

Accordion 组件：

```js
function Accordion(props) {
  // 目前显示的 index
  const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);
  // 点击即把 bindIndex 设置为自己
  const changeItem = itemIndex => {
    if (typeof props.onItemClick === "function") props.onItemClick(itemIndex);
    if (itemIndex !== bindIndex) setBindIndex(itemIndex);
  };
  // 筛选出传入的 AccordionItem 组件，忽略其他
  // item.type 对应 react 组件自身的函数， 函数.name 是函数名
  // 在本地环境，没有压缩，函数名就是组件名 AccordionItem
  // 线上压缩后，函数名没改为了单个字母，自然就无法判断了
  // 解决方案：跟它本身 .name 比较即可
  const items = props.children.filter(
    item => item.type.name === AccordionItem.name
  );

  return (
    <div className="wrapper">
      {items.map(({ props }) => (
        <AccordionItem
          isCollapsed={bindIndex === props.index}
          label={props.label}
          handleClick={() => changeItem(props.index)}
          children={props.children}
        />
      ))}
    </div>
  );
}
```

例子

```jsx
export default function() {
  return (
    <Accordion defaultIndex="1" onItemClick={console.log}>
      <AccordionItem label="A" index="1">
        Lorem ipsum
      </AccordionItem>
      <AccordionItem label="B" index="2">
        Dolor sit amet
      </AccordionItem>
    </Accordion>
  );
}
```



- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Visual/Accordion.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Visual/Accordion)

### Carousel轮播组件

轮播组件。

* 使用`React.setState()` hook 来创建`active`状态变量，并给它一个值'0'（第一项的索引）。
* 使用`style`对象来保存各个组件的样式。
* 使用`React.setEffect()` hook 使用`setTimeout`将`active`的值更新为下一个项的索引。
* 构造`props`，计算是否应将可见性样式设置为“可见”或不对每个轮播项目进行映射，并相应地将组合样式应用于轮播项目组件。
* 使用`React.cloneElement()`渲染轮播项目，并将其余的`props`与计算出的样式一起传递下来。

```jsx
function Carousel(props) {
  // active 当前轮播激活的索引
  const [active, setActive] = React.useState(0);
  const style = {
    carousel: {
      position: "relative"
    },
    carouselItem: {
      position: "absolute",
      visibility: "hidden"
    },
    visible: {
      visibility: "visible"
    }
  };
  React.useEffect(() => {
    // 将 active 的值更新为下一个项的索引
    setTimeout(() => {
      const { carouselItems } = props;
      // 因为 active 在 render 中使用了， active 改变会影响视图而重新渲染，所以也会再次触发 useEffect
      setActive((active + 1) % carouselItems.length);
    }, 1000);
  });
  const { carouselItems, ...rest } = props;
  return (
    <div style={style.carousel}>
      {carouselItems.map((item, index) => {
        // 激活就显示，否则隐藏
        const activeStyle = active === index ? style.visible : {};
        // 克隆出一个组件来渲染
        return React.cloneElement(item, {
          ...rest,
          style: {
            ...style.carouselItem,
            ...activeStyle
          },
          key: index
        });
      })}
    </div>
  );
}
```

例子

```jsx
export default function() {
  return (
    <Carousel
      carouselItems={[
        <div>carousel item 1</div>,
        <div>carousel item 2</div>,
        <div>carousel item 3</div>
      ]}
    />
  );
}
```


- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Visual/Carousel.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Visual/Carousel)

### Collapse折叠面板

折叠面板组件。

* 使用`React.setState()` hook 创建`isCollapsed`状态变量，初始值为`props.collapsed`。
* 使用一个对象`style`来保存单个组件及其状态的样式。
* 使用`<div>`来包装改变组件的`isCollapsed`状态的`<button>`和组件的内容，通过`props.children`传递。
* 根据`isCollapsed`确定内容的外观，并从`style`对象应用适当的CSS规则。
* 最后，根据`isCollapsed`更新`aria-expanded`属性的值。

```jsx
function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);

  const style = {
    collapsed: {
      display: "none"
    },
    expanded: {
      display: "block"
    },
    buttonStyle: {
      display: "block",
      width: "100%"
    }
  };

  return (
    <div>
      <button
        style={style.buttonStyle}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "显示" : "隐藏"} 内容
      </button>
      <div
        className="collapse-content"
        // 决定显示和折叠
        style={isCollapsed ? style.collapsed : style.expanded}
        // aria-expanded 是给 Screen Reader 用来 判断当前元素状态的辅助属性
        aria-expanded={isCollapsed}
      >
        {props.children}
      </div>
    </div>
  );
}
```

例子

```jsx
export default function() {
  return (
    <Collapse>
      <h1>This is a collapse</h1>
      <p>Hello world!</p>
    </Collapse>
  );
}
```


- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Visual/Collapse.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Visual/Collapse)

### CountDown倒计时

渲染倒数计时器，在达到零时打印消息。

* 使用对象解构来设置`hours`，`minutes`和`seconds`prop 的默认值。
* 使用`React.useState()`钩子来创建`time`，`paused`和`over`状态变量，并将它们的值分别设置为传递的props，`false`和`false`的值。
* 创建一个方法`tick`，它根据当前值更新`time`的值（即将时间减少一秒）。
* 如果`paused` 或 `over` 是 `true` ，`tick`将立即返回。
* 创建一个方法`reset`，将所有状态变量重置为其初始状态。
* 使用`React.useEffect()`钩子通过使用`setInterval()`每秒调用`tick`方法，并在卸载组件时使用`clearInterval()`进行清理。
* 使用`<div>`用`time`状态变量的文本表示形式包装`<p>`元素，以及分别暂停/取消暂停和重启计时器的两个`<button>`元素。
* 如果`over`为 `true`，计时器将显示一条消息，而不是 `time` 的值。

```jsx
import React from "react";
function CountDown({ hours = 0, minutes = 0, seconds = 0 }) {
  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  // time 默认值是一个 object
  const [time, setTime] = React.useState({
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds)
  });

  const tick = () => {
    // 暂停，或已结束
    if (paused || over) return;
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0)
      setOver(true);
    else if (time.minutes === 0 && time.seconds === 0)
      setTime({
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59
      });
    else if (time.seconds === 0)
      setTime({
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59
      });
    else
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1
      });
  };

  // 重置
  const reset = () => {
    setTime({
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds)
    });
    setPaused(false);
    setOver(false);
  };

  React.useEffect(() => {
    // 执行定时
    let timerID = setInterval(() => tick(), 1000);
    // 卸载组件时进行清理
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <p>{`${time.hours
        .toString()
        .padStart(2, "0")}:${time.minutes
        .toString()
        .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}</p>
      <div>{over ? "Time's up!" : ""}</div>
      <button onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button>
      <button onClick={() => reset()}>Restart</button>
    </div>
  );
}
```

例子

```jsx
export default function() {
  return <CountDown hours="1" minutes="45" />;
}
```


- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Visual/CountDown.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Visual/CountDown)

### FileDrop文件拖放组件

文件拖放组件。

* 为此组件创建一个名为`dropRef`的引用。
* 使用`React.useState()`钩子来创建`drag`和`filename`变量，分别初始化为`false`和空字符串。变量`dragCounter`和`drag`用于确定是否正在拖动文件，而`filename`用于存储被删除文件的名称。
* 创建`handleDrag`，`handleDragIn`，`handleDragOut`和`handleDrop`方法来处理拖放功能，将它们绑定到组件的上下文。
* 每个方法都将处理一个特定的事件，在`React.useEffect()`钩子及其附加的`cleanup()`方法中创建和删除它的监听器。
* `handleDrag`阻止浏览器打开拖动的文件，`handleDragIn`和`handleDragOut`处理进入和退出组件的拖动文件，而`handleDrop`处理被删除的文件并将其传递给`props.handleDrop`。
* 返回一个适当样式的`<div>`并使用`drag`和`filename`来确定其内容和样式。
* 最后，将创建的`<div>`的`ref`绑定到`dropRef`。

```css
.filedrop {
  min-height: 120px;
  border: 3px solid #d3d3d3;
  text-align: center;
  font-size: 24px;
  padding: 32px;
  border-radius: 4px;
}

.filedrop.drag {
  border: 3px dashed #1e90ff;
}

.filedrop.ready {
  border: 3px solid #32cd32;
}
```

```jsx
import React from "react";
import styles from "./FileDrop.css";
function FileDrop(props) {
  const [drag, setDrag] = React.useState(false);
  const [filename, setFilename] = React.useState("");

  // 创建组件引用
  let dropRef = React.createRef();
  let dragCounter = 0;

  const handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) setDrag(true);
  };

  const handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;
    if (dragCounter === 0) setDrag(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      props.handleDrop(e.dataTransfer.files[0]);
      setFilename(e.dataTransfer.files[0].name);
      e.dataTransfer.clearData();
      dragCounter = 0;
    }
  };

  React.useEffect(() => {
    // 监听拖放事件
    let div = dropRef.current;
    div.addEventListener("dragenter", handleDragIn);
    div.addEventListener("dragleave", handleDragOut);
    div.addEventListener("dragover", handleDrag);
    div.addEventListener("drop", handleDrop);
    // 销毁时移除事件
    return function cleanup() {
      div.removeEventListener("dragenter", handleDragIn);
      div.removeEventListener("dragleave", handleDragOut);
      div.removeEventListener("dragover", handleDrag);
      div.removeEventListener("drop", handleDrop);
    };
  });

  return (
    <div
      // ref 引用
      ref={dropRef}
      className={
        drag
          ? `${styles.filedrop} ${styles.drag}`
          : filename
          ? `${styles.filedrop} ${styles.ready}`
          : styles.filedrop
      }
    >
      {filename && !drag ? <div>{filename}</div> : <div>Drop files here!</div>}
    </div>
  );
}
```

例子

```jsx
export default function() {
  return <FileDrop handleDrop={console.log} />;
}
```



- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Visual/FileDrop.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Visual/FileDrop)


### Mailto发送电子邮件

格式化为发送电子邮件的链接。

* 构造组件的props，使用`email`，`subject`和`body`创建一个具有`href`属性的`<a>`元素。
* 使用`props.children`呈现链接的内容。

```jsx
function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}>{props.children}</a>
  );
}
```

例子

```jsx
export default function() {
  return (
    <Mailto email="foo@bar.baz" subject="Hello" body="Hello world!">
      Mail me!
    </Mailto>
  );
}
```


- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Visual/Mailto.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Visual/Mailto)

### Modal模态框组件

可通过事件控制的模态组件。
要使用该组件，只导入一次`Modal`，然后通过将一个布尔值传递给`isVisible`属性来显示它。

* 使用对象解构来设置模态组件的某些属性的默认值。
* 定义`keydownHandler`方法，用于处理所有键盘事件，可以根据你的需要使用它来调度动作（例如，当按下<kbd>Esc</kbd>时关闭模态）。
*使用`React.useEffect()`hook来添加或删除`keydown`事件监听器，它调用`keydownHandler`。
*使用`isVisible`道具来确定是否应该显示模态。
*使用CSS来设置和定位模态组件。

样式：

```css
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right:0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  animation-name: appear;
  animation-duration: 300ms;
}

.modal-dialog{
  width: 100%;
  max-width: 550px;
  background: white;
  position: relative;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow:hidden;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: slide-in;
  animation-duration: 0.5s;
}

.modal-header,.modal-footer{
  display: flex;
  align-items: center;
  padding: 1rem;
}
.modal-header{
  border-bottom: 1px solid #dbdbdb;
  justify-content: space-between;
}
.modal-footer{
  border-top: 1px solid #dbdbdb;
  justify-content: flex-end;
}
.modal-close{
  cursor: pointer;
  padding: 1rem;
  margin: -1rem -1rem -1rem auto;
}
.modal-body{
  overflow: auto;
}
.modal-content{
  padding: 1rem;
}

@keyframes appear {
  from {opacity: 0;}
  to {opacity: 1;}
}
@keyframes slide-in {
  from {transform: translateY(-150px);}
  to { transform: translateY(0);}
}
```

组件：

```jsx
import React from "react";
import styles from "./Modal.css";

function Modal({ isVisible = false, title, content, footer, onClose }) {
  React.useEffect(() => {
    // 监听事件
    document.addEventListener("keydown", keydownHandler);
    // 取消监听
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  function keydownHandler({ key }) {
    // esc 键，关闭模态框
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  }
  // 控制模态框显示
  return !isVisible ? null : (
    <div className={styles["modal"]} onClick={onClose}>
      <div
        className={styles["modal-dialog"]}
        onClick={e => e.stopPropagation()}
      >
        <div className={styles["modal-header"]}>
          <h3 className={styles["modal-title"]}>{title}</h3>
          <span className={styles["modal-close"]} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={styles["modal-body"]}>
          <div className={styles["modal-content"]}>{content}</div>
        </div>
        {footer && <div className={styles["modal-footer"]}>{footer}</div>}
      </div>
    </div>
  );
}
```

例子

```jsx

// 将组件添加到 render 函数
function App() {
  const [isModal, setModal] = React.useState(false);

  return (
    <React.Fragment>
      {/* 按钮显示模态框 */}
      <button onClick={() => setModal(true)}>显示模态框</button>
      <Modal
        isVisible={isModal}
        title="标题"
        content={<p>正文</p>}
        footer={<button onClick={() => setModal(false)}>关闭模态框</button>}
        onClose={() => setModal(false)}
      />
    </React.Fragment>
  );
}

export default function() {
  return <App />;
}
```

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Visual/Modal.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Visual/Modal)

### StarRating星级评分

星级评分组件。

* 定义一个名为“Star”的组件，它将根据父组件的状态为每个星形呈现适当的外观。
* 在`StarRating`组件中，使用`React.useState()`钩子来定义`rating`和`selection`状态变量，初始值为`props.rating`（如果无效或未传入，则为 0 ）和 0 。
* 创建一个方法`hoverOver`，根据传入的`event`更新`selected`和`rating`。
* 创建一个`<div>`来包装`<Star>`组件，这些组件是使用`Array.prototype.map`在5个元素的数组上创建的，使用`Array.from`创建，并处理`onMouseLeave` 将`selection`设置为`0`的事件，`onClick`事件设置`rating`和`onMouseOver`事件，分别将`selection`设置为`event.target`的`star-id`属性。
* 最后，将适当的值传递给每个`<Star>`组件（`starId`和`marked`）。

星星组件：

```jsx
function Star({ marked, starId }) {
  return (
    <span star-id={starId} style={{ color: "#ff9933" }} role="button">
      {/* 空星，实星 */}
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
}
```

星级评分：

```jsx
function StarRating(props) {
  // 分数显示
  const [rating, setRating] = React.useState(
    typeof props.rating == "number" ? props.rating : 0
  );
  // 鼠标移入效果
  const [selection, setSelection] = React.useState(0);
  const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("star-id"))
      val = event.target.getAttribute("star-id");
    setSelection(val);
  };
  return (
    <div
      // 鼠标移入效果
      onMouseOut={() => hoverOver(null)}
      // 点击选中分数
      onClick={event =>
        setRating(event.target.getAttribute("star-id") || rating)
      }
      onMouseOver={hoverOver}
    >
      {/* 创建5个组件 */}
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1} `}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
}
```

例子

```jsx
export default function() {
  return <div>
    <StarRating />
    <StarRating rating={2} />
  </div>;
}
```


- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Visual/StarRating.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Visual/StarRating)

### Tabs选项卡组件

选项卡组件。

* 定义一个`TabItem`组件，将它传递给`Tab`并通过在`props.children`中识别函数的名称来删除除了`TabItem`外的不必要的节点。
* 使用`React.useState()` hook 将`bindIndex`状态变量的值初始化为`props.defaultIndex`。
* 使用`Array.prototype.map`来渲染`tab-menu`和`tab-view`。
* 定义 `changeTab` ，用于 `tab-menu` 单击 `<button>` 时执行。
* 这导致根据他们的`index` 反过来重新渲染 `tab-view`项的`style`和`className`以及`tab-menu` 。
* `changeTab` 执行传递的回调函数 `onTabClick` ，并更新 `bindIndex` ，这会导致重新渲染，根据它们的 `index` 改变 `tab-view` 项目和 `tab-menu` 按钮的 `style` 和 `className` 。

```css
.tab-menu > button {
  cursor: pointer;
  padding: 8px 16px;
  border: 0;
  border-bottom: 2px solid transparent;
  background: none;
}
.tab-menu > button.focus {
  border-bottom: 2px solid #007bef;
}
.tab-menu > button:hover {
  border-bottom: 2px solid #007bef;
}
```

```jsx
import styles from "./Tabs.css";

function TabItem(props) {
  return <div {...props} />;
}

function Tabs(props) {
  const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);
  const changeTab = newIndex => {
    if (typeof props.onTabClick === "function") props.onTabClick(newIndex);
    setBindIndex(newIndex);
  };
  const items = props.children.filter(item => item.type.name === TabItem.name);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["tab-menu"]}>
        {items.map(({ props: { index, label } }) => (
          <button
            onClick={() => changeTab(index)}
            key={index}
            className={bindIndex === index ? styles["focus"] : ""}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={styles["tab-view"]}>
        {items.map(({ props }) => (
          <div
            {...props}
            className={styles["tab-view_item"]}
            key={props.index}
            style={{ display: bindIndex === props.index ? "block" : "none" }}
          />
        ))}
      </div>
    </div>
  );
}
```

例子

```jsx
export default function() {
  return (
    <Tabs defaultIndex="1" onTabClick={console.log}>
      <TabItem label="A" index="1">
        A 选修卡的内容
      </TabItem>
      <TabItem label="B" index="2">
        B 选修卡的内容
      </TabItem>
    </Tabs>
  );
}
```


- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Visual/Tabs.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Visual/Tabs)

### Ticker时间控制组件

时间控制组件

* 使用`React.useState()` hook 将`ticker`状态变量初始化为`0`。
* 定义两个方法，`tick`和`reset`，它们将根据`interval`周期性地递增`timer`并分别重置`interval`。
* 返回带有两个`<button>`元素的`<div>`，分别调用`tick`和`reset`。

```jsx
function Ticker(props) {
  // 当前 ticker ，默认 0
  const [ticker, setTicker] = React.useState(0);
  let interval = null;

  // 开始计时
  const tick = () => {
    reset();
    interval = setInterval(() => {
      if (ticker < props.times) setTicker(ticker + 1);
      else clearInterval(interval);
    }, props.interval);
  };

  // 重置为0，并清除计时器
  const reset = () => {
    setTicker(0);
    clearInterval(interval);
  };

  return (
    <div>
      <span style={{ fontSize: 100 }}>{ticker}</span>
      <button onClick={tick}>Tick!</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

> 注：useState 与 setInterval 运行在 umi 的 demo 中存在异常，这里使用“类组件”的形式完成Ticker组件。

```jsx
import React from "react";

class Ticker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ticker: 0 };
    this.interval = null;
  }

  tick = () => {
    this.reset();
    this.interval = setInterval(() => {
      if (this.state.ticker < this.props.times) {
        this.setState(({ ticker }) => ({ ticker: ticker + 1 }));
      } else {
        clearInterval(this.interval);
      }
    }, this.props.interval);
  };

  reset = () => {
    this.setState({ ticker: 0 });
    clearInterval(this.interval);
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 100 }}>{this.state.ticker}</span>
        <button onClick={this.tick}>Tick!</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
```

例子

```jsx
export default function() {
  return <Ticker times={5} interval={1000} />;
}
```

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Visual/Ticker.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Visual/Ticker)

### Toggle开关组件

开关组件

* 使用`React.useState()`将`isToggleOn`状态变量初始化为`false`。
* 使用一个对象`style`来保存单个组件及其状态的样式。
* 返回一个`<button>`，当它的`onClick`事件被触发时改变组件的`isToggledOn`，并根据`isToggleOn`确定内容的外观，从`style`对象应用适当的CSS规则。

```jsx
function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = React.useState(false);
  style = {
    on: {
      backgroundColor: 'green'
    },
    off: {
      backgroundColor: 'grey'
    }
  };

  return (
    <button onClick={() => setIsToggleOn(!isToggleOn)} style={isToggleOn ? style.on : style.off}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}
```

例子

```jsx
export default function() {
  return <Toggle />;
}
```


- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Visual/Toggle.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Visual/Toggle)

### Tooltip提示

提示组件。

* 使用`React.useState()`钩子创建`show`变量并将其初始化为`false`。
* 返回一个`<div>`元素，其中包含将作为工具提示的`<div>`和传递给组件的`children`。
* 通过改变`show`变量的值来处理`onMouseEnter`和`onMouseLeave`方法。

```css
.tooltip {
  position: relative;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  visibility: hidden;
  padding: 5px;
  border-radius: 5px;
}
.tooltip-arrow {
  position: absolute;
  top: 100%;
  left: 50%;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.7) transparent transparent;
}
```

```jsx
import styles from "./Tooltip.css";
function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <div
        className={styles["tooltip"]}
        style={show ? { visibility: "visible" } : {}}
      >
        {text}
        <span className={styles["tooltip-arrow"]} />
      </div>
      <div
        {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
}
```

例子

```jsx
export default function() {
  return (
    <Tooltip text="提示文本~">
      <button>鼠标移入!</button>
    </Tooltip>
  );
}
```

- [示例代码](https://github.com/heibaimeng/30-seconds-of-react-zh_CN-with-demo/blob/master/src/pages/Visual/Tooltip.js)
- [运行效果](https://heibaimeng.github.io/30-seconds-of-react-demo/#/Visual/Tooltip)

---

_注：本仓库使用“谷歌机器翻译+本人校对优化”的方式进行中文化。_

---

_<a href="https://github.com/30-seconds/30-seconds-of-react" target="_blank">30-seconds-of-react</a>正在进行中。 如果您想贡献，请查看未解决的问题，看看您可以在何处以及如何提供帮助！_

_<a href="https://github.com/30-seconds/30-seconds-of-react/blob/master/README.md" target="_blank">原版README</a>是使用 <a href="https://github.com/30-seconds/markdown-builder" target="_blank">markdown-builder</a> 构建的。_

