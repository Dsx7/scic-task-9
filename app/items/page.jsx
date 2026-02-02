import Link from 'next/link';
import { cookies } from 'next/headers';

async function getItems() {
  try {
    const res = await fetch('https://scic-task-9-backend.vercel.app/api/items', { cache: 'no-store' });
    return res.ok ? res.json() : [];
  } catch (e) {
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();
  const cookieStore = await cookies();
  const isAdmin = !!cookieStore.get('auth_token');

  return (
    <div className="min-h-screen p-4 md:p-12 pb-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">
              {isAdmin ? 'System Inventory' : 'Browse Collection'}
            </h1>
            <p className="opacity-60 text-[var(--text-secondary)]">
              {isAdmin ? `Total Assets: ${items.length}` : 'Find the perfect gear for your setup.'}
            </p>
          </div>
          {isAdmin && (
            <Link href="/add-item" className="bg-emerald-600 text-white px-6 py-2 rounded shadow hover:bg-emerald-500 font-mono text-sm w-full md:w-auto text-center">
              + NEW ENTRY
            </Link>
          )}
        </div>

        {/* --- PUBLIC VIEW: GRID --- */}
        {!isAdmin && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {items.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="font-bold text-slate-800 line-clamp-1">{item.name}</h2>
                        <span className="text-indigo-600 font-bold text-sm bg-indigo-50 px-2 py-1 rounded">${item.price}</span>
                    </div>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-4">{item.description}</p>
                    <Link href={`/items/${item.id}`} className="block w-full text-center py-2 border rounded hover:bg-slate-50 text-sm font-semibold text-slate-700">
                        View Details
                    </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- ADMIN VIEW: LIST --- */}
        {isAdmin && (
          <div className="grid gap-4">
             {items.map((item) => (
               <div key={item.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded flex flex-col md:flex-row md:items-center justify-between group hover:border-emerald-500/50 transition-colors gap-4">
                 <div className="flex items-center gap-4 md:gap-6">
                    <img src={item.image} className="w-16 h-16 object-cover rounded bg-zinc-800" />
                    <div>
                        <h3 className="font-bold text-zinc-200">{item.name}</h3>
                        <p className="text-xs text-zinc-500 font-mono uppercase mt-1">ID: {item._id?.slice(-4)}</p>
                    </div>
                 </div>
                 <div className="flex items-center justify-between md:justify-end gap-4 md:gap-8 w-full md:w-auto">
                    <div className="text-left md:text-right">
                        <span className="block font-mono text-emerald-400 font-bold">${item.price}</span>
                    </div>
                    <button className="text-zinc-500 hover:text-rose-500 text-sm font-bold px-3 py-1 border border-zinc-700 rounded hover:border-rose-900">
                        DELETE
                    </button>
                 </div>
               </div>
             ))}
          </div>
        )}

      </div>
    </div>
  );
}