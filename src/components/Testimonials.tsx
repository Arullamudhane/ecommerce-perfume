const testimonials = [
  {
    content: "The quality and authenticity of the perfumes are unmatched. I've found my signature scent here!",
    author: "Sarah Johnson",
    role: "Fashion Blogger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "Exceptional service and an amazing collection of luxury fragrances. Will definitely be a returning customer.",
    author: "Michael Chen",
    role: "Perfume Enthusiast",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The curation is impeccable. Each fragrance tells its own unique story. Truly a premium experience.",
    author: "Emma Thompson",
    role: "Beauty Expert",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover why customers love shopping with us
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-900/5 rounded-lg">
                <blockquote className="text-lg leading-7 text-gray-900">
                  "{testimonial.content}"
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-50"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm leading-6 text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}