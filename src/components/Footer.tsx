const Footer = () => {
    const agora = new Date();
    const mes = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(agora);
    const mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1);
    const ano = new Intl.DateTimeFormat("pt-BR", { year: "numeric" }).format(agora);
    const mesAno = `${mesCapitalizado} ${ano}`;

    return (
        <footer className="border-t border-white/10 bg-[#030913]/80 px-4 py-4 text-center text-sm text-[#c6d5f3] backdrop-blur-md sm:px-6">
            © Gloria Maria Deitos Gomes da Silva - {mesAno}
        </footer>
    );
};

export default Footer;