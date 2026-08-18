import { useEffect } from "react";
import type { LegalDoc } from "../data/legal";

interface LegalModalProps {
  doc: LegalDoc;
  onClose: () => void;
}

function LegalModal({ doc, onClose }: LegalModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-line bg-surface p-8"
      >
        <div className="flex flex-col gap-6">
          {doc.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="mb-2 font-medium text-text">{section.heading}</h3>
              <p className="text-sm leading-relaxed whitespace-pre-line text-muted">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LegalModal;
