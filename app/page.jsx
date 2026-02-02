import Link from 'next/link';

async function getFeaturedProducts() {
  try {
    const res = await fetch('https://scic-task-9-backend.vercel.app/api/items', { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.slice(0, 3);
  } catch (e) {
    return [];
  }
}

export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-slate-950 overflow-hidden text-white py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-purple-900/40 pointer-events-none"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs md:text-sm font-bold mb-6 tracking-wide">
            NEW COLLECTION 2026
          </span>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            Redefine Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
              Creative Workspace
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-xl mb-8 max-w-2xl mx-auto">
            Experience the next generation of commerce. Built for speed, designed for elegance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center px-4">
            <Link href="/items" className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors w-full md:w-auto text-center">
              Explore Products
            </Link>
            <Link href="/login" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors w-full md:w-auto text-center">
              Admin Login
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRENDING PRODUCTS */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Trending Now</h2>
              <p className="text-slate-500">Top picks for this week.</p>
            </div>
            <Link href="/items" className="text-indigo-600 font-bold hover:underline">View All &rarr;</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((item) => (
              <Link href={`/items/${item.id}`} key={item.id} className="group block">
                <div className="relative h-64 md:h-80 w-full bg-slate-100 rounded-2xl overflow-hidden mb-4 border border-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    ${item.price}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-slate-500 line-clamp-1 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURES */}
      <section className="py-16 md:py-24 bg-slate-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Why Designers Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: "⚡", title: "Instant Setup", desc: "Connect your workflow in seconds with our API." },
              { icon: "💎", title: "Premium Quality", desc: "Materials sourced from the best manufacturers." },
              { icon: "🛡️", title: "Lifetime Warranty", desc: "We stand behind every product we sell." }
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                <div className="text-4xl mb-6">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{f.title}</h3>
                <p className="text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* SECTION 4: NEWSLETTER */}
      <section className="py-16 md:py-24 bg-indigo-600 text-white px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your setup?</h2>
          <p className="text-indigo-100 mb-10 text-lg">Join 10,000+ creators building their dream workspace.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto w-full">
            <input type="email" placeholder="Enter your email" className="px-6 py-4 rounded-full text-slate-900 w-full outline-none" />
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors w-full md:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}