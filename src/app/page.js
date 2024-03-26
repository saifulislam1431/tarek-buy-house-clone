import Advantage from "@/components/HomeComponent/Advantage/Advantage";
import Banner from "@/components/HomeComponent/Banner/Banner";
import ChooseTarekBuy from "@/components/HomeComponent/ChooseTarekBuy/ChooseTarekBuy";
import FAQ from "@/components/HomeComponent/FAQ/FAQ";
import FeaturedMarket from "@/components/HomeComponent/FeaturedMarket/FeaturedMarket";
import HouseOwners from "@/components/HomeComponent/HouseOwners/HouseOwners";
import PartnerContainer from "@/components/HomeComponent/PartnerContainer/PartnerContainer";
import Specialities from "@/components/HomeComponent/Specialities/Specialities";
import Testimonial from "@/components/HomeComponent/Testimonial/Testimonial";

export default function Home() {
  return (
    <section>
      <Banner />
      <PartnerContainer />
      <Advantage />
      <HouseOwners />
      <Testimonial />
      <ChooseTarekBuy />
      <Specialities />
      <FAQ />
      <FeaturedMarket />
    </section>
  );
}
