import Link from 'next/link';

async function getItems() {
  const res = await fetch('http://localhost:4000/api/items', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Marketplace Items</h1>
        <Link href="/add-item" className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50">
          + Add Item
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded bg-gray-200" />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
            <Link href={`/items/${item.id}`} className="text-blue-600 mt-2 block hover:underline">
              View Details &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}