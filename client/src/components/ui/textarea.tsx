export function Textarea(props: any) {
  return (
    <textarea
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc"
      }}
      {...props}
    />
  );
}
