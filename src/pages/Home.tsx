import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50">
            <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
            <Sidebar
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-800">Bem-vindo</h2>
                    <p className="mt-2 text-slate-600">
                        Clique no botão de infos no canto direito do header para abrir a sidebar com
                        as informações da Gloria.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;