import Banner from "@/components/banner";
import Brands from "@/components/brands";
import FeaturedProducts from "@/components/featuredProducts";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Statistics from "@/components/statistics";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="bg-base-200">
      <Banner></Banner>
      <Brands></Brands>
      <Statistics></Statistics>
      <Features></Features>
      <FeaturedProducts></FeaturedProducts>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </div>
  );
}
