export default function About() {
  return (
    <div className="container" style={{ padding: '100px 20px', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '15px' }}>The Visionaries Behind SR</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>Building the most trusted mobile empire in Shalimar Garden for over 15 years.</p>
      </div>
      
      <div className="glass-panel" style={{ padding: '60px', display: 'flex', flexDirection: 'column', gap: '60px' }}>
        
        {/* Ajit's Profile */}
        <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '250px', height: '400px', background: 'white', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', position: 'relative' }}>
             <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', textAlign: 'center', background: '#f8fafc', zIndex: 1}}>
               <span style={{fontSize: '3rem'}}>📸</span>
               <span style={{color: 'var(--primary)', marginTop: '10px', fontWeight: 'bold'}}>Save Ajit's photo as<br/><b>ajit.jpg</b> in public folder</span>
             </div>
             <img src="/ajit.jpg" alt="" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 2}} />
          </div>
          <div style={{ flex: 2, minWidth: '300px' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--text-main)', marginBottom: '5px', fontWeight: '900', letterSpacing: '-1px' }}>Ajit Kumar Poddar</h2>
            <h4 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '25px', fontWeight: '800' }}>Co-Founder & Director</h4>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
              With a relentless drive for innovation and customer satisfaction, Ajit Kumar Poddar has been instrumental in scaling SR Communication to new heights. His strategic vision ensures that we always bring the best deals, genuine products, and premium customer service to every single person who walks through our doors.
            </p>
          </div>
        </div>

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)' }}></div>

        {/* Sanjeev's Profile */}
        <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
          <div style={{ flex: 1, minWidth: '250px', height: '400px', background: 'white', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', position: 'relative' }}>
             <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', textAlign: 'center', background: '#f8fafc', zIndex: 1}}>
               <span style={{fontSize: '3rem'}}>📸</span>
               <span style={{color: 'var(--primary)', marginTop: '10px', fontWeight: 'bold'}}>Save Sanjeev's photo as<br/><b>sanjeev.jpg</b> in public folder</span>
             </div>
             <img src="/sanjeev.jpg" alt="" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 2}} />
          </div>
          <div style={{ flex: 2, minWidth: '300px' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--text-main)', marginBottom: '5px', fontWeight: '900', letterSpacing: '-1px' }}>Sanjeev Kumar Jha</h2>
            <h4 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '25px', fontWeight: '800' }}>Founder & CEO</h4>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
              Over 15 years ago, Sanjeev started SR Communication with a simple mission: to provide Shalimar Garden with a reliable, transparent, and high-quality mobile store. Today, his deep expertise in the smartphone market and strong relationships with top brands like Vivo and Samsung have made SR Communication a household name.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
