const categories = [
  {
    name: 'Floral',
    description: 'Elegant bouquets of rose, jasmine, and lily',
    image: 'https://images.unsplash.com/photo-1599342166997-58552e91d159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Oriental',
    description: 'Rich and exotic with amber and spices',
    image: 'https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Fresh',
    description: 'Crisp citrus and aquatic notes',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
];

export default function Categories() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Collections
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover your perfect scent from our diverse range of fragrance families
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-h-2 aspect-w-3 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-semibold">{category.name}</h3>
                <p className="mt-2 text-gray-200">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}