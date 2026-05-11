import styles from './Hero.module.css'

export default function Hero() {
  const handleScroll = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.particles}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className={styles.particle} style={{ '--i': i }} />
        ))}
      </div>
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>Технологии будущего</p>
        <h1 className={styles.title}>
          ИИ в спорте<br />
          <span className={styles.accent}>будущего</span>
        </h1>
        <p className={styles.subtitle}>
          Искусственный интеллект меняет правила игры. Анализируй данные,
          предсказывай результаты и выводи тренировки на новый уровень.
        </p>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={handleScroll}>
            Узнать больше
          </button>
          <button className={styles.btnSecondary}>
            Смотреть демо
          </button>
        </div>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Используется 500+ профессиональными командами
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span />
      </div>
    </section>
  )
}
