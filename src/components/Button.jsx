function Button({ label, onClick, variant = "primary", children }) {
  const styles =
    variant === "danger"
      ? "bg-red-600 hover:bg-red-700 text-white"
      : "bg-blue-600 hover:bg-blue-700 text-white";
  return (
    <button onClick={onClick} className={`rounded px-3 py-1.5 text-sm font-medium ${styles}`}>
      {label} {children}
    </button>
  );
}

export default Button;