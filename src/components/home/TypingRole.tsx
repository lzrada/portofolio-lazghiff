import { useEffect, useState } from "react";

const roles = ["Creative Developer", "Motion Designer", "Frontend Engineer", "UI Architect"];

export function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        // Typing forward
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1500);
      } else {
        // Deleting backward
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <span className="inline-flex items-center">
      <span className="text-gradient">{text}</span>
      <span className="ml-1 inline-block h-[0.9em] w-[3px] animate-pulse bg-primary" />
    </span>
  );
}
