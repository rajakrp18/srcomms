export default function Terms() {
  return (
    <div className="container" style={{ padding: '100px 20px', minHeight: '80vh', maxWidth: '900px' }}>
      <div className="glass-panel" style={{ padding: '60px', position: 'relative', overflow: 'hidden', background: 'white' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'linear-gradient(90deg, var(--primary), #a855f7)' }}></div>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '10px', fontWeight: '900' }}>Terms & Conditions</h1>
        <p style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '1px' }}>LAST UPDATED: OCTOBER 2026</p>
        
        <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '40px' }}>
          <strong>Legal Entity:</strong> SR COMMUNICATION<br/>
          <strong>Registered Address:</strong> Ug-1, S/14 Shalimar Garden Extension-2, Sahibabad Gzb 201005<br/>
          <strong>GSTIN:</strong> 09AKEPJ4696D1ZZ<br/>
          <strong>Email:</strong> srcommunication98@gmail.com
        </div>

        <div style={{ color: 'var(--text-light)', lineHeight: '2', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '30px' }}>Welcome to SR Communication. By accessing our website and purchasing our products, you agree to the following legally binding terms and conditions.</p>
          
          <h3 style={{ color: 'var(--text-main)', marginTop: '40px', marginBottom: '15px', fontSize: '1.5rem' }}>1. Product Authenticity & Warranty</h3>
          <p style={{ marginBottom: '20px' }}>All products sold at SR Communication are 100% genuine, factory-sealed, and come with standard brand warranty. We are authorized partners for leading brands including Vivo, Samsung, Nothing, Realme, Apple, and Xiaomi.</p>
          
          <h3 style={{ color: 'var(--text-main)', marginTop: '40px', marginBottom: '15px', fontSize: '1.5rem' }}>2. Financial Services & EMI</h3>
          <p style={{ marginBottom: '20px' }}>Offers such as "0% Downpayment" and "No Cost EMI" are strictly subject to approval by our financial partners, including Bajaj Finserv, IDFC First Bank, and respective credit card issuers. SR Communication does not make lending decisions.</p>
          
          <h3 style={{ color: 'var(--text-main)', marginTop: '40px', marginBottom: '15px', fontSize: '1.5rem' }}>3. Return Policy</h3>
          <p style={{ marginBottom: '20px' }}>Electronic devices once unboxed cannot be returned for a refund. In the event of an out-of-box defect (DOA), the issue must be reported within 24 hours of purchase, and the replacement will be governed by the specific brand's DOA policy.</p>
        </div>
      </div>
    </div>
  )
}
