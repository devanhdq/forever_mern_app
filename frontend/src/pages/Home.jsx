import Hero from "../components/Hero.jsx";
import LatestCollection from "../components/LatestCollection.jsx";
import BestSellers from "../components/BestSellers.jsx";
import NewsletterBox from "../components/NewsletterBox.jsx";

const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollection/>
            <BestSellers/>
            <NewsletterBox/>
        </div>
    )
}

export default Home