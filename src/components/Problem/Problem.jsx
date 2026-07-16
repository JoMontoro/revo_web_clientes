import { useLanguage } from '../../context/LanguageContext';
import styles from './Problem.module.css';

export default function Problem() {
  const { t } = useLanguage();

  return (
    <section className={`section reveal ${styles.section}`} id="problema">
      <div className="container">
        <div className="section-head">
          <div className="copy">
            <span className="eyebrow">{t('problema.eyebrow')}</span>
            <h2>{t('problema.title')}</h2>
            <p className="lead">{t('problema.subtitle')}</p>
          </div>
        </div>
        <div className={styles.grid}>
          <article className="problem-card">
            <div className={styles.num}>01 · <span>{t('problema.card1.title')}</span></div>
            <h3>{t('problema.card1.heading')}</h3>
            <p>{t('problema.card1.text')}</p>
          </article>
          <article className="problem-card">
            <div className={styles.num}>02 · <span>{t('problema.card2.title')}</span></div>
            <h3>{t('problema.card2.heading')}</h3>
            <p>{t('problema.card2.text')}</p>
          </article>
          <article className="problem-card">
            <div className={styles.num}>03 · <span>{t('problema.card3.title')}</span></div>
            <h3>{t('problema.card3.heading')}</h3>
            <p>{t('problema.card3.text')}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
