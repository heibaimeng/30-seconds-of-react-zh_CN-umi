import React from "react";

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

export default function() {
  return <LimitedWordTextarea limit={5} value="Hello there!" />;
}
