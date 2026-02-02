import Link from 'next/link';

export default async function ItemDetail({ params }) {
  const { id } = await params;
  const res = await fetch(`https://scic-task-9-backend.vercel.app/api/items/${id}`, { cache: 'no-store' });
  const item = await res.json();

  if (!item || item.message) return <div className="p-8 text-center">Item not found</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 min-h-screen">
      <Link href="/items" className="text-slate-500 hover:text-indigo-600 mb-6 inline-block font-medium">&larr; Back to Inventory</Link>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 bg-white md:p-8 rounded-3xl md:shadow-sm md:border border-slate-100">
        {/* Image */}
        <div className="bg-slate-100 rounded-2xl overflow-hidden h-[300px] md:h-[500px]">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
        
        {/* Content */}
        <div className="flex flex-col justify-center">
          <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase mb-2">Verified Product</span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{item.name}</h1>
          <p className="text-2xl text-slate-900 font-medium mb-6">${item.price}</p>
          
          <div className="h-px bg-slate-200 w-full mb-6"></div>
          
          <p className="text-slate-600 leading-relaxed text-lg mb-8">{item.description}</p>
          
          <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}