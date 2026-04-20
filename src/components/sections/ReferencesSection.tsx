const ReferencesSection = () => {
    return (
        <section id="referencias" className="relative h-[100dvh] overflow-hidden bg-gradient-to-br from-[#020816] via-[#0e2b49] to-[#1f5578]">
            <div className="pointer-events-none absolute top-10 right-12 h-64 w-64 rounded-full bg-[#95d0ff]/20 blur-3xl"></div>
            <div className="pointer-events-none absolute bottom-8 left-10 h-72 w-72 rounded-full bg-[#6ba9f0]/20 blur-3xl"></div>
            <div className="mx-auto mt-[var(--header-offset)] flex h-[calc(100dvh-var(--header-offset))] max-w-7xl items-center px-4 py-16 sm:px-6">
                <div className="w-full rounded-2xl border border-white/20 bg-[#16355d]/52 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <h2 className="text-3xl font-semibold text-[#f3f7ff] sm:text-5xl">Referências e links</h2>
                    <ul className="mt-6 space-y-4 text-[#c6d5f3]">
                        <li>
                            <a className="underline decoration-[#9fd3ff] underline-offset-4 hover:text-white" href="https://www.aquariumcoop.com/blogs/aquarium" target="_blank" rel="noopener noreferrer">
                                Aquarium Co-Op Blog
                            </a>
                        </li>
                        <li>
                            <a className="underline decoration-[#9fd3ff] underline-offset-4 hover:text-white" href="https://www.seriouslyfish.com/" target="_blank" rel="noopener noreferrer">
                                Seriously Fish
                            </a>
                        </li>
                        <li>
                            <a className="underline decoration-[#9fd3ff] underline-offset-4 hover:text-white" href="https://www.adana.co.jp/en/contents/index.html" target="_blank" rel="noopener noreferrer">
                                ADA Nature Aquarium
                            </a>
                        </li>
                        <li>
                            <a className="underline decoration-[#9fd3ff] underline-offset-4 hover:text-white" href="https://www.tfhmagazine.com/" target="_blank" rel="noopener noreferrer">
                                Tropical Fish Hobbyist Magazine
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ReferencesSection;