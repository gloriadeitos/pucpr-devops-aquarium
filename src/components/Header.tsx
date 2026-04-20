import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    onOpenSidebar: () => void;
}

const Header = ({ onOpenSidebar }: HeaderProps) => {
    return (
        <header className="w-full border-b border-slate-200 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
                <div className="flex items-center gap-2 sm:gap-3">
                    <img
                        src="https://raw.githubusercontent.com/gloriadeitos/gloriadeitos/main/img/pucpr.png"
                        alt="PUCPR"
                        className="h-12 w-auto sm:h-14"
                    />
                    <img
                        src="https://raw.githubusercontent.com/gloriadeitos/gloriadeitos/main/img/gloriadeitos-logo.png"
                        alt="gloriadeitos-logo"
                        className="h-12 w-auto sm:h-14"
                    />
                </div>

                <h1 className="text-center text-base font-semibold tracking-wide text-slate-800 sm:text-xl">
                    PUCP-PR DevOps: Aquarium
                </h1>

                <button
                    type="button"
                    onClick={onOpenSidebar}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    aria-label="Abrir sidebar de informações"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </header>
    );
};

export default Header;