import { useLanguage } from '../../context/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.hero} id="inicio">
        <div className="container hero-grid">
          <div className={styles.copy}>
            <span className="eyebrow">{t('hero.eyebrow')}</span>
            <h1>{t('hero.title')}</h1>
            <p className="lead">{t('hero.subtitle')}</p>
            <div className={styles.actions}>
              <a className="btn primary" href="#cotizar">{t('hero.cta1')}</a>
              <a className="btn secondary" href="#productos">{t('hero.cta2')}</a>
            </div>
            <div className={styles.trustRow}>
              <span><i className="bi bi-check-circle-fill" style={{color:'var(--brand)',fontSize:'14px'}}></i> <span>{t('hero.trust1')}</span></span>
              <span><i className="bi bi-check-circle-fill" style={{color:'var(--brand)',fontSize:'14px'}}></i> <span>{t('hero.trust2')}</span></span>
              <span><i className="bi bi-check-circle-fill" style={{color:'var(--brand)',fontSize:'14px'}}></i> <span>{t('hero.trust3')}</span></span>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.orbit}>
              <div className={styles.centerCard}>
                <div>
                  <strong>NFU</strong>
                  <small>{t('hero.orbit.label')}</small>
                </div>
              </div>
              <div className={`${styles.orbitItem} o1`}><div className={styles.orbitIcon}><i className="bi bi-gear-wide-connected"></i></div><b>{t('hero.orbit.o1')}</b><small>{t('hero.orbit.o1d')}</small></div>
              <div className={`${styles.orbitItem} o2`}><div className={styles.orbitIcon}><i className="bi bi-search-heart"></i></div><b>{t('hero.orbit.o2')}</b><small>{t('hero.orbit.o2d')}</small></div>
              <div className={`${styles.orbitItem} o3`}><div className={styles.orbitIcon}><i className="bi bi-truck"></i></div><b>{t('hero.orbit.o3')}</b><small>{t('hero.orbit.o3d')}</small></div>
              <div className={`${styles.orbitItem} o4`}><div className={styles.orbitIcon}><i className="bi bi-arrow-repeat"></i></div><b>{t('hero.orbit.o4')}</b><small>{t('hero.orbit.o4d')}</small></div>
              <div className={`${styles.orbitItem} o5`}><div className={styles.orbitIcon}><i className="bi bi-grid-3x3-gap-fill"></i></div><b>{t('hero.orbit.o5')}</b><small>{t('hero.orbit.o5d')}</small></div>
            </div>
          </div>
        </div>

        <div className="container stats">
          <div className="stat"><strong>6+</strong><span>{t('hero.stat1')}</span></div>
          <div className="stat"><strong>5</strong><span>{t('hero.stat2')}</span></div>
          <div className="stat"><strong>B2B</strong><span>{t('hero.stat3')}</span></div>
          <div className="stat"><strong>100%</strong><span>{t('hero.stat4')}</span></div>
        </div>
      </section>
    </>
  );
}
