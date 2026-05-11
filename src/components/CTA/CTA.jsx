import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './CTA.module.css'

export default function CTA() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section className={styles.cta}>
      <div className="container">
        <div
          ref={ref}
          className={`${styles.inner} fade-in ${isVisible ? 'visible' : ''}`}
        >
          <div className={styles.glow} />
          <p className={styles.label}>Готовы начать?</p>
          <h2 className={styles.title}>
            Выведите вашу команду<br />
            <span className={styles.accent}>на новый уровень</span>
          </h2>
          <p className={styles.text}>
            Присоединяйтесь к 500+ профессиональным командам, которые уже используют
            ИИ-технологии для победы. Первые 30 дней — бесплатно.
          </p>
          <div className={styles.actions}>
            <button className={styles.btnPrimary}>Начать сейчас</button>
            <button className={styles.btnSecondary}>Запросить демо →</button>
          </div>
          <p className={styles.note}>Без привязки карты · Отмена в любой момент</p>
        </div>
      </div>
    </section>
  )
}
