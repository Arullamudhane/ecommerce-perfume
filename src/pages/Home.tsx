import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import BrandShowcase from '../components/BrandShowcase';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Categories />
      <BrandShowcase />
      <Testimonials />
      <Newsletter />
    </div>
  );
}