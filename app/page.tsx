import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Features from '@/components/Features';

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <FAQ />
    <Footer />
    </>
  );
}