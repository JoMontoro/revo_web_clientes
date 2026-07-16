import { useLanguage } from '../../context/LanguageContext';
import styles from './Solution.module.css';

const features = [
  { img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=300&q=80', icon: 'bi-bag-check', titleKey: 'solucion.feat1.title', textKey: 'solucion.feat1.text' },
  { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80', icon: 'bi-bullseye', titleKey: 'solucion.feat2.title', textKey: 'solucion.feat2.text' },
  { img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&q=80', icon: 'bi-box-seam', titleKey: 'solucion.feat3.title', textKey: 'solucion.feat3.text' },
  { img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=300&q=80', icon: 'bi-link-45deg', titleKey: 'solucion.feat4.title', textKey: 'solucion.feat4.text' },
];

export default function Solution() {
  const { t } = useLanguage();

  return (
    <section className="section alt reveal" id="solucion">
      <div className="container">
        <div className={styles.band}>
          <div className={styles.bandInner}>
            <div>
              <span className="eyebrow">{t('solucion.eyebrow')}</span>
              <h2 style={{marginTop: '14px'}}>REVO Match Circular</h2>
              <p>{t('solucion.text')}</p>
              <a className="btn primary" href="#cotizar" style={{marginTop: '16px'}}>{t('solucion.cta')}</a>
            </div>
            <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&q=80" alt="REVO Match" style={{width:'160px',height:'160px',borderRadius:'20px',objectFit:'cover',boxShadow:'0 12px 32px rgba(0,0,0,.2)'}} />
          </div>
        </div>

        <div className={styles.features}>
          {features.map((f, i) => (
            <article key={i} className="feature-card">
              <img src={f.img} alt="" loading="lazy" style={{width:'100%',height:'80px',objectFit:'cover',borderRadius:'12px',marginBottom:'12px'}} />
              <div className={styles.featureIcon}><i className={`bi ${f.icon}`}></i></div>
              <h3>{t(f.titleKey)}</h3>
              <p>{t(f.textKey)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
