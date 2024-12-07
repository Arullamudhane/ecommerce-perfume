import { Sparkles, Shield, Truck, Clock } from 'lucide-react';

const features = [
  {
    name: 'Authentic Products',
    description: '100% genuine fragrances sourced directly from brands',
    icon: Shield,
  },
  {
    name: 'Premium Selection',
    description: 'Curated collection of luxury and niche perfumes',
    icon: Sparkles,
  },
  {
    name: 'Fast Delivery',
    description: 'Free shipping on orders above ₹2999',
    icon: Truck,
  },
  {
    name: 'Long-Lasting',
    description: 'High-quality fragrances with superior longevity',
    icon: Clock,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Experience Luxury at Its Finest
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We bring you the world's most exclusive fragrances with unmatched quality and service.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <feature.icon className="h-8 w-8 text-purple-600" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}