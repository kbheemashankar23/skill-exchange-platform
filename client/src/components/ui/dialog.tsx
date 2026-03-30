export function Dialog({ children }: any) {
  return <div>{children}</div>;
}

export function DialogTrigger({ children }: any) {
  return <div>{children}</div>;
}

export function DialogContent({ children }: any) {
  return <div style={{ border: "1px solid #ccc", padding: "20px" }}>{children}</div>;
}

export function DialogHeader({ children }: any) {
  return <div>{children}</div>;
}

export function DialogTitle({ children }: any) {
  return <h3>{children}</h3>;
}

export function DialogDescription({ children }: any) {
  return <p>{children}</p>;
}

export function DialogFooter({ children }: any) {
  return <div>{children}</div>;
}
