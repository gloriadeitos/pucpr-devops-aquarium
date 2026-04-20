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
                className={`fixed inset-0 z-50 transition ${open ? 'bg-[#010911]/70 backdrop-blur-sm' : 'pointer-events-none bg-transparent'}`}
            ></button>

            <aside
                className={`fixed inset-y-0 right-0 z-[60] flex w-full flex-col border-l border-[#243a63] bg-gradient-to-b from-[#031022] to-[#081327] shadow-2xl transition-transform duration-300 ease-in-out sm:w-96 ${open ? 'translate-x-0' : 'translate-x-full'}`}
                aria-hidden={!open}
            >
                <div className="flex items-center justify-between border-b border-[#243a63] p-4">
                    <h3 className="font-semibold text-[#d9e4ff]">Informações</h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#cfd9ef] transition hover:bg-white/5 hover:text-white"
                        aria-label="Fechar painel"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className="flex-1 space-y-6 overflow-y-auto p-4">
                    <section>
                        <h4 className="mb-3 text-sm font-semibold text-[#b9c9ee]">Desenvolvedora</h4>
                        <p className="text-sm font-medium text-[#ecf2ff]">Gloria Maria Deitos Gomes da Silva</p>
                        <p className="text-xs text-[#8ea4cf]">Full Stack Developer (Frontend & Backend)</p>
                        <div className="flex flex-wrap gap-4 pt-3">
                            <a
                                href="https://www.linkedin.com/in/gloriadeitos/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-none border-0 px-0 py-1 text-sm text-[#e5ecff] transition hover:text-white hover:underline hover:underline-offset-4"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/gloriadeitos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-none border-0 px-0 py-1 text-sm text-[#e5ecff] transition hover:text-white hover:underline hover:underline-offset-4"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </section>

                    <section className="border-t border-[#243a63] pt-4">
                        <h4 className="mb-3 text-sm font-semibold text-[#b9c9ee]">Projeto</h4>
                        <p className="text-sm text-[#c6d5f3]">PUCP-PR DevOps: Aquarium</p>
                    </section>

                    <section className="border-t border-[#243a63] pt-4">
                        <h4 className="mb-3 text-sm font-semibold text-[#b9c9ee]">Tecnologias</h4>
                        <ul className="space-y-2 text-sm text-[#c6d5f3]">
                            <li>Frontend: React + TypeScript + Tailwind</li>
                            <li>Infra: Docker + Docker Compose</li>
                        </ul>
                    </section>
                </div>

                <div className="border-t border-[#243a63] p-3 text-center text-xs text-[#8ea4cf]">
                    © {new Date().getFullYear()} Gloria Maria Deitos Gomes da Silva
                </div>
            </aside>
        </>
    );
};

export default Sidebar;