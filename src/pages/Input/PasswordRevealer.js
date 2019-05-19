import React from "react";
function PasswordRevealer({ value }) {
  const [shown, setShown] = React.useState(false);

  return (
    <div>
      <input
        type={shown ? "text" : "password"}
        value={value}
        onChange={() => {}}
      />
      <button onClick={() => setShown(!shown)}>显示/隐藏</button>
    </div>
  );
}

export default function() {
  return <PasswordRevealer />;
}
