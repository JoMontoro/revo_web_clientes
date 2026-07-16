import { useLanguage } from '../../context/LanguageContext';
import { useCases } from '../../data/content';
import styles from './UseCases.module.css';

export default function UseCases() {
  const { t } = useLanguage();

  return (
    <section className="section reveal" id="casos">
      <div className="container">
        <div className="section-head">
          <div className="copy">
            <span className="eyebrow">{t('casos.eyebrow')}</span>
            <h2>{t('casos.title')}</h2>
          </div>
        </div>
        <div className={styles.grid}>
          {useCases.map((c, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={c.image} alt="" loading="lazy" />
                <div className={styles.imgOverlay} />
                <span className={styles.stepNum}>{i + 1}</span>
                <div className={styles.iconBadge}>
                  <i className={`bi ${c.icon}`}></i>
                </div>
              </div>
              <div className={styles.body}>
                <h3>{t(c.titleKey)}</h3>
                <p className={styles.highlight}>{t(c.highlightKey)}</p>
                <p className={styles.desc}>{t(c.textKey)}</p>
                <div className={styles.products}>
                  <i className="bi bi-box-seam"></i>
                  <span>{t(c.productsKey)}</span>
                </div>
                <div className={styles.tags}>
                  <span className={styles.tag}>{t(c.tag1Key)}</span>
                  <span className={styles.tag}>{t(c.tag2Key)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
