import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/InteractiveElements";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = await client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug: resolvedParams.slug });

  if (!product) {
    notFound();
  }

  return (
    <div className="container" style={{ padding: '60px 20px', minHeight: '60vh' }}>
      <div style={{ marginBottom: '30px' }}>
        <Link href="/" style={{ color: 'var(--primary)', fontWeight: 600 }}>← Back to Store</Link>
      </div>
      
      <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', alignItems: 'center' }}>
        {/* Product Image Gallery */}
        <div style={{ flex: '1 1 400px', background: 'white', padding: '40px', borderRadius: '24px', boxShadow: 'var(--glass-shadow)', border: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'center' }}>
          {product.image ? (
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
              <Image 
                src={urlFor(product.image).url()} 
                alt={product.name} 
                fill 
                style={{ objectFit: 'contain' }} 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div style={{ height: '400px', display: 'flex', alignItems: 'center', color: 'var(--text-light)' }}>No Image Available</div>
          )}
        </div>

        {/* Product Info */}
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {product.badge && (
            <span style={{ alignSelf: 'flex-start', background: 'linear-gradient(135deg, var(--primary), #a855f7)', color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800 }}>
              {product.badge}
            </span>
          )}
          
          <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1px' }}>{product.name}</h1>
          
          <div style={{ fontSize: '1.2rem', color: 'var(--text-light)', fontWeight: 500 }}>
            Brand: <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>{product.brand || 'Premium Brand'}</span>
          </div>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', lineHeight: 1.6 }}>
            {product.specs || 'Experience cutting-edge technology and premium design with this incredible device, available now at SR Communication.'}
          </p>

          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '10px' }}>
            {product.price}
          </div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
            <button className="btn btn-primary" style={{ flex: 1, padding: '18px', fontSize: '1.1rem' }}>
              Buy Now
            </button>
            <AddToCartButton />
          </div>
          
          <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(99, 102, 241, 0.05)', borderRadius: '16px', border: '1px solid rgba(99, 102, 241, 0.1)' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px', color: 'var(--text-main)', fontWeight: 700 }}>
              <span>🛡️</span> 100% Original Product from SR Communication
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-main)', fontWeight: 700 }}>
              <span>💳</span> 0% Downpayment on EMI Available at our Store
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
