import Link from 'next/link';

export default async function ItemDetail({ params }) {
  const { id } = await params; 
  
  const res = await fetch(`http://localhost:4000/api/items/${id}`, { cache: 'no-store' });
  const item = await res.json();

  if (!item || item.message) return <div className="p-8">Item not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link href="/items" className="text-gray-500 hover:underline mb-4 block">&larr; Back to List</Link>
      <div className="grid md:grid-cols-2 gap-8">
        <img src={item.image} alt={item.name} className="w-full rounded-lg shadow-lg bg-gray-200" />
        <div>
          <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
          <p className="text-2xl text-blue-600 font-bold mb-6">${item.price}</p>
          <p className="text-gray-700 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}