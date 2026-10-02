export default function Contact() {
  return (
    <div className="container" style={{ padding: '100px 20px', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '15px' }}>Get In Touch</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>We are always here to help you find your perfect device.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        <div className="glass-panel" style={{ padding: '50px 30px', textAlign: 'center', transition: 'all 0.3s ease', background: 'white' }}>
           <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 20px', border: '1px solid var(--primary)' }}>📍</div>
           <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '15px' }}>Visit Us</h3>
           <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>Ug-1, S/14 Shalimar Garden Ext-2,<br/>Sahibabad, Ghaziabad,<br/>UP 201005</p>
        </div>

        <div className="glass-panel" style={{ padding: '50px 30px', textAlign: 'center', transition: 'all 0.3s ease', background: 'white' }}>
           <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 20px', border: '1px solid #10b981' }}>📞</div>
           <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '15px' }}>Call Us</h3>
           <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>+91 97174 59671<br/>+91 99581 43420<br/>0120 2630317</p>
        </div>

        <div className="glass-panel" style={{ padding: '50px 30px', textAlign: 'center', transition: 'all 0.3s ease', background: 'white' }}>
           <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(220,38,38,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 20px', border: '1px solid #ef4444' }}>✉️</div>
           <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '15px' }}>Email & Info</h3>
           <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>srcommunication98@gmail.com<br/><b>GSTIN:</b> 09AKEPJ4696D1ZZ<br/>Mon-Sun: 10:00 AM - 9:00 PM</p>
        </div>
      </div>
    </div>
  )
}
