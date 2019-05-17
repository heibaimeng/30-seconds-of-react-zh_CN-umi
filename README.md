
[30-seconds-of-react](https://github.com/30-seconds/30-seconds-of-react) 项目的中文版本，使用“谷歌机器翻译+人工校对优化”的方式，保证翻译通畅可读。

使用 umi 执行示例 demo ，优势：无需定义路由，新建文件即可访问。每个片段将会附带代码地址和线上(本地)预览地址。

把示例代码跑起来：

```
yarn install
yarn dev
```

以下是正式内容(翻译完成之前，每天保持更新)：

---

![Logo](/logo.png)

# React 的 30 秒小片段

> 精选的有用的 React 片段，你可以在30秒或更短的时间内理解。

 - 使用<kbd> Ctrl </kbd> + <kbd> F </kbd>或<kbd>command</kbd> + <kbd> F </kbd>搜索片段。
 - 欢迎提供，请阅读<a href="https://github.com/30-seconds/30-seconds-of-react/blob/master/CONTRIBUTING.md" target="_blank">贡献指南</a>。
 - 片段用React 16.8+编写，使用 hooks 。

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

ps: 这里我使用 umi 进行代码的学习 ( 创建过程中不要附带插件 ) 。

```
yarn create umi
```

#### 相关产品

- [30 Seconds of Code](https://30secondsofcode.org)
- [30 Seconds of CSS](https://30-seconds.github.io/30-seconds-of-css/)
- [30 Seconds of Interviews](https://30secondsofinterviews.org/)

## 目录

### Array

<details>
<summary>查看内容</summary>

* [DataList数据列表](#DataList数据列表)
* [DataTable数据表格](#DataTable数据表格)
* [MappedTable映射表格](#MappedTable映射表格)
</details>


### Input

<details>
<summary>查看内容</summary>

* [Input](#input)
* [LimitedTextarea](#limitedtextarea)
* [LimitedWordTextarea](#limitedwordtextarea)
* [MultiselectCheckbox](#multiselectcheckbox)
* [PasswordRevealer](#passwordrevealer)
* [Select](#select)
* [Slider](#slider)
* [TextArea](#textarea)
</details>


### Object

<details>
<summary>查看内容</summary>

* [TreeView](#treeview)
</details>


### String

<details>
<summary>查看内容</summary>

* [AutoLink](#autolink)
</details>


### Visual

<details>
<summary>查看内容</summary>

* [Accordion](#accordion)
* [Carousel](#carousel)
* [Collapse](#collapse)
* [CountDown](#countdown)
* [FileDrop](#filedrop)
* [Mailto](#mailto)
* [Modal](#modal)
* [StarRating](#starrating)
* [Tabs](#tabs)
* [Ticker](#ticker)
* [Toggle](#toggle)
* [Tooltip](#tooltip)
</details>

---

## Array数组
### DataList数据列表

通过数组渲染元素列表。

* 使用 `isOrdered` prop 的值有条件地呈现`<ol>`或`<ul>`列表。
* 使用`Array.prototype.map`将`data`中的每个项目渲染为`<li>`元素，给它一个由其索引和值的串联产生的`key`。
* 默认情况下，省略 `isOrdered` prop 以呈现`<ul>`列表。

```jsx
function DataList({ isOrdered, data }) {
  const list = data.map((val, i) => <li key={`${i}_${val}`}>{val}</li>);
  return isOrdered ? <ol>{list}</ol> : <ul>{list}</ul>;
}
```

<details>
<summary>例子</summary>

```jsx
const names = ['John', 'Paul', 'Mary'];
ReactDOM.render(<DataList data={names} />, document.getElementById('root'));
ReactDOM.render(<DataList data={names} isOrdered />, document.getElementById('root'));
```

</details>

ps:

- <a href="src/pages/Array/DataList.js" target="_blank">示例代码</a>
- <a href="http://localhost:8000/Array/DataList" target="_blank">运行效果</a>

<br>[⬆ 回到顶部](#目录)

### DataTable数据表格

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

<details>
<summary>例子</summary>

```jsx
const people = ['John', 'Jesse'];
ReactDOM.render(<DataTable data={people} />, document.getElementById('root'));
```
</details>

ps:

- <a href="src/pages/Array/DataTable.js" target="_blank">示例代码</a>
- <a href="http://localhost:8000/Array/DataTable" target="_blank">运行效果</a>

<br>[⬆ 回到顶部](#目录)

### MappedTable映射表格

通过对象数组渲染表格，属性名称与列对应，动态创建每一行。

* 使用`Object.keys()`，`Array.prototype.filter()`，`Array.prototype.includes()`和`Array.prototype.reduce()`生成一个`filteredData`数组，包含所有对象 使用`propertyNames`中指定的键。
* 渲染一个`<table>`元素，其中一组列等于`propertyNames`中的值。
* 使用`Array.prototype.map`将`propertyNames`数组中的每个值呈现为`<th>`元素。
* 使用`Array.prototype.map`将`filteredData`数组中的每个对象呈现为`<tr>`元素，对象中的每个键包含一个`<td>`。

```jsx
function MappedTable({ data, propertyNames }) {
  let filteredData = data.map(v =>
    Object.keys(v)
      .filter(k => propertyNames.includes(k))
      .reduce((acc, key) => ((acc[key] = v[key]), acc), {})
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

<details>
<summary>例子</summary>

```jsx
const people = [
  { name: 'John', surname: 'Smith', age: 42 },
  { name: 'Adam', surname: 'Smith', gender: 'male' }
];
const propertyNames = ['name', 'surname', 'age'];
ReactDOM.render(
  <MappedTable data={people} propertyNames={propertyNames} />,
  document.getElementById('root')
);
```
</details>

ps:

- <a href="src/pages/Array/MappedTable.js" target="_blank">示例代码</a>
- <a href="http://localhost:8000/Array/MappedTable" target="_blank">运行效果</a>

<br>[⬆ 回到顶部](#目录)


## Input
### Input

Renders an `<input>` element that uses a callback function to pass its value to the parent component.

* Use object destructuring to set defaults for certain attributes of the `<input>` element.
* Render an `<input>` element with the appropriate attributes and use the `callback` function in the `onChange` event to pass the value of the input to the parent.

```jsx
function Input({ callback, type = 'text', disabled = false, readOnly = false, placeholder = '' }) {
  return (
    <input
      type={type}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={({ target: { value } }) => callback(value)}
    />
  );
}
```

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(
  <Input type="text" placeholder="Insert some text here..." callback={val => console.log(val)} />,
  document.getElementById('root')
);
```
</details>

<br>[⬆ 回到顶部](#目录)

### LimitedTextarea

Renders a textarea component with a character limit.

* Use the `React.useState()` hook to create the `content` state variable and set its value to `value`.
Create a method `setFormattedContent`, which trims the content of the input if it's longer than `limit`.
* Use the `React.useEffect()` hook to call the `setFormattedContent` method on the value of the `content` state variable.
* Use a`<div>` to wrap both the`<textarea>` and the `<p>` element that displays the character count and bind the `onChange` event of the `<textarea>` to call `setFormattedContent` with the value of `event.target.value`.

```jsx
function LimitedTextarea({ rows, cols, value, limit }) {
  const [content, setContent] = React.useState(value);

  const setFormattedContent = text => {
    text.length > limit ? setContent(text.slice(0, limit)) : setContent(text);
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
        {content.length}/{limit}
      </p>
    </div>
  );
}
```

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(<LimitedTextarea limit={32} value="Hello!" />, document.getElementById('root'));
```
</details>

<br>[⬆ 回到顶部](#目录)

### LimitedWordTextarea

Renders a textarea component with a word limit.

* Use the `React.useState()` hook to create the `content` and `wordCount` state variables and set their values to `value` and `0` respectively.
* Create a method `setFormattedContent`, which uses `String.prototype.split(' ')` to turn the input into an array of words and check if the result of applying `Array.prototype.filter(Boolean)` has a `length` longer than `limit`.
* If the afforementioned `length` exceeds the `limit`, trim the input, otherwise return the raw input, updating `content` and `wordCount` accordingly in both cases.
* Use the `React.useEffect()` hook to call the `setFormattedContent` method on the value of the `content` state variable.
* Use a`<div>` to wrap both the`<textarea>` and the `<p>` element that displays the character count and bind the `onChange` event of the `<textarea>` to call `setFormattedContent` with the value of `event.target.value`.

```jsx
function LimitedWordTextarea({ rows, cols, value, limit }) {
  const [content, setContent] = React.useState(value);
  const [wordCount, setWordCount] = React.useState(0);

  const setFormattedContent = text => {
    let words = text.split(' ');
    if (words.filter(Boolean).length > limit) {
      setContent(
        text
          .split(' ')
          .slice(0, limit)
          .join(' ')
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

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(
  <LimitedWordTextArea limit={5} value="Hello there!" />,
  document.getElementById('root')
);
```
</details>

<br>[⬆ 回到顶部](#目录)

### MultiselectCheckbox

Renders a checkbox list that uses a callback function to pass its selected value/values to the parent component.

* Use `React.setState()` to create a `data` state variable and set its initial value equal to the `options` prop.
* Create a function `toggle` that is used to toggle the `checked` to update the `data` state variable and call the `onChange` callback passed via the component's props.
* Render a `<ul>` element and use `Array.prototype.map()` to map the `data` state variable to individual `<li>` elements with `<input>` elements as their children.
* Each `<input>` element has the `type='checkbox'` attribute and is marked as `readOnly`, as its click events are handled by the parent `<li>` element's `onClick` handler.

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

<details>
<summary>例子</summary>

```jsx
const options = [{ label: 'Item One' }, { label: 'Item Two' }];

ReactDOM.render(
  <MultiselectCheckbox
    options={options}
    onChange={data => {
      console.log(data);
    }}
  />,
  document.getElementById('root')
);
```
</details>

<br>[⬆ 回到顶部](#目录)

### PasswordRevealer

Renders a password input field with a reveal button.

* Use the `React.useState()` hook to create the `shown` state variable and set its value to `false`.
* Use a`<div>` to wrap both the`<input>` and the `<button>` element that toggles the type of the input field between `"text"` and `"password"`.

```jsx
function PasswordRevealer({ value }) {
  const [shown, setShown] = React.useState(false);

  return (
    <div>
      <input type={shown ? 'text' : 'password'} value={value} onChange={() => {}} />
      <button onClick={() => setShown(!shown)}>Show/Hide</button>
    </div>
  );
}
```

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(<PasswordRevealer />, document.getElementById('root'));
```
</details>

<br>[⬆ 回到顶部](#目录)

### Select

Renders a `<select>` element that uses a callback function to pass its value to the parent component.

* Use object destructuring to set defaults for certain attributes of the `<select>` element.
* Render a `<select>` element with the appropriate attributes and use the `callback` function in the `onChange` event to pass the value of the textarea to the parent.
* Use destructuring on the `values` array to pass an array of `value` and `text` elements and the `selected` attribute to define the initial `value` of the `<select>` element.

```jsx
function Select({ values, callback, disabled = false, readonly = false, selected }) {
  return (
    <select
      disabled={disabled}
      readOnly={readonly}
      onChange={({ target: { value } }) => callback(value)}
    >
      {values.map(([value, text]) => (
        <option selected={selected === value} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
}
```

<details>
<summary>例子</summary>

```jsx
let choices = [
  ['grapefruit', 'Grapefruit'],
  ['lime', 'Lime'],
  ['coconut', 'Coconut'],
  ['mango', 'Mango']
];
ReactDOM.render(
  <Select values={choices} selected="lime" callback={val => console.log(val)} />,
  document.getElementById('root')
);
```
</details>

<br>[⬆ 回到顶部](#目录)

### Slider

Renders a slider element that uses a callback function to pass its value to the parent component.

* Use object destructuring to set defaults for certain attributes of the `<input>` element.
* Render an `<input>` element of type `"range"` and the appropriate attributes, use the `callback` function in the `onChange` event to pass the value of the input to the parent.

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

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(<Slider callback={val => console.log(val)} />, document.getElementById('root'));
```
</details>

<br>[⬆ 回到顶部](#目录)

### TextArea

Renders a `<textarea>` element that uses a callback function to pass its value to the parent component.

* Use object destructuring to set defaults for certain attributes of the `<textarea>` element.
* Render a `<textarea>` element with the appropriate attributes and use the `callback` function in the `onChange` event to pass the value of the textarea to the parent.

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

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(
  <TextArea placeholder="Insert some text here..." callback={val => console.log(val)} />,
  document.getElementById('root')
);
```
</details>

<br>[⬆ 回到顶部](#目录)


## Object
### TreeView

Renders a tree view of a JSON object or array with collapsible content.

* Use object destructuring to set defaults for certain props.
* Use the value of the `toggled` prop to determine the initial state of the content (collapsed/expanded).
* Use the `React.setState()` hook to create the `isToggled` state variable and give it the value of the `toggled` prop initially.
* Return a `<div>` to wrap the contents of the component and the `<span>` element, used to alter the component's `isToggled` state.
* Determine the appearance of the component, based on `isParentToggled`, `isToggled`, `name` and `Array.isArray()` on `data`.
* For each child in `data`, determine if it is an object or array and recursively render a sub-tree.
* Otherwise, render a `<p>` element with the appropriate style.

```css
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

.collapsed {
  display: none;
}
```

```jsx
function TreeView({
  data,
  toggled = true,
  name = null,
  isLast = true,
  isChildElement = false,
  isParentToggled = true
}) {
  const [isToggled, setIsToggled] = React.useState(toggled);

  return (
    <div
      style={{ marginLeft: isChildElement ? 16 : 4 + 'px' }}
      className={isParentToggled ? 'tree-element' : 'tree-element collapsed'}
    >
      <span
        className={isToggled ? 'toggler' : 'toggler closed'}
        onClick={() => setIsToggled(!isToggled)}
      />
      {name ? <strong>&nbsp;&nbsp;{name}: </strong> : <span>&nbsp;&nbsp;</span>}
      {Array.isArray(data) ? '[' : '{'}
      {!isToggled && '...'}
      {Object.keys(data).map((v, i, a) =>
        typeof data[v] == 'object' ? (
          <TreeView
            data={data[v]}
            isLast={i === a.length - 1}
            name={Array.isArray(data) ? null : v}
            isChildElement
            isParentToggled={isParentToggled && isToggled}
          />
        ) : (
          <p
            style={{ marginLeft: 16 + 'px' }}
            className={isToggled ? 'tree-element' : 'tree-element collapsed'}
          >
            {Array.isArray(data) ? '' : <strong>{v}: </strong>}
            {data[v]}
            {i === a.length - 1 ? '' : ','}
          </p>
        )
      )}
      {Array.isArray(data) ? ']' : '}'}
      {!isLast ? ',' : ''}
    </div>
  );
}
```

<details>
<summary>例子</summary>

```jsx
let data = {
  lorem: {
    ipsum: 'dolor sit',
    amet: {
      consectetur: 'adipiscing',
      elit: [
        'duis',
        'vitae',
        {
          semper: 'orci'
        },
        {
          est: 'sed ornare'
        },
        'etiam',
        ['laoreet', 'tincidunt'],
        ['vestibulum', 'ante']
      ]
    },
    ipsum: 'primis'
  }
};
ReactDOM.render(<TreeView data={data} name="data" />, document.getElementById('root'));
```
</details>

<br>[⬆ 回到顶部](#目录)


## String
### AutoLink

Renders a string as plaintext, with URLs converted to appropriate `<a>` elements.

* Use `String.prototype.split()` and `String.prototype.match()` with a regular expression to find URLs in a string.
* Return a `<React.Fragment>` with matched URLs rendered as `<a>` elements, dealing with missing protocol prefixes if necessary, and the rest of the string rendered as plaintext.

```jsx
function AutoLink({ text }) {
  const delimiter = /((?:https?:\/\/)?(?:(?:[a-z0-9]?(?:[a-z0-9\-]{1,61}[a-z0-9])?\.[^\.|\s])+[a-z\.]*[a-z]+|(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(?::\d{1,5})*[a-z0-9.,_\/~#&=;%+?\-\\(\\)]*)/gi;

  return (
    <React.Fragment>
      {text.split(delimiter).map(word => {
        let match = word.match(delimiter);
        if (match) {
          let url = match[0];
          return <a href={url.startsWith('http') ? url : `http://${url}`}>{url}</a>;
        }
        return word;
      })}
    </React.Fragment>
  );
}
```

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(
  <AutoLink text="foo bar baz http://example.org bar" />,
  document.getElementById('root')
);
```
</details>

<br>[⬆ 回到顶部](#目录)


## Visual
### Accordion

Renders an accordion menu with multiple collapsible content components.

* Define an `AccordionItem` component, pass it to the `Accordion` and remove unnecessary nodes expect for `AccordionItem` by identifying the function's name in `props.children`.
* Each `AccordionItem` component renders a `<button>` that is used to update the `Accordion` via the `props.handleClick` callback and the content of the component, passed down via `props.children`, while its appearance is determined by `props.isCollapsed` and based on `style`.
* In the `Accordion` component, use the `React.useState()` hook to initialize the value of the `bindIndex` state variable to `props.defaultIndex`.
* Use `Array.prototype.map` on the collected nodes to render the individual collapsiple elements.
* Define `changeItem`, which will be executed when clicking an `AccordionItem`'s `<button>`.
`changeItem` executes the passed callback, `onItemClick` and updates `bindIndex` based on the clicked element.

```jsx
function AccordionItem(props) {
  const style = {
    collapsed: {
      display: 'none'
    },
    expanded: {
      display: 'block'
    },
    buttonStyle: {
      display: 'block',
      width: '100%'
    }
  };

  return (
    <div>
      <button style={style.buttonStyle} onClick={() => props.handleClick()}>
        {props.label}
      </button>
      <div
        className="collapse-content"
        style={props.isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={props.isCollapsed}
      >
        {props.children}
      </div>
    </div>
  );
}

function Accordion(props) {
  const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);

  const changeItem = itemIndex => {
    if (typeof props.onItemClick === 'function') props.onItemClick(itemIndex);
    if (itemIndex !== bindIndex) setBindIndex(itemIndex);
  };
  const items = props.children.filter(item => item.type.name === 'AccordionItem');

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

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(
  <Accordion defaultIndex="1" onItemClick={console.log}>
    <AccordionItem label="A" index="1">
      Lorem ipsum
    </AccordionItem>
    <AccordionItem label="B" index="2">
      Dolor sit amet
    </AccordionItem>
  </Accordion>,
  document.getElementById('root')
);
```
</details>

<br>[⬆ 回到顶部](#目录)

### Carousel

Renders a carousel component.

* Use the `React.setState()` hook to create the `active` state variable and give it a value of `0` (index of the first item).
* Use an object, `style`, to hold the styles for the individual components.
* Use the `React.setEffect()` hook to update the value of `active` to the index of the next item, using `setTimeout`.
* Destructure `props`, compute if visibility style should be set to `visible` or not for each carousel item while mapping over and applying the combined style to the carousel item component accordingly.
* Render the carousel items using `React.cloneElement()` and pass down rest `props` along with the computed styles.

```jsx
function Carousel(props) {
  const [active, setActive] = React.useState(0);
  let scrollInterval = null;
  const style = {
    carousel: {
      position: 'relative'
    },
    carouselItem: {
      position: 'absolute',
      visibility: 'hidden'
    },
    visible: {
      visibility: 'visible'
    }
  };
  React.useEffect(() => {
    scrollInterval = setTimeout(() => {
      const { carouselItems } = props;
      setActive((active + 1) % carouselItems.length);
    }, 2000);
  });
  const { carouselItems, ...rest } = props;
  return (
    <div style={style.carousel}>
      {carouselItems.map((item, index) => {
        const activeStyle = active === index ? style.visible : {};
        return React.cloneElement(item, {
          ...rest,
          style: {
            ...style.carouselItem,
            ...activeStyle
          }
        });
      })}
    </div>
  );
}
```

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(
  <Carousel
    carouselItems={[
      <div>carousel item 1</div>,
      <div>carousel item 2</div>,
      <div>carousel item 3</div>
    ]}
  />,
  document.getElementById('root')
);
```
</details>

<br>[⬆ 回到顶部](#目录)

### Collapse

Renders a component with collapsible content.

* Use the `React.setState()` hook to create the `isCollapsed` state variable with an initial value of `props.collapsed`.
* Use an object, `style`, to hold the styles for individual components and their states.
* Use a `<div>` to wrap both the `<button>` that alters the component's `isCollapsed` state and the content of the component, passed down via `props.children`.
* Determine the appearance of the content, based on `isCollapsed` and apply the appropriate CSS rules from the `style` object.
* Finally, update the value of the `aria-expanded` attribute based on `isCollapsed` to make the component accessible.

```jsx
function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);

  const style = {
    collapsed: {
      display: 'none'
    },
    expanded: {
      display: 'block'
    },
    buttonStyle: {
      display: 'block',
      width: '100%'
    }
  };

  return (
    <div>
      <button style={style.buttonStyle} onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? 'Show' : 'Hide'} content
      </button>
      <div
        className="collapse-content"
        style={isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={isCollapsed}
      >
        {props.children}
      </div>
    </div>
  );
}
```

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(
  <Collapse>
    <h1>This is a collapse</h1>
    <p>Hello world!</p>
  </Collapse>,
  document.getElementById('root')
);
```
</details>

<br>[⬆ 回到顶部](#目录)

### CountDown

Renders a countdown timer that prints a message when it reaches zero.

* Use object destructuring to set defaults for the `hours`, `minutes` and `seconds` props.
* Use the `React.useState()` hook to create the `time`, `paused` and `over` state variables and set their values to the values of the passed props, `false` and `false` respectively.
* Create a method `tick`, that updates the value of `time` based on the current value (i.e. decreasing the time by one second).
* If `paused` or `over` is `true`, `tick` will return immediately.
* Create a method `reset`, that resets all state variables to their initial states.
* Use the the `React.useEffect()` hook to call the `tick` method every second via the use of `setInterval()` and use `clearInterval()` to cleanup when the component is unmounted.
* Use a `<div>` to wrap a `<p>` element with the textual representation of the components `time` state variable, as well as two `<button>` elements that will pause/unpause and restart the timer respectively.
* If `over` is `true`, the timer will display a message instead of the value of `time`.

```jsx
function CountDown({ hours = 0, minutes = 0, seconds = 0 }) {
  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const [time, setTime] = React.useState({
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds)
  });

  const tick = () => {
    if (paused || over) return;
    if (time.hours == 0 && time.minutes == 0 && time.seconds == 0) setOver(true);
    else if (time.minutes == 0 && time.seconds == 0)
      setTime({
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59
      });
    else if (time.seconds == 0)
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
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <p>{`${time.hours.toString().padStart(2, '0')}:${time.minutes
        .toString()
        .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p>
      <div>{over ? "Time's up!" : ''}</div>
      <button onClick={() => setPaused(!paused)}>{paused ? 'Resume' : 'Pause'}</button>
      <button onClick={() => reset()}>Restart</button>
    </div>
  );
}
```

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(<CountDown hours="1" minutes="45" />, document.getElementById('root'));
```
</details>

<br>[⬆ 回到顶部](#目录)

### FileDrop

Renders a file drag and drop component for a single file.

* Create a ref called `dropRef` for this component.
* Use the `React.useState()` hook to create the `drag` and `filename` variables, initialized to `false` and `''` respectively.
The variables `dragCounter` and `drag` are used to determine if a file is being dragged, while `filename` is used to store the dropped file's name.
* Create the `handleDrag`, `handleDragIn`, `handleDragOut` and `handleDrop` methods to handle drag and drop functionality, bind them to the component's context.
* Each of the methods will handle a specific event, the listeners for which are created and removed in the `React.useEffect()` hook and its attached `cleanup()` method.
* `handleDrag` prevents the browser from opening the dragged file, `handleDragIn` and `handleDragOut` handle the dragged file entering and exiting the component, while `handleDrop` handles the file being dropped and passes it to `props.handleDrop`.
* Return an appropriately styled `<div>` and use `drag` and `filename` to determine its contents and style.
* Finally, bind the `ref` of the created `<div>` to `dropRef`.

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
function FileDrop(props) {
  const [drag, setDrag] = React.useState(false);
  const [filename, setFilename] = React.useState('');
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
    let div = dropRef.current;
    div.addEventListener('dragenter', handleDragIn);
    div.addEventListener('dragleave', handleDragOut);
    div.addEventListener('dragover', handleDrag);
    div.addEventListener('drop', handleDrop);
    return function cleanup() {
      div.removeEventListener('dragenter', handleDragIn);
      div.removeEventListener('dragleave', handleDragOut);
      div.removeEventListener('dragover', handleDrag);
      div.removeEventListener('drop', handleDrop);
    };
  });

  return (
    <div
      ref={dropRef}
      className={drag ? 'filedrop drag' : filename ? 'filedrop ready' : 'filedrop'}
    >
      {filename && !drag ? <div>{filename}</div> : <div>Drop files here!</div>}
    </div>
  );
}
```

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(<FileDrop handleDrop={console.log} />, document.getElementById('root'));
```
</details>

<br>[⬆ 回到顶部](#目录)

### Mailto

Renders a link formatted to send an email.

* Destructure the component's props, use `email`, `subject` and `body` to create a `<a>` element with an appropriate `href` attribute.
* Render the link with `props.children` as its content.

```jsx
function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}>{props.children}</a>
  );
}
```

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(
  <Mailto email="foo@bar.baz" subject="Hello" body="Hello world!">
    Mail me!
  </Mailto>,
  document.getElementById('root')
);
```
</details>

<br>[⬆ 回到顶部](#目录)

### Modal

Renders a Modal component, controllable through events.
To use the component, import `Modal` only once and then display it by passing a boolean value to the `isVisible` attribute.

* Use object destructuring to set defaults for certain attributes of the modal component.
* Define `keydownHandler`, a method which handles all keyboard events, which can be used according to your needs to dispatch actions (e.g. close the modal when <kbd>Esc</kbd> is pressed).
* Use `React.useEffect()` hook to add or remove the `keydown` event listener, which calls `keydownHandler`.
* Use the `isVisible` prop to determine if the modal should be shown or not.
* Use CSS to style and position the modal component.

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

```jsx
function Modal({ isVisible = false, title, content, footer, onClose }){  
  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  function keydownHandler({ key }) {
    switch (key) {
      case 'Escape':  onClose(); break;
      default:
    }
  }

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
        <div className="modal-dialog"  onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body">
          <div className="modal-content">{ content }</div>
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  )
}
```

<details>
<summary>例子</summary>

```jsx
//Add the component to the render function
function App() {
  const [ isModal, setModal] = React.useState(false);
  
  return (
    <React.Fragment>
      <button onClick={()=> setModal(true)}>Click Here</button>
      <Modal 
        isVisible={ isModal }
        title= "Modal Title"
        content = {<p>Add your content here</p>}
        footer = {<button>Cancel</button>}
        onClose ={()=> setModal(false)}
      />
    </React.Fragment>
  )
}

ReactDOM.render( <App/>, document.getElementById('root'));
```
</details>

<br>[⬆ 回到顶部](#目录)

### StarRating

Renders a star rating component.

* Define a component, called `Star` that will render each individual star with the appropriate appearance, based on the parent component's state.
* In the `StarRating` component, use the `React.useState()` hook to define the `rating` and `selection` state variables with the initial values of `props.rating` (or `0` if invalid or not supplied) and `0`.
* Create a method, `hoverOver`, that updates `selected` and `rating` according to the provided `event`.
* Create a `<div>` to wrap the `<Star>` components, which are created using `Array.prototype.map` on an array of 5 elements, created using `Array.from`, and handle the `onMouseLeave` event to set `selection` to `0`, the `onClick` event to set the `rating` and the `onMouseOver` event to set `selection` to the `star-id` attribute of the `event.target` respectively.
* Finally, pass the appropriate values to each `<Star>` component (`starId` and `marked`).

```jsx
function Star({ marked, starId }) {
  return (
    <span star-id={starId} style={{ color: '#ff9933' }} role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
}

function StarRating(props) {
  const [rating, setRating] = React.useState(typeof props.rating == 'number' ? props.rating : 0);
  const [selection, setSelection] = React.useState(0);
  const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute('star-id'))
      val = event.target.getAttribute('star-id');
    setSelection(val);
  };
  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={(event) => setRating(event.target.getAttribute('star-id') || rating)}
      onMouseOver={hoverOver}
    >
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

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(<StarRating />, document.getElementById('root'));
ReactDOM.render(<StarRating rating={2} />, document.getElementById('root'));
```
</details>

<br>[⬆ 回到顶部](#目录)

### Tabs

Renders a tabbed menu and view component.

* Define a `TabItem` component, pass it to the `Tab` and remove unnecessary nodes expect for `TabItem` by identifying the function's name in `props.children`.
* Use the `React.useState()` hook to initialize the value of the `bindIndex` state variable to `props.defaultIndex`.
* Use `Array.prototype.map` on the collected nodes to render the `tab-menu` and `tab-view`.
* Define `changeTab`, which will be executed when clicking a `<button>` from the `tab-menu`.
* `changeTab` executes the passed callback, `onTabClick` and updates `bindIndex`, which in turn causes a re-render, evaluating the `style` and `className` of the `tab-view` items and `tab-menu` buttons according to their `index`.

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
function TabItem(props) {
  return <div {...props} />;
}

function Tabs(props) {
  const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);
  const changeTab = newIndex => {
    if (typeof props.onTabClick === 'function') props.onTabClick(newIndex);
    setBindIndex(newIndex);
  };
  const items = props.children.filter(item => item.type.name === 'TabItem');

  return (
    <div className="wrapper">
      <div className="tab-menu">
        {items.map(({ props: { index, label } }) => (
          <button onClick={() => changeTab(index)} className={bindIndex === index ? 'focus' : ''}>
            {label}
          </button>
        ))}
      </div>
      <div className="tab-view">
        {items.map(({ props }) => (
          <div
            {...props}
            className="tab-view_item"
            key={props.index}
            style={{ display: bindIndex === props.index ? 'block' : 'none' }}
          />
        ))}
      </div>
    </div>
  );
}
```

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(
  <Tabs defaultIndex="1" onTabClick={console.log}>
    <TabItem label="A" index="1">
      Lorem ipsum
    </TabItem>
    <TabItem label="B" index="2">
      Dolor sit amet
    </TabItem>
  </Tabs>,
  document.getElementById('root')
);
```
</details>

<br>[⬆ 回到顶部](#目录)

### Ticker

Renders a ticker component.

* Use the `React.useState()` hook to initialize the `ticker` state variable to `0`.
* Define two methods, `tick` and `reset`, that will periodically increment `timer` based on `interval` and reset `interval` respectively.
* Return a `<div>` with two `<button>` elements, each of which calls `tick` and `reset` respectively.

```jsx
function Ticker(props) {
  const [ticker, setTicker] = React.useState(0);
  let interval = null;

  const tick = () => {
    reset();
    interval = setInterval(() => {
      if (ticker < props.times) setTicker(ticker + 1);
      else clearInterval(interval);
    }, props.interval);
  };

  const reset = () => {
    setTicker(0);
    clearInterval(interval);
  };

  return (
    <div>
      <span style={{ fontSize: 100 }}>{this.state.ticker}</span>
      <button onClick={this.tick}>Tick!</button>
      <button onClick={this.reset}>Reset</button>
    </div>
  );
}
```

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(<Ticker times={5} interval={1000} />, document.getElementById('root'));
```
</details>

<br>[⬆ 回到顶部](#目录)

### Toggle

Renders a toggle component.

* Use the `React.useState()` to initialize the `isToggleOn` state variable to `false`.
* Use an object, `style`, to hold the styles for individual components and their states.
* Return a `<button>` that alters the component's `isToggledOn` when its `onClick` event is fired and determine the appearance of the content based on `isToggleOn`, applying the appropriate CSS rules from the `style` object.

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

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(<Toggle />, document.getElementById('root'));
```
</details>

<br>[⬆ 回到顶部](#目录)

### Tooltip

Renders a tooltip component.

* Use the `React.useState()` hook to create the `show` variable and initialize it to `false`.
* Return a `<div>` element that contains the `<div>` that will be the tooltip and the `children` passed to the component.
* Handle the `onMouseEnter` and `onMouseLeave` methods, by altering the value of the `show` variable.

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
function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div className="tooltip" style={show ? { visibility: 'visible' } : {}}>
        {text}
        <span className="tooltip-arrow" />
      </div>
      <div {...rest} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </div>
    </div>
  );
}
```

<details>
<summary>例子</summary>

```jsx
ReactDOM.render(
  <Tooltip text="Simple tooltip">
    <button>Hover me!</button>
  </Tooltip>,
  document.getElementById('root')
);
```
</details>

<br>[⬆ 回到顶部](#目录)


---

_This repository is a work in progress. If you want to contribute, please check the open issues to see where and how you can help out!_

_This README is built using [markdown-builder](https://github.com/30-seconds/markdown-builder)._

