export function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="section-stack">
      <h3 className="section-label">{label}</h3>
      {children}
    </div>
  );
}
