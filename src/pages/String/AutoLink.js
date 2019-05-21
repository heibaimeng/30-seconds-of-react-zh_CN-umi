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

export default function() {
  return <AutoLink text="foo bar baz http://example.org barhttp://baidu.com 123" />;
}
