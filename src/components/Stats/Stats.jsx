import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Stats.module.css'

const stats = [
  { value: 87, suffix: '%', label: 'Точность прогнозов', description: 'Точность предсказания результатов матчей' },
  { value: 40, suffix: '%', label: 'Снижение травм', description: 'Сокращение спортивных травм благодаря ИИ-мониторингу' },
  { value: 35, suffix: '%', label: 'Рост эффективности', description: 'Ускорение прогресса атлетов при ИИ-коучинге' },
  { value: 500, suffix: '+', label: 'Команд в мире', description: 'Профессиональных клубов используют нашу платформу' },
]

function Counter({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!isVisible) return
    const duration = 2000
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isVisible, target])

  return (
    <span className={styles.number}>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section className={styles.stats}>
      <div className={styles.bg} />
      <div className="container">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''} ${styles.header}`}>
          <p className={styles.label}>Статистика</p>
          <h2 className={styles.title}>
            Цифры говорят<br />
            <span className={styles.accent}>сами за себя</span>
          </h2>
        </div>
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} globalVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index, globalVisible }) {
  const [ref, isVisible] = useIntersectionObserver()
  const active = isVisible || globalVisible

  return (
    <div
      ref={ref}
      className={`${styles.card} fade-in ${active ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={styles.cardInner}>
        <Counter target={stat.value} suffix={stat.suffix} isVisible={active} />
        <p className={styles.cardLabel}>{stat.label}</p>
        <p className={styles.cardDesc}>{stat.description}</p>
      </div>
    </div>
  )
}
