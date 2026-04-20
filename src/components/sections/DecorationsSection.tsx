import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGem } from "@fortawesome/free-solid-svg-icons";
import decorationsBackground from "../../assets/rose-anonymous-fgRMs3fjNLs-unsplash.jpg";

const decorationTypes = [
    { nome: "Troncos naturais tratados (driftwood)", busca: "Driftwood aquário" },
    { nome: "Rochas inertes para paisagismo aquático", busca: "Rochas aquascape aquário" },
    { nome: "Cavernas de cerâmica para abrigo", busca: "Caverna cerâmica aquário" },
    { nome: "Composição triangular de hardscape", busca: "Hardscape triangular aquário" },
];

const googleImagesUrl = (query: string) =>
    `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;

const DecorationsSection = () => {
    return (
        <section id="decoracoes" className="relative h-[100dvh] overflow-hidden bg-[#0a1222]">
            <img
                src={decorationsBackground}
                alt="Decorações de aquário"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1222]/86 via-[#121b2d]/84 to-[#233451]/82"></div>
            <div className="pointer-events-none absolute top-8 left-12 h-64 w-64 rounded-full bg-[#8fa8d7]/18 blur-3xl"></div>
            <div className="pointer-events-none absolute bottom-8 right-10 h-72 w-72 rounded-full bg-[#658ec9]/18 blur-3xl"></div>
            <div className="mx-auto mt-[var(--header-offset)] flex h-[calc(100dvh-var(--header-offset))] max-w-7xl items-center px-4 py-16 sm:px-6">
                <div className="relative w-full max-h-full overflow-y-auto rounded-2xl border border-white/20 bg-[#1d3257]/45 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <h2 className="text-3xl font-semibold text-[#f3f7ff] sm:text-5xl">Decorações</h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {decorationTypes.map((decoracao) => (
                            <article key={decoracao.nome} className="overflow-hidden rounded-xl border border-white/20 bg-[#1a2d4d]/50">
                                <div className="p-4">
                                    <div className="mb-2 text-[#d7c6ff]">
                                        <FontAwesomeIcon icon={faGem} />
                                    </div>
                                    <p className="text-sm font-medium text-[#d8e6ff]">{decoracao.nome}</p>
                                    <a
                                        href={googleImagesUrl(decoracao.busca)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-flex items-center gap-2 text-xs text-[#b8cbed] underline underline-offset-4"
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

export default DecorationsSection;