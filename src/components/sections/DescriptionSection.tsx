const DescriptionSection = () => {
    return (
        <section id="descricao" className="relative h-[100dvh] overflow-hidden bg-gradient-to-br from-[#040913] via-[#0c1830] to-[#173456]">
            <div className="pointer-events-none absolute top-8 left-8 h-56 w-56 rounded-full bg-[#8ab6ff]/20 blur-3xl"></div>
            <div className="pointer-events-none absolute bottom-10 right-10 h-64 w-64 rounded-full bg-[#568ce0]/20 blur-3xl"></div>
            <div className="mx-auto mt-[var(--header-offset)] flex h-[calc(100dvh-var(--header-offset))] max-w-7xl items-center px-4 py-16 sm:px-6">
                <div className="w-full rounded-2xl border border-white/20 bg-[#0d1e38]/58 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <p className="text-sm font-semibold tracking-[0.2em] text-[#a9c2ff]">DESCRIÇÃO DA DISCIPLINA</p>
                    <h2 className="mt-3 text-2xl font-semibold text-[#f3f7ff] sm:text-4xl">
                        DevOps: Atividade Formativa e Somativa
                    </h2>

                    <p className="mt-4 text-justify text-sm leading-relaxed text-[#d4e0fb] sm:text-base">
                        Neste trabalho prático, o objetivo é construir um fluxo completo de CI/CD com GitHub e GitHub
                        Actions, evoluindo o mesmo repositório ao longo das semanas e finalizando com a dockerização da aplicação.
                    </p>

                    <p className="mt-4 text-justify text-sm leading-relaxed text-[#d4e0fb] sm:text-base">
                        O projeto foi escolhido com base em um interesse pessoal: aquarismo. A proposta é transformar esse
                        tema em uma aplicação prática para aprender DevOps enquanto desenvolvo algo de que realmente gosto.
                    </p>

                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                        <article className="rounded-xl border border-white/15 bg-[#102749]/55 p-4">
                            <h3 className="text-sm font-semibold text-[#ecf3ff]">Semana 2 - Atividade Formativa 1</h3>
                            <ul className="mt-2 space-y-1 text-xs leading-relaxed text-[#c6d5f3]">
                                <li>Criar repositório público no GitHub.</li>
                                <li>Ter branch além da main e 5+ commits.</li>
                                <li>Criar ao menos 1 pull request para merge.</li>
                                <li>Entregar print com URL e conteúdo do repositório.</li>
                            </ul>
                        </article>

                        <article className="rounded-xl border border-white/15 bg-[#102749]/55 p-4">
                            <h3 className="text-sm font-semibold text-[#ecf3ff]">Semana 3 - Atividade Formativa 2 (CI/CD)</h3>
                            <ul className="mt-2 space-y-1 text-xs leading-relaxed text-[#c6d5f3]">
                                <li>Configurar CI com GitHub Actions.</li>
                                <li>Configurar CD (delivery/deployment).</li>
                                <li>Gerar PR com workflows executando com sucesso.</li>
                                <li>Entregar print da PR com os checks aprovados.</li>
                            </ul>
                        </article>

                        <article className="rounded-xl border border-white/15 bg-[#102749]/55 p-4">
                            <h3 className="text-sm font-semibold text-[#ecf3ff]">Semana 7 - Atividade Somativa 1 (Docker)</h3>
                            <ul className="mt-2 space-y-1 text-xs leading-relaxed text-[#c6d5f3]">
                                <li>Adicionar Dockerfile ao projeto.</li>
                                <li>Testar app rodando em container.</li>
                                <li>Manter configuração atualizada na main.</li>
                                <li>Entregar evidências: repo, PR CI/CD, docker ps e Dockerfile.</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DescriptionSection;