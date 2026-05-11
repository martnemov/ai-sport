import styles from './Footer.module.css'

const socials = [
  { name: 'Twitter', href: '#', icon: '𝕏' },
  { name: 'Telegram', href: '#', icon: '✈' },
  { name: 'GitHub', href: '#', icon: '⌥' },
  { name: 'LinkedIn', href: '#', icon: 'in' },
]

const links = [
  { label: 'О нас', href: '#about' },
  { label: 'Преимущества', href: '#benefits' },
  { label: 'Статистика', href: '#stats' },
  { label: 'Контакты', href: '#' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.brand}>
              <span className={styles.logo}>AI<span className={styles.logoAccent}>Sport</span></span>
              <p className={styles.tagline}>Будущее спорта начинается здесь</p>
            </div>
            <nav className={styles.nav}>
              {links.map(l => (
                <a key={l.label} href={l.href} className={styles.navLink}>{l.label}</a>
              ))}
            </nav>
            <div className={styles.socials}>
              {socials.map(s => (
                <a key={s.name} href={s.href} className={styles.socialLink} aria-label={s.name}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>© {new Date().getFullYear()} AISport. Все права защищены.</p>
          <div className={styles.legal}>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
