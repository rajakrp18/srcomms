export default function Privacy() {
  return (
    <div className="container" style={{ padding: '100px 20px', minHeight: '80vh', maxWidth: '900px' }}>
      <div className="glass-panel" style={{ padding: '60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'linear-gradient(90deg, #10b981, #3b82f6)' }}></div>
        
        <h1 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '10px', fontWeight: '900' }}>Privacy Policy</h1>
        <p style={{ color: '#10b981', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '1px' }}>YOUR DATA IS SECURE WITH US</p>
        
        <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '40px' }}>
          <strong>Legal Entity:</strong> SR COMMUNICATION<br/>
          <strong>Registered Address:</strong> Ug-1, S/14 Shalimar Garden Extension-2, Sahibabad Gzb 201005<br/>
          <strong>GSTIN:</strong> 09AKEPJ4696D1ZZ<br/>
          <strong>Data Inquiries:</strong> srcommunication98@gmail.com
        </div>

        <div style={{ color: 'var(--text-light)', lineHeight: '2', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '30px' }}>At SR Communication, your privacy is a top priority. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our store or use our online services.</p>
          
          <h3 style={{ color: 'var(--text-main)', marginTop: '40px', marginBottom: '15px', fontSize: '1.5rem' }}>1. What We Collect</h3>
          <p style={{ marginBottom: '20px' }}>We collect necessary information such as your name, contact number, email address, and billing address solely for the purpose of processing your purchases and fulfilling warranty obligations.</p>
          
          <h3 style={{ color: 'var(--text-main)', marginTop: '40px', marginBottom: '15px', fontSize: '1.5rem' }}>2. Data Protection</h3>
          <p style={{ marginBottom: '20px' }}>We implement state-of-the-art security measures to ensure your personal data is protected against unauthorized access. SR Communication will never sell or rent your data to third-party marketing firms.</p>
          
          <h3 style={{ color: 'var(--text-main)', marginTop: '40px', marginBottom: '15px', fontSize: '1.5rem' }}>3. Financing Partners</h3>
          <p style={{ marginBottom: '20px' }}>If you opt for EMI financing, your basic details will be securely transmitted to our trusted financial partners (e.g., Bajaj Finserv, IDFC) strictly for loan approval purposes.</p>
        </div>
      </div>
    </div>
  )
}
