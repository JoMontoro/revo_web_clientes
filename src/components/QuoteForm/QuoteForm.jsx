import { useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useToast } from '../../context/ToastContext';
import { calculateMatchFull } from '../../utils/matching';
import styles from './QuoteForm.module.css';

export default function QuoteForm({ onSaveLead }) {
  const { t, lang } = useLanguage();
  const { showToast } = useToast();
  const formRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const matchResult = calculateMatchFull(data);
    if (!matchResult) return;

    const full = { ...data, ...matchResult, createdAt: new Date().toISOString() };
    setResult(full);
    setFormData(data);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const handleSave = () => {
    if (!result) return;
    const leads = JSON.parse(localStorage.getItem('revo_leads') || '[]');
    leads.push(result);
    localStorage.setItem('revo_leads', JSON.stringify(leads));
    onSaveLead?.();
    showToast(lang === 'en' ? 'Request saved.' : 'Solicitud guardada.');
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePDF = async () => {
    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');
      const el = document.getElementById('proposalTemplate');
      if (!el) return;
      el.style.display = 'block';
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      el.style.width = '800px';

      const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = (canvas.height * pdfW) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
      pdf.save(`REVO-Propuesta-${result?.empresa || 'documento'}.pdf`);

      el.style.display = 'none';
      el.style.position = '';
      el.style.left = '';
      el.style.width = '';
      showToast(lang === 'en' ? 'PDF downloaded.' : 'PDF descargado.');
    } catch {
      showToast(lang === 'en' ? 'Error generating PDF.' : 'Error al generar PDF.');
    }
  };

  const daysLabel = result ? (lang === 'en' ? `${result.days} days` : `${result.days} días`) : '';
  const resultText = result
    ? (lang === 'en'
      ? `The request from ${result.empresa} shows a good match with ${result.product}. The final proposal should validate specifications, stock, and transportation.`
      : `La solicitud de ${result.empresa} presenta una buena coincidencia con ${result.product}. La propuesta final deberá validar especificaciones, stock y transporte.`)
    : '';

  return (
    <section className="section alt" id="cotizar">
      <div className="container quote-wrap">
        <aside className="quote-info">
          <h2 style={{marginTop: '16px'}}>{t('cotizar.title')}</h2>
          <p>{t('cotizar.subtitle')}</p>
          <div className="quote-points">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="quote-point">
                <i className="bi bi-check-circle-fill" style={{color: '#fff', fontSize: '14px'}}></i>
                <span>{t(`cotizar.point${i}`)}</span>
              </div>
            ))}
          </div>
        </aside>

        <div className="form-card">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label>{t('cotizar.form.company')}</label>
                <input name="empresa" required placeholder="Nombre de la empresa" />
              </div>
              <div className="field">
                <label>{t('cotizar.form.sector')}</label>
                <select name="sector" required>
                  <option value="">{t('cotizar.form.select')}</option>
                  <option value="automotriz">{t('cotizar.form.auto')}</option>
                  <option value="mineria">{t('cotizar.form.min')}</option>
                  <option value="construccion">{t('cotizar.form.const')}</option>
                  <option value="municipal">{t('cotizar.form.mun')}</option>
                  <option value="deportivo">{t('cotizar.form.dep')}</option>
                </select>
              </div>
              <div className="field">
                <label>{t('cotizar.form.need')}</label>
                <select name="necesidad" required>
                  <option value="">{t('cotizar.form.select')}</option>
                  <option value="seguridad">{t('cotizar.form.needs1')}</option>
                  <option value="piso">{t('cotizar.form.needs2')}</option>
                  <option value="estacionamiento">{t('cotizar.form.needs3')}</option>
                  <option value="materia">{t('cotizar.form.needs4')}</option>
                  <option value="cables">{t('cotizar.form.needs5')}</option>
                </select>
              </div>
              <div className="field">
                <label>{t('cotizar.form.qty')}</label>
                <input name="cantidad" type="number" min="1" required placeholder="Ej. 500" />
              </div>
              <div className="field">
                <label>{t('cotizar.form.city')}</label>
                <select name="ciudad" required>
                  <option value="">{t('cotizar.form.select')}</option>
                  <option value="Lima">Lima</option>
                  <option value="Chiclayo">Chiclayo</option>
                  <option value="Huancayo">Huancayo</option>
                  <option value="Arequipa">Arequipa</option>
                  <option value="Otra">{t('cotizar.form.other')}</option>
                </select>
              </div>
              <div className="field">
                <label>{t('cotizar.form.email')}</label>
                <input name="correo" type="email" required placeholder="contacto@empresa.com" />
              </div>
              <div className="field full">
                <label>{t('cotizar.form.specs')}</label>
                <textarea name="detalle" rows="4" placeholder="Describe dimensiones, carga, uso, exposición a combustibles, ubicación u otro requisito."></textarea>
              </div>
            </div>
            <div className="form-actions">
              <button type="reset" className="btn secondary">{t('cotizar.form.clear')}</button>
              <button className="btn primary">{t('cotizar.form.submit')}</button>
            </div>
          </form>

          {result && (
            <div ref={resultRef} className={`result-card ${styles.resultCard}`}>
              <h3>{lang === 'en' ? 'Recommended solution:' : 'Solución recomendada:'} {result.product}</h3>
              <p className="muted">{resultText}</p>
              <div className="result-grid">
                <div className="result-box"><span className="muted">{t('cotizar.result.compat')}</span><strong>{result.match}%</strong></div>
                <div className="result-box"><span className="muted">{t('cotizar.result.eta')}</span><strong>{daysLabel}</strong></div>
                <div className="result-box"><span className="muted">{t('cotizar.result.mode')}</span><strong>{result.mode}</strong></div>
                <div className="result-box"><span className="muted">{t('cotizar.result.priority')}</span><strong>{result.priority}</strong></div>
              </div>

              <div className="share-actions">
                <button className="share-btn" onClick={handleSave}><i className="bi bi-bookmark-check"></i> {t('cotizar.save')}</button>
                <button className="share-btn" onClick={handlePDF}><i className="bi bi-file-earmark-pdf"></i> {t('cotizar.pdf.btn')}</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hidden proposal template for PDF generation */}
      {result && formData && (
        <div id="proposalTemplate" style={{display:'none'}}>
          <div style={{padding:'48px 40px',fontFamily:'Inter,system-ui,sans-serif',maxWidth:'800px',margin:'auto',background:'#fff',color:'#16231d'}}>
            <div style={{textAlign:'center',marginBottom:'32px',borderBottom:'3px solid #168a58',paddingBottom:'24px'}}>
              <div style={{fontSize:'48px',fontWeight:900,color:'#168a58',letterSpacing:'-.04em'}}>R</div>
              <h1 style={{fontSize:'28px',color:'#16231d',margin:'8px 0 0'}}>REVO Match Circular</h1>
              <p style={{color:'#65736c',fontSize:'14px',margin:'4px 0 0'}}>{lang === 'en' ? 'Commercial solution proposal' : 'Propuesta de solución comercial'}</p>
            </div>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'14px'}}>
              <tbody>
                {[
                  [lang==='en'?'Company':'Empresa', formData.empresa],
                  ['Sector', formData.sector],
                  [lang==='en'?'Main need':'Necesidad principal', formData.necesidad],
                  [lang==='en'?'Approximate quantity':'Cantidad aproximada', formData.cantidad],
                  [lang==='en'?'Delivery city':'Ciudad de entrega', formData.ciudad],
                  [lang==='en'?'Contact email':'Correo de contacto', formData.correo],
                  [lang==='en'?'Specifications':'Especificaciones', formData.detalle || (lang==='en'?'Not specified':'No se especificó')],
                ].map(([label, value], i) => (
                  <tr key={i}>
                    <td style={{padding:'10px 12px',borderBottom:'1px solid #dbe7e0',fontWeight:700,width:'180px',color:'#0d5e3c'}}>{label}</td>
                    <td style={{padding:'10px 12px',borderBottom:'1px solid #dbe7e0'}}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{marginTop:'32px',padding:'24px',background:'#e7f6ef',borderRadius:'16px',border:'1px solid #bfe5cf'}}>
              <h2 style={{fontSize:'20px',color:'#0d5e3c',margin:'0 0 16px'}}>{lang==='en'?'Recommended solution':'Solución recomendada'}</h2>
              <p style={{fontSize:'18px',fontWeight:800,color:'#168a58',margin:'0 0 16px'}}>{result.product}</p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'12px'}}>
                <div style={{padding:'14px',background:'#fff',borderRadius:'12px',textAlign:'center'}}><div style={{fontSize:'11px',color:'#65736c',fontWeight:700}}>{t('cotizar.result.compat')}</div><div style={{fontSize:'22px',fontWeight:900,color:'#168a58',marginTop:'4px'}}>{result.match}%</div></div>
                <div style={{padding:'14px',background:'#fff',borderRadius:'12px',textAlign:'center'}}><div style={{fontSize:'11px',color:'#65736c',fontWeight:700}}>{t('cotizar.result.eta')}</div><div style={{fontSize:'22px',fontWeight:900,color:'#168a58',marginTop:'4px'}}>{daysLabel}</div></div>
                <div style={{padding:'14px',background:'#fff',borderRadius:'12px',textAlign:'center'}}><div style={{fontSize:'11px',color:'#65736c',fontWeight:700}}>{t('cotizar.result.mode')}</div><div style={{fontSize:'22px',fontWeight:900,color:'#168a58',marginTop:'4px'}}>{result.mode}</div></div>
                <div style={{padding:'14px',background:'#fff',borderRadius:'12px',textAlign:'center'}}><div style={{fontSize:'11px',color:'#65736c',fontWeight:700}}>{t('cotizar.result.priority')}</div><div style={{fontSize:'22px',fontWeight:900,color:'#168a58',marginTop:'4px'}}>{result.priority}</div></div>
              </div>
            </div>
            <div style={{marginTop:'32px',textAlign:'center',color:'#65736c',fontSize:'12px',borderTop:'1px solid #dbe7e0',paddingTop:'16px'}}>
              {lang==='en'?'Generated on':'Generado el'} {new Date(result.createdAt).toLocaleDateString(lang==='en'?'en-US':'es-PE')}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
