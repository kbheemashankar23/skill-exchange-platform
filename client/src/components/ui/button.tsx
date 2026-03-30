export function Button({ children, ...props }: any) {
  return (
    <button
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        background: "#4f46e5",
        color: "white",
        border: "none",
        cursor: "pointer"
      }}
      {...props}
    >
      {children}
    </button>
  );
}
