export function Select({ children, value, onChange }: any) {
  return <select value={value} onChange={(e) => onChange(e.target.value)}>{children}</select>;
}

export function SelectItem({ value, children }: any) {
  return <option value={value}>{children}</option>;
}

export function SelectTrigger({ children }: any) {
  return <div>{children}</div>;
}

export function SelectContent({ children }: any) {
  return <>{children}</>;
}

export function SelectValue() {
  return null;
}
