export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full bg-sage text-campo font-jost text-xs font-medium tracking-widest uppercase mb-4">
      {children}
    </span>
  );
}
