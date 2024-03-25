export default function List() {
  const items = [
    "porridge",
    "pizza",
    "cheesecake",
    "pancakes",
    "granola",
    "carbonara",
    "pastapesto",
    "nachos",
  ];
  const listItems = items.map((item) => <li>{item}</li>);
  return (
    <div>
      <h1>Weekly meals</h1>
      <ul>{listItems}</ul>
    </div>
  );
}
