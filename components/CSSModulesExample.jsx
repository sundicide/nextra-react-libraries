import styles from './CSSModulesExample.module.css'

export default function CSSModulesExample() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CSS Modules Example</h1>
      <p className={styles.subtitle}>
        Modern CSS-in-JS alternative using CSS Modules
      </p>

      <button className={styles.button}>Get Started</button>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h3>Fast</h3>
          <p>Optimized for performance with CSS Modules</p>
        </div>
        <div className={styles.card}>
          <h3>Flexible</h3>
          <p>Works with any framework and supports all CSS features</p>
        </div>
        <div className={styles.card}>
          <h3>Developer Experience</h3>
          <p>Great debugging experience with source maps</p>
        </div>
      </div>
    </div>
  )
}