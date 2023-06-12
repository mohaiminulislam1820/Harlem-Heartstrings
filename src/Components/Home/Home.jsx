import Banner from "./Banner";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Testimonials></Testimonials>
        </main>
    );
};

export default Home;