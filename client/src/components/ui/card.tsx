export function Card({ children }: any) {
  return (
    <div style={{ border: "1px solid #eee", padding: "16px", borderRadius: "10px" }}>
      {children}
    </div>
  );
}

export function CardHeader({ children }: any) {
  return <div style={{ marginBottom: "10px" }}>{children}</div>;
}

export function CardContent({ children }: any) {
  return <div>{children}</div>;
}

export function CardFooter({ children }: any) {
  return <div style={{ marginTop: "10px" }}>{children}</div>;
}
