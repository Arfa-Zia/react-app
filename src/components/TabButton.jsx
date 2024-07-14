export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <button
      onClick={onSelect}
      className={"menubtn" + " " + (isSelected ? "active" : undefined)}
    >
      {children}
    </button>
  );
}
