import AppContainer from "./_layout/AppContainer";

import SectionBrands from "./_section/SectionBrands";
import SectionHero from "./_section/SectionHero";
import SectionPreFooter from "./_section/SectionPreFooter";

export default function Home() {
  return (
    <AppContainer>
      <SectionHero />
      <SectionBrands />
      <SectionPreFooter />
    </AppContainer>
  );
}
