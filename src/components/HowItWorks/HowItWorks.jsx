import { useLanguage } from '../../context/LanguageContext';
import styles from './HowItWorks.module.css';
import { howSteps } from '../../data/content';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="section reveal" id="como-funciona">
      <div className="container">
        <div className="section-head">
          <div className="copy">
            <h2>{t('como.title')}</h2>
          </div>
        </div>
        <div className={styles.how}>
          {howSteps.map((step, i) => (
            <article key={i} className={styles.step}>
              <img src={step.image} alt="" loading="lazy" style={{width:'100%',height:'100px',objectFit:'cover',borderRadius:'14px',marginBottom:'12px'}} />
              <div className={styles.stepNum}>{i + 1}</div>
              <h3>{t(step.titleKey)}</h3>
              <p>{t(step.descKey)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
