const brands = [
  {
    name: 'Chanel',
    logo: 'https://images.unsplash.com/photo-1583467875263-d0551b251167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dior',
    logo: 'https://images.unsplash.com/photo-1593726891090-b4c6bc09c819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tom Ford',
    logo: 'https://images.unsplash.com/photo-1585652757141-8837d676fac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function BrandShowcase() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Featured Luxury Brands
        </h2>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {brands.map((brand) => (
            <div key={brand.name} className="relative aspect-[3/2]">
              <img
                className="object-cover rounded-lg shadow-lg"
                src={brand.logo}
                alt={brand.name}
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}