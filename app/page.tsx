import { Avatar } from "@/components/Avatar";
import { portfolio } from "@/content/portfolio";

export default function HomePage() {
  const {
    name,
    image,
    tagline,
    roleLine,
    company,
    companyUrl,
    links,
    footerYear,
  } = portfolio;

  const [first, last] = name.split(" ");
  const initials = `${first?.[0] ?? ""}${last?.[0] ?? ""}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-[600px] w-full mx-auto text-center">
        {/* Circle photo above name (Chris Shu style + photo) */}
        <div className="mb-8 flex justify-center">
          <Avatar src={image} alt={name} fallback={initials} />
        </div>

        {/* Name — same scale as Chris Shu / your HTML */}
        <h1 className="text-[clamp(2.75rem,10vw,5.75rem)] font-extrabold leading-[0.85] tracking-[-0.05em] mb-6">
          {first}
          <br />
          {last}
        </h1>

        {/* One line: tagline + role + company + links (Chris Shu exact style) */}
        <p className="text-[21px] font-normal text-white/90 tracking-[-0.02em] leading-[1.4] max-w-[600px] mx-auto">
          {tagline} {roleLine}{" "}
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            {company}
          </a>{" "}
          {links.map((link, i) => (
            <span key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
              {i < links.length - 1 ? " " : ""}
            </span>
          ))}
        </p>

        <footer className="mt-20 text-neutral-500 text-[13px]">
          © {footerYear} {name}
        </footer>
      </div>
    </div>
  );
}
