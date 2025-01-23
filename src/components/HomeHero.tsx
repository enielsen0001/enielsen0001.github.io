import HeroBanner from "./global/HeroImage";

const HomeHero = () => {
    return (
        <div className="home-hero">
            <HeroBanner fileTitle="tunnel-hero" />
            <div className="home-hero__content container">
                <h1 className="home-hero__hl"><span>Erika Nielsen</span></h1>
                <p className="home-hero__sub-hl">Helping businesses and brands shine online.</p>
            </div>
        </div>
    );
}

export default HomeHero;