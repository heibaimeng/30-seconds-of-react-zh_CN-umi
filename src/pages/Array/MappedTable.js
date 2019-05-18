function MappedTable({ data, propertyNames }) {
  let filteredData = data.map(v =>
    Object.keys(v)
      .filter(k => propertyNames.includes(k))
      // 迭代为 acc 对象赋值：
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

export default function() {
  const people = [
    { name: 'John', surname: 'Smith', age: 42 },
    { name: 'Adam', surname: 'Smith', gender: 'male' },
  ];
  const propertyNames = ['name', 'surname', 'age'];
  return <MappedTable data={people} propertyNames={propertyNames} />;
}
