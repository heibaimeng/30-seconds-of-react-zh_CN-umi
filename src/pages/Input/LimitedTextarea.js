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

export default function() {
  return <LimitedTextarea limit={32} value="Hello!" />;
}
