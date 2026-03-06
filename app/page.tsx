import { portfolio } from "@/content/portfolio";
import styles from "./page.module.css";

export default function HomePage() {
  const { name, subhead, navItems, socialLinks } = portfolio;

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <h1 className={styles.name}>{name}</h1>
          <span className={styles.subhead}>{subhead}</span>
        </header>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navItem}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.socialGroup}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
