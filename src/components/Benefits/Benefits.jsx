import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Benefits.module.css'

const benefits = [
  { icon: '🧠', title: 'Умная аналитика', text: 'Глубокий анализ каждого движения атлета через компьютерное зрение и нейросети.' },
  { icon: '⚕️', title: 'Защита от травм', text: 'Система раннего предупреждения предсказывает риск травм на 3–4 недели вперед.' },
  { icon: '📈', title: 'Рост показателей', text: 'Спортсмены, использующие ИИ-коучинг, показывают прогресс на 35% быстрее.' },
  { icon: '🌍', title: 'Глобальная база', text: 'Доступ к данным 10 000+ спортсменов из 50 стран для сравнительного анализа.' },
  { icon: '⏱️', title: 'Реальное время', text: 'Мгновенная обратная связь во время матча или тренировки для корректировки стратегии.' },
  { icon: '🔒', title: 'Безопасность данных', text: 'Все персональные данные атлетов защищены шифрованием военного уровня.' },
]

export default function Benefits() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section className={styles.benefits}>
      <div className="container">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''} ${styles.header}`}>
          <p className={styles.label}>Преимущества</p>
          <h2 className={styles.title}>
            Почему выбирают<br />
            <span className={styles.accent}>ИИ-технологии</span>
          </h2>
        </div>
        <ul className={styles.grid}>
          {benefits.map((b, i) => (
            <BenefitItem key={b.title} item={b} delay={i * 100} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function BenefitItem({ item, delay }) {
  const [ref, isVisible] = useIntersectionObserver()
  return (
    <li
      ref={ref}
      className={`${styles.item} fade-in ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.iconWrap}>
        <span className={styles.icon}>{item.icon}</span>
      </div>
      <div>
        <h3 className={styles.itemTitle}>{item.title}</h3>
        <p className={styles.itemText}>{item.text}</p>
      </div>
    </li>
  )
}
