import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { products } from '../../data/products';
import ProductModal from '../ProductModal/ProductModal';
import styles from './Products.module.css';

const filterKeys = [
  { value: 'todos', key: 'productos.filterAll' },
  { value: 'automotriz', key: 'productos.filterAuto' },
  { value: 'mineria', key: 'productos.filterMin' },
  { value: 'construccion', key: 'productos.filterConst' },
  { value: 'municipal', key: 'productos.filterMun' },
  { value: 'deportivo', key: 'productos.filterDep' },
];

export default function Products() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeFilter === 'todos'
    ? products
    : products.filter((p) => p.sectors.includes(activeFilter));

  return (
    <>
      <section className="section reveal" id="productos">
        <div className="container">
          <div className="section-head">
            <div className="copy">
              <span className="eyebrow">{t('productos.eyebrow')}</span>
              <h2>{t('productos.title')}</h2>
              <p className="lead">{t('productos.subtitle')}</p>
            </div>
          </div>

          <div className={styles.filters}>
            {filterKeys.map((f) => (
              <button
                key={f.value}
                className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {t(f.key)}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className={`product-card ${styles.card}`}
                onClick={() => setSelectedProduct(product)}
              >
                <div className={styles.art}>
                  <img src={product.image} alt={product.alt} loading="lazy" />
                </div>
                <div className={styles.body}>
                  <div className={styles.tags}>
                    {product.tagKeys.map((tk, i) => (
                      <span key={i} className="tag">{t(tk)}</span>
                    ))}
                  </div>
                  <h3>{t(product.nameKey)}</h3>
                  <p>{t(product.descKey)}</p>
                  <p className={styles.benefit}>{t(product.benefitKey)}</p>
                  <div className={styles.footer}>
                    <button
                      className="btn outline small product-detail-btn"
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                    >
                      {t('productos.detailBtn')}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}
