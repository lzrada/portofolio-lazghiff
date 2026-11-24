import { useState } from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}

export function Field({ label, name, type = "text", textarea = false }: Props) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  // The label floats up when the field is focused or has text
  const floating = focused || value.length > 0;

  const inputProps = {
    name,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className: `w-full rounded-2xl border border-white/10 bg-white/5 px-4 pb-3 text-sm text-foreground transition focus:border-primary/60 focus:outline-none ${floating ? "pt-6" : "pt-4"}`,
  };

  return (
    <label className="relative block">
      <span className={`pointer-events-none absolute left-4 transition-all ${floating ? "top-2 text-[10px] uppercase tracking-widest text-primary" : "top-4 text-sm text-muted-foreground"}`}>{label}</span>
      {textarea ? <textarea rows={5} {...inputProps} /> : <input type={type} {...inputProps} />}
    </label>
  );
}
