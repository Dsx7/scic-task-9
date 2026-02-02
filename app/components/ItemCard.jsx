import Link from 'next/link';

export default function ItemCard({ item }) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-700 shadow-sm">
          In Stock
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {item.name}
          </h2>
          <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded text-sm">
            ${item.price}
          </span>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
          {item.description}
        </p>

        <Link 
          href={`/items/${item.id}`} 
          className="w-full block text-center bg-gray-900 text-white font-medium py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}