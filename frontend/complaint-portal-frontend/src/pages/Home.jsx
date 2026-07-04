import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Statistics from "../components/home/Statistics";
import Footer from "../components/home/Footer";
import Workflow from "../components/home/WorkFlow";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Workflow />
            <Statistics />
            <Footer />
        </>
    );
}