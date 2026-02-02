'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddItem() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('https://scic-task-9-backend.vercel.app/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push('/items');
        router.refresh(); 
      }
    } catch (err) {
      console.error(err);
      alert("Error adding item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 bg-[var(--bg-primary)]">
      <div className="w-full max-w-xl bg-[var(--bg-secondary)] border border-[var(--card-border)] rounded-xl p-6 md:p-8 shadow-2xl">
        
        <div className="mb-8 border-b border-[var(--card-border)] pb-6 flex justify-between items-center">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">Add Inventory</h1>
              <p className="text-[var(--text-secondary)] text-xs md:text-sm font-mono mt-1">CREATE NEW SKU ENTRY</p>
            </div>
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono font-bold text-emerald-500 mb-2 uppercase">Item Name</label>
                <input name="name" required className="w-full bg-black/30 border border-zinc-700 text-white px-4 py-3 rounded focus:border-emerald-500 outline-none transition" placeholder="e.g. Neon Keyboard" />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold text-emerald-500 mb-2 uppercase">Price (USD)</label>
                <input name="price" type="number" required className="w-full bg-black/30 border border-zinc-700 text-white px-4 py-3 rounded focus:border-emerald-500 outline-none transition" placeholder="0.00" />
              </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-emerald-500 mb-2 uppercase">Image URL</label>
            <input name="image" type="url" required className="w-full bg-black/30 border border-zinc-700 text-white px-4 py-3 rounded focus:border-emerald-500 outline-none transition" placeholder="https://..." />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-emerald-500 mb-2 uppercase">Description</label>
            <textarea name="description" rows="4" required className="w-full bg-black/30 border border-zinc-700 text-white px-4 py-3 rounded focus:border-emerald-500 outline-none transition" placeholder="Specs..." />
          </div>

          <button 
            disabled={loading} 
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded font-bold tracking-widest transition-all shadow-lg shadow-emerald-900/20 disabled:opacity-50 text-sm md:text-base"
          >
            {loading ? 'PROCESSING...' : 'CONFIRM UPLOAD'}
          </button>
        </form>
      </div>
    </div>
  );
}