import Hero from "../components/Hero.jsx";
import LatestCollection from "../components/LatestCollection.jsx";
import BestSellers from "../components/BestSellers.jsx";
import NewsletterBox from "../components/NewsletterBox.jsx";
import OurPolicy from "../components/OurPolicy.jsx";

const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollection/>
            <BestSellers/>
            <OurPolicy/>
            <NewsletterBox/>
        </div>
    )
}

export default Home