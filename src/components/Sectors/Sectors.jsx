import { useLanguage } from '../../context/LanguageContext';
import styles from './Sectors.module.css';
import { sectors } from '../../data/content';

export default function Sectors() {
  const { t } = useLanguage();

  return (
    <section className="section alt reveal" id="sectores">
      <div className="container">
        <div className="section-head">
          <div className="copy">
            <span className="eyebrow">{t('sectores.eyebrow')}</span>
            <h2>{t('sectores.title')}</h2>
          </div>
        </div>
        <div className={styles.grid}>
          {sectors.map((s, i) => (
            <article key={i} className="sector-card">
              <img src={s.image} alt="" loading="lazy" style={{width:'100%',height:'80px',objectFit:'cover',borderRadius:'14px',marginBottom:'10px'}} />
              <span><i className={`bi ${s.icon}`}></i></span>
              <h3>{t(s.nameKey)}</h3>
              <small>{t(s.descKey)}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
