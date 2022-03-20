import '../Landing-Page/landing-page.css'
import { CategorySection, HeroSection } from "../../components";

const LandingPage = () => {
    return(
        <main className="main-container">
            <HeroSection/>
            <CategorySection />       
        </main>
    );
}

export { LandingPage };