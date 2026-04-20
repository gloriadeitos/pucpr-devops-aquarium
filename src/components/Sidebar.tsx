import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
    return (
        <>
            <button
                type="button"
                onClick={onClose}
                aria-label="Fechar sidebar"
                className={`fixed inset-0 z-20 transition ${open ? 'bg-slate-900/25 backdrop-blur-sm' : 'pointer-events-none bg-transparent'}`}
            ></button>

            <aside
                className={`fixed inset-y-0 right-0 z-30 flex w-full flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out sm:w-96 ${open ? 'translate-x-0' : 'translate-x-full'}`}
                aria-hidden={!open}
            >
                <div className="flex items-center justify-between border-b border-slate-200 p-4">
                    <h3 className="font-semibold text-slate-800">Informações da Gloria</h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-md p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                        aria-label="Fechar painel"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className="flex-1 space-y-6 overflow-y-auto p-4">
                    <section>
                        <h4 className="mb-3 text-sm font-semibold text-slate-700">Desenvolvedora</h4>
                        <p className="text-sm font-medium text-slate-900">Gloria Maria Deitos Gomes da Silva</p>
                        <p className="text-xs text-slate-500">Full Stack Developer (Frontend & Backend)</p>
                        <div className="flex gap-3 pt-3">
                            <a
                                href="https://www.linkedin.com/in/gloriadeitos/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-800 transition hover:bg-slate-200"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/gloriadeitos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-800 transition hover:bg-slate-200"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </section>

                    <section className="border-t border-slate-200 pt-4">
                        <h4 className="mb-3 text-sm font-semibold text-slate-700">Projeto</h4>
                        <p className="text-sm text-slate-700">PUCP-PR DevOps: Aquarium</p>
                    </section>

                    <section className="border-t border-slate-200 pt-4">
                        <h4 className="mb-3 text-sm font-semibold text-slate-700">Tecnologias</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li>Frontend: React + TypeScript + Tailwind</li>
                            <li>Infra: Docker + Docker Compose</li>
                        </ul>
                    </section>
                </div>

                <div className="border-t border-slate-200 p-3 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} Gloria Deitos
                </div>
            </aside>
        </>
    );
};

export default Sidebar;