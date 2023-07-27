export default function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round(numPackedItems / numItems) * 100;
  return !items.length ? (
    <p className="footer">
      <em>🚀 Start Adding some items to your packing list</em>
    </p>
  ) : (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to Go"
          : `😎 You have ${numItems} items in your list, and you already packed ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
