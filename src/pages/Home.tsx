import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import DescriptionSection from "../components/sections/DescriptionSection";
import PlantsSection from "../components/sections/PlantsSection";
import FishSection from "../components/sections/FishSection";
import SubstratesSection from "../components/sections/SubstratesSection";
import DecorationsSection from "../components/sections/DecorationsSection";
import ReferencesSection from "../components/sections/ReferencesSection";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        const header = document.querySelector<HTMLElement>("[data-site-header='true']");

        if (!header) {
            return;
        }

        const setOffset = () => {
            const height = header.getBoundingClientRect().height;
            root.style.setProperty("--header-offset", `${height}px`);
        };

        setOffset();

        const observer = new ResizeObserver(() => {
            setOffset();
        });

        observer.observe(header);
        window.addEventListener("resize", setOffset);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", setOffset);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#010911] via-[#030f1d] to-[#06152a] text-[#d9e4ff]">
            <Header
                sidebarOpen={isSidebarOpen}
                onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
            />
            <Sidebar
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <main>
                <HeroSection />
                <DescriptionSection />
                <PlantsSection />
                <FishSection />
                <SubstratesSection />
                <DecorationsSection />
                <ReferencesSection />
            </main>

            <Footer />
        </div>
    );
};

export default Home;