import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './About.module.css'

const cards = [
  {
    icon: '📊',
    title: 'Анализ данных',
    description:
      'ИИ обрабатывает миллионы спортивных показателей в реальном времени: скорость, биометрия, тактические паттерны и многое другое.',
    color: 'blue',
  },
  {
    icon: '🎯',
    title: 'Предсказание результатов',
    description:
      'Алгоритмы машинного обучения прогнозируют исходы матчей с точностью до 87%, анализируя историю команд и условия игры.',
    color: 'purple',
  },
  {
    icon: '⚡',
    title: 'Оптимизация тренировок',
    description:
      'Персонализированные программы тренировок, адаптирующиеся к физическому состоянию атлета, снижают риск травм на 40%.',
    color: 'green',
  },
]

export default function About() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <p className={styles.label}>О технологии</p>
          <h2 className={styles.title}>
            Как ИИ трансформирует<br />
            <span className={styles.accent}>мировой спорт</span>
          </h2>
          <p className={styles.description}>
            Искусственный интеллект открывает новую эру в профессиональном спорте —
            от аналитики выступлений до индивидуализированных тренировочных систем.
          </p>
        </div>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <Card key={card.title} card={card} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ card, delay }) {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <article
      ref={ref}
      className={`${styles.card} ${styles[`card--${card.color}`]} fade-in ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.cardIcon}>{card.icon}</div>
      <h3 className={styles.cardTitle}>{card.title}</h3>
      <p className={styles.cardText}>{card.description}</p>
      <div className={styles.cardGlow} />
    </article>
  )
}
