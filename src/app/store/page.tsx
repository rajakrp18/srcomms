export default function Store() {
  return (
    <div className="container" style={{ padding: '100px 20px', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '15px' }}>Visit SR Communication</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>Experience the best smartphone showroom in Shalimar Garden.</p>
      </div>
      
      <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
        <div style={{ width: '100%', height: '600px', filter: 'contrast(1.1) saturate(1.2)' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.569420063711!2d77.34178067645163!3d28.69260598406798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa5a0b965023%3A0x8ad4f60675c17ec3!2sSR%20COMMUNICATION!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div style={{ padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', background: 'linear-gradient(to right, rgba(15,23,42,0.95), rgba(30,41,59,0.95))' }}>
           <div>
             <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '10px' }}>SR Communication HQ</h3>
             <p style={{ color: 'var(--text-light)', maxWidth: '400px' }}>Ug-1, S/14 Shalimar Garden Extension-2, Sahibabad Gzb 201005</p>
           </div>
           <a href="https://www.google.com/maps/dir//SR+COMMUNICATION,+Shop+No,+S.M.+Mall,+Block+B,+Shalimar+Garden,+Sahibabad,+Ghaziabad,+Uttar+Pradesh+201005/@28.5550538,77.3442037,2913m/data=!3m2!1e3!4b1!4m8!4m7!1m0!1m5!1m1!1s0x390cfa5a0b965023:0x8ad4f60675c17ec3!2m2!1d77.3443556!2d28.6884705?entry=ttu" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
             Get Directions 📍
           </a>
        </div>
      </div>
    </div>
  )
}
