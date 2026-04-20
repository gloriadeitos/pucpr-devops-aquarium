import heroImage from "../../assets/h-ng-ph-m-6-eO8lCtM4s-unsplash.jpg";

const HeroSection = () => {
    return (
        <section id="hero" className="relative h-[100dvh] overflow-hidden">
            <img
                src={heroImage}
                alt="Aquário natural"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#010911]/78 via-[#051427]/64 to-[#11335f]/58"></div>
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#86b7ff]/20 blur-3xl"></div>
            <div className="pointer-events-none absolute bottom-10 right-10 h-64 w-64 rounded-full bg-[#4d83d8]/20 blur-3xl"></div>

            <div className="relative mx-auto mt-[var(--header-offset)] flex h-[calc(100dvh-var(--header-offset))] max-w-7xl items-end px-4 pb-16 sm:px-6">
                <div className="relative max-w-3xl py-8">
                    <div className="pointer-events-none absolute -inset-x-10 -inset-y-8 rounded-[2rem] bg-gradient-to-r from-[#010911]/88 via-[#041a3c]/72 to-[#010911]/88 blur-xl"></div>

                    <h2 className="relative text-4xl font-semibold text-[#f3f7ff]/90 sm:text-6xl">Aquarismo</h2>
                    <p className="relative mt-1.5 text-right text-sm font-medium text-[#c8d9fb]/85 sm:text-base">Como cuidar de aquários</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;