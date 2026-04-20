import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    sidebarOpen: boolean;
    onToggleSidebar: () => void;
}

const sectionLinks = [
    { href: "#hero", label: "Início" },
    { href: "#descricao", label: "Descrição" },
    { href: "#plantas", label: "Plantas" },
    { href: "#peixes", label: "Peixes" },
    { href: "#substratos", label: "Substratos" },
    { href: "#decoracoes", label: "Decorações" },
    { href: "#referencias", label: "Referências" },
];

const Header = ({ sidebarOpen, onToggleSidebar }: HeaderProps) => {
    return (
        <header data-site-header="true" className={`fixed top-0 left-0 z-40 w-full border-b border-white/10 bg-gradient-to-r from-[#030913]/88 via-[#071223]/82 to-[#0a1930]/86 backdrop-blur-xl transition-all duration-300 ${sidebarOpen ? 'sm:w-[calc(100%-24rem)]' : ''}`}>
            <div className={`relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 transition-all duration-300 sm:px-6 ${sidebarOpen ? 'sm:gap-2 sm:py-2.5' : ''}`}>
                <div className={`flex items-center gap-2 transition-all duration-300 sm:gap-3 ${sidebarOpen ? 'sm:gap-2' : ''}`}>
                    <img
                        src="https://raw.githubusercontent.com/gloriadeitos/gloriadeitos/refs/heads/main/img/pucpr-white.png"
                        alt="PUCPR"
                        className={`h-12 w-auto transition-all duration-300 ${sidebarOpen ? 'sm:h-10' : 'sm:h-14'}`}
                    />
                    <img
                        src="https://raw.githubusercontent.com/gloriadeitos/gloriadeitos/refs/heads/main/img/gloriadeitos-logo-3d.png"
                        alt="gloriadeitos-logo"
                        className={`h-12 w-auto transition-all duration-300 ${sidebarOpen ? 'sm:h-10' : 'sm:h-14'}`}
                    />
                </div>

                <h1 className={`pointer-events-none absolute left-1/2 -translate-x-1/2 text-center font-semibold tracking-[0.03em] text-[#eef4ff] transition-all duration-300 ${sidebarOpen ? 'text-sm sm:text-lg' : 'text-base sm:text-xl'}`}>
                    PUCP-PR DevOps: Aquarium
                </h1>

                <button
                    type="button"
                    onClick={onToggleSidebar}
                    className="inline-flex items-center rounded-full px-3 py-2 text-sm font-medium text-[#eaf2ff] transition hover:bg-white/5 hover:text-white"
                    aria-label={sidebarOpen ? "Fechar sidebar de informações" : "Abrir sidebar de informações"}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <nav className="border-t border-white/10 bg-[#040d1a]/65">
                <div className={`mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2 transition-all duration-300 sm:px-6 ${sidebarOpen ? 'sm:gap-1.5 sm:py-1.5' : ''}`}>
                    {sectionLinks.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-[#d2def7] transition hover:bg-white/5 hover:text-white ${sidebarOpen ? 'sm:px-2.5 sm:py-1 sm:text-xs' : ''}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;