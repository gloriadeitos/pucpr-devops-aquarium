import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import plantsBackground from "../../assets/tommy-sze-NpG-QGvH5Zk-unsplash.jpg";

const plantTypes = [
    { nome: "Musgo de Java (Taxiphyllum barbieri)", busca: "Musgo de Java aquário" },
    { nome: "Anubias nana", busca: "Anubias nana aquário" },
    { nome: "Feto de Java (Microsorum pteropus)", busca: "Feto de Java aquário" },
    { nome: "Amazon Sword (Echinodorus)", busca: "Amazon Sword Echinodorus aquarium" },
    { nome: "Hygrophila polysperma", busca: "Hygrophila polysperma aquário" },
    { nome: "Vallisneria spiralis", busca: "Vallisneria spiralis aquário" },
];

const googleImagesUrl = (query: string) =>
    `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;

const PlantsSection = () => {
    return (
        <section id="plantas" className="relative h-[100dvh] overflow-hidden bg-[#041117]">
            <img
                src={plantsBackground}
                alt="Aquário plantado ao fundo"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#041117]/88 via-[#081a28]/84 to-[#0f2232]/88"></div>
            <div className="pointer-events-none absolute -top-16 right-16 h-56 w-56 rounded-full bg-[#6bc7d9]/20 blur-3xl"></div>
            <div className="pointer-events-none absolute bottom-6 left-10 h-72 w-72 rounded-full bg-[#3e8bd8]/18 blur-3xl"></div>
            <div className="mx-auto mt-[var(--header-offset)] flex h-[calc(100dvh-var(--header-offset))] max-w-7xl items-center px-4 py-16 sm:px-6">
                <div className="relative w-full max-h-full overflow-y-auto rounded-2xl border border-white/20 bg-[#0c2b34]/45 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <h2 className="text-3xl font-semibold text-[#f3f7ff] sm:text-5xl">Tipos de plantas</h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {plantTypes.map((planta) => (
                            <article key={planta.nome} className="overflow-hidden rounded-xl border border-white/20 bg-[#0b2230]/50">
                                <div className="p-4">
                                    <div className="mb-2 text-[#9fd3c3]">
                                        <FontAwesomeIcon icon={faLeaf} />
                                    </div>
                                    <p className="text-sm font-medium text-[#d8e6ff]">{planta.nome}</p>
                                    <a
                                        href={googleImagesUrl(planta.busca)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-flex items-center gap-2 text-xs text-[#9fb6df] underline underline-offset-4"
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

export default PlantsSection;