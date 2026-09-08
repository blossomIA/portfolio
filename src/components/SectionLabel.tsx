type SectionLabelProps = {
  number: string;
  label: string;
};

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-label-lg leading-[15px]">
      <span className="text-accent-purple">{number}</span>
      <span aria-hidden className="block h-px w-8 bg-border-soft" />
      <span className="text-muted">{label}</span>
    </div>
  );
}
