export function ContactButton({ label = "Contact Me" }: { label?: string }) {
  return (
    <a
      href="mailto:kc893825@gmail.com"
      className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base hover:scale-105 active:scale-95 shimmer-btn"
      style={{
        background:
          "linear-gradient(90deg, #18011F 0%, #B600A8 25%, #7621B0 50%, #BE4C00 75%, #18011F 100%)",
        boxShadow:
          "0px 4px 16px rgba(182, 0, 168, 0.35), 4px 4px 12px #7721B1 inset",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease",
      }}
      data-cursor-text="Mail"
    >
      {label}
    </a>
  );
}

export function LiveProjectButton({ href = "#", label = "Live Project" }: { href?: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-block rounded-full border-2 font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-95"
      style={{
        borderColor: "var(--border-color)",
        color: "var(--text-main)",
        transition: "transform 0.2s ease, border-color 0.2s ease, background 0.2s ease",
      }}
      data-cursor-text="Live"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-color)";
        e.currentTarget.style.background = "rgba(182,0,168,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-color)";
        e.currentTarget.style.background = "transparent";
      }}
    >
      {label}
    </a>
  );
}

export function GithubProjectButton({ href = "#" }: { href?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-block rounded-full border-2 font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-95"
      style={{
        borderColor: "var(--border-color)",
        color: "var(--text-main)",
        transition: "transform 0.2s ease, border-color 0.2s ease, background 0.2s ease",
      }}
      data-cursor-text="Code"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-color)";
        e.currentTarget.style.background = "rgba(182,0,168,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-color)";
        e.currentTarget.style.background = "transparent";
      }}
    >
      GitHub Code
    </a>
  );
}