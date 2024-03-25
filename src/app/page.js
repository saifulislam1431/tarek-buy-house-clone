import Advantage from "@/components/HomeComponent/Advantage/Advantage";
import Banner from "@/components/HomeComponent/Banner/Banner";
import PartnerContainer from "@/components/HomeComponent/PartnerContainer/PartnerContainer";

export default function Home() {
  return (
    <section>
      <Banner />
      <PartnerContainer />
      <Advantage />
    </section>
  );
}
