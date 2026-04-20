import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import fishBackground from "../../assets/alvaro-juliao-htCUxLcN2dQ-unsplash.jpg";

const fishTypes = [
    { nome: "Neon tetra (Paracheirodon innesi)", busca: "Neon tetra aquarium" },
    { nome: "Corydora panda", busca: "Corydora panda aquarium" },
    { nome: "Molly", busca: "Molly fish aquarium" },
    { nome: "Guppy", busca: "Guppy fish aquarium" },
    { nome: "Rasbora arlequim", busca: "Rasbora arlequim aquarium" },
    { nome: "Otocinclus", busca: "Otocinclus aquarium" },
];

const googleImagesUrl = (query: string) =>
    `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;

const FishSection = () => {
    return (
        <section id="peixes" className="relative h-[100dvh] overflow-hidden bg-[#030e1d]">
            <img
                src={fishBackground}
                alt="Peixes em aquário"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#030e1d]/84 via-[#081a31]/84 to-[#173b62]/80"></div>
            <div className="pointer-events-none absolute top-10 left-12 h-64 w-64 rounded-full bg-[#6aaef7]/20 blur-3xl"></div>
            <div className="pointer-events-none absolute bottom-8 right-8 h-72 w-72 rounded-full bg-[#4f88d9]/20 blur-3xl"></div>
            <div className="mx-auto mt-[var(--header-offset)] flex h-[calc(100dvh-var(--header-offset))] max-w-7xl items-center px-4 py-16 sm:px-6">
                <div className="relative w-full max-h-full overflow-y-auto rounded-2xl border border-white/20 bg-[#113055]/45 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <h2 className="text-3xl font-semibold text-[#f3f7ff] sm:text-5xl">Tipos de peixes</h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {fishTypes.map((peixe) => (
                            <article key={peixe.nome} className="overflow-hidden rounded-xl border border-white/20 bg-[#0f2947]/50">
                                <div className="p-4">
                                    <div className="mb-2 text-[#91c9ff]">
                                        <FontAwesomeIcon icon={faFish} />
                                    </div>
                                    <p className="text-sm font-medium text-[#d8e6ff]">{peixe.nome}</p>
                                    <a
                                        href={googleImagesUrl(peixe.busca)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-flex items-center gap-2 text-xs text-[#a8c2eb] underline underline-offset-4"
                                    >
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        Buscar no Google Imagens
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FishSection;