import { useLanguage } from '../../context/LanguageContext';
import styles from './ProductModal.module.css';

export default function ProductModal({ product, onClose }) {
  const { t, lang } = useLanguage();
  const d = product.detail;

  return (
    <div className={`modal open ${styles.modal}`} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-card">
        <div className="modal-head">
          <div>
            <span className="eyebrow">{t('modal.eyebrow')}</span>
            <h3 style={{marginTop: '12px'}}>{t(product.nameKey)}</h3>
          </div>
          <button className="icon-btn" onClick={onClose}><i className="bi bi-x-lg"></i></button>
        </div>

        <div className={styles.bodyGrid}>
          <div className={styles.top}>
            <div className={styles.icon}><i className={`bi ${d.icon}`}></i></div>
            <div>
              <p className={styles.tagline}>{d.tagline[lang]}</p>
              <p className={styles.ideal}><strong>{d.use[lang]}</strong><br/>{d.ideal[lang]}</p>
            </div>
          </div>

          <div className={styles.benefit}>
            <strong>{lang === 'en' ? 'Why this product?' : '¿Por qué elegirlo?'}</strong> {d.benefit[lang]}
          </div>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h4>{lang === 'en' ? 'Application' : 'Aplicación'}</h4>
              <p>{d.use[lang]}</p>
            </div>
            <div className={styles.card}>
              <h4>{lang === 'en' ? 'Best for' : 'Ideal para'}</h4>
              <p>{d.ideal[lang]}</p>
            </div>
            <div className={styles.card}>
              <h4>{lang === 'en' ? 'Validation' : 'Validación'}</h4>
              <p>{d.validation[lang]}</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.specsCard}`}>
            <h4>{lang === 'en' ? 'Key specs' : 'Especificaciones clave'}</h4>
            <ul className={styles.specs}>
              {d.specs[lang].map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>

          <div className={styles.note}>
            <strong>{lang === 'en' ? 'Advantage:' : 'Ventaja:'}</strong> {d.advantage[lang]}
          </div>
        </div>

        <div className="form-actions">
          <button className="btn secondary" onClick={onClose}>{t('modal.close')}</button>
          <a href="#cotizar" className="btn primary" onClick={onClose}>{t('modal.quote')}</a>
        </div>
      </div>
    </div>
  );
}
