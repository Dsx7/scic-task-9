import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="h-[60vh] flex flex-col justify-center items-center bg-gray-900 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to MarketApp</h1>
        <Link href="/items" className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Browse Items
        </Link>
      </section>
      <section className="py-20 px-8 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">Fast Shipping</div>
            <div className="p-4 border rounded">Best Quality</div>
            <div className="p-4 border rounded">24/7 Support</div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-center"><h2 className="text-3xl">About Us</h2></section>
      <section className="py-20 bg-white text-center"><h2 className="text-3xl">Testimonials</h2></section>
      <section className="py-20 bg-gray-100 text-center"><h2 className="text-3xl">Gallery</h2></section>
      <section className="py-20 bg-white text-center"><h2 className="text-3xl">FAQ</h2></section>
      <section className="py-20 bg-gray-900 text-white text-center"><h2 className="text-3xl">Contact</h2></section>
    </main>
  );
}