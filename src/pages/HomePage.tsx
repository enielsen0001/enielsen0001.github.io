import ExperienceSkills from '../components/ExperienceSkills';
import ContactCalloutBar from '../components/global/ContactCalloutBar';
import HomeHero from '../components/HomeHero';

const HomePage = () => {
    return (
        <main className="homepage page">
            <HomeHero />
            <ExperienceSkills/>
            <ContactCalloutBar/>
        </main>
    );
};

export default HomePage;