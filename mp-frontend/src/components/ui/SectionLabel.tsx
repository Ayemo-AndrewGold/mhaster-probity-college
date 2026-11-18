import React from "react";

export interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-3 text-[11px] font-medium uppercase tracking-[.14em] text-[#92600a] ${className}`.trim()}>
      <span aria-hidden="true" className="h-px w-8 shrink-0 bg-[#f4c430]" />
      <span>{children}</span>
    </div>
  );
};

export default SectionLabel;
