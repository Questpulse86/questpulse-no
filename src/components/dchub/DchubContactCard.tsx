import { dchubBrand } from "@/lib/dchub-content";

export function DchubContactCard({ locale }: { locale: "no" | "en" }) {
  const no = locale === "no";

  return (
    <aside className="rounded-[20px] border border-dch-line bg-white p-8 text-dch-ink sm:p-9">
      <h3 className="font-display text-[22px] font-bold">
        {no ? "Skriv direkte til Linda" : "Write directly to Linda"}
      </h3>
      <p className="mt-4 text-[16px] leading-[1.8] text-dch-muted">
        {no
          ? "Beskriv kort hva du står i, så svarer jeg normalt innen én virkedag."
          : "Briefly describe what you are facing, and I will normally reply within one business day."}
      </p>
      <a
        href={`mailto:${dchubBrand.email}`}
        className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-md bg-dch-accent-strong px-6 py-3 text-[15px] font-bold text-white transition-colors hover:bg-dch-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dch-accent-strong focus-visible:ring-offset-2"
      >
        {no ? "Send e-post" : "Send an email"}
      </a>
      <p className="mt-5 text-xs leading-relaxed text-dch-muted">
        {no
          ? "Ikke del sensitiv helse- eller personinformasjon i e-post."
          : "Please do not share sensitive health or personal information by email."}
      </p>
    </aside>
  );
}
