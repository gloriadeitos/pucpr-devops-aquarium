import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSeedling } from "@fortawesome/free-solid-svg-icons";
import substratesBackground from "../../assets/david-kimmel-ossa-6WxkS12ZnY4-unsplash.jpg";

const substrateTypes = [
    { nome: "Areia fina inerte", busca: "Areia fina aquário" },
    { nome: "Cascalho natural", busca: "Cascalho natural aquário" },
    { nome: "Substrato fértil", busca: "Substrato fértil aquário plantado" },
    { nome: "Camada com laterita", busca: "Laterita substrato aquário" },
];

const googleImagesUrl = (query: string) =>
    `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;

const SubstratesSection = () => {
    return (
        <section id="substratos" className="relative h-[100dvh] overflow-hidden bg-[#0a101b]">
            <img
                src={substratesBackground}
                alt="Substrato para aquário"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a101b]/86 via-[#111b2b]/84 to-[#1d2940]/82"></div>
            <div className="pointer-events-none absolute top-14 right-16 h-56 w-56 rounded-full bg-[#9caad4]/16 blur-3xl"></div>
            <div className="pointer-events-none absolute bottom-6 left-8 h-72 w-72 rounded-full bg-[#5f7fb2]/18 blur-3xl"></div>
            <div className="mx-auto mt-[var(--header-offset)] flex h-[calc(100dvh-var(--header-offset))] max-w-7xl items-center px-4 py-16 sm:px-6">
                <div className="relative w-full max-h-full overflow-y-auto rounded-2xl border border-white/20 bg-[#1a2a44]/45 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <h2 className="text-3xl font-semibold text-[#f3f7ff] sm:text-5xl">Substratos</h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {substrateTypes.map((substrato) => (
                            <article key={substrato.nome} className="overflow-hidden rounded-xl border border-white/20 bg-[#15253f]/50">
                                <div className="p-4">
                                    <div className="mb-2 text-[#c9b58f]">
                                        <FontAwesomeIcon icon={faSeedling} />
                                    </div>
                                    <p className="text-sm font-medium text-[#d8e6ff]">{substrato.nome}</p>
                                    <a
                                        href={googleImagesUrl(substrato.busca)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-flex items-center gap-2 text-xs text-[#b2c3e6] underline underline-offset-4"
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

export default SubstratesSection;