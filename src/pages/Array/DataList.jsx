function DataList({ isOrdered, data }) {
  const list = data.map((val, i) => <li key={`${i}_${val}`}>{val}</li>);
  return isOrdered ? <ol>{list}</ol> : <ul>{list}</ul>;
}

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
