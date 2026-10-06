type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
  children: React.ReactNode;
};

const styles = {
  primary: "bg-pink-soft text-ink hover:bg-blush",
  outline: "border border-ink text-ink hover:bg-pale",
};

export default function ButtonLink({ href, variant = "primary", external, children }: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
    </a>
  );
}
