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
      const res = await fetch('http://localhost:4000/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Item added successfully!");
        router.push('/items');
        router.refresh(); 
      } else {
        alert("Failed to add item");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Item Name" required className="border p-2 rounded" />
        <input name="description" placeholder="Description" required className="border p-2 rounded" />
        <input name="price" type="number" placeholder="Price" required className="border p-2 rounded" />
        <button disabled={loading} className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">
          {loading ? 'Adding...' : 'Add Item'}
        </button>
      </form>
    </div>
  );
}