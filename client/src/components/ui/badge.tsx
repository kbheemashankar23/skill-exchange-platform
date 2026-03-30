export function Badge({ children }: any) {
  return (
    <span
      style={{
        background: "#eee",
        padding: "4px 8px",
        borderRadius: "6px",
        fontSize: "12px"
      }}
    >
      {children}
    </span>
  );
}
