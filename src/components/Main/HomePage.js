import Banner from "../Banner";
import New from "../Features/New";
import SectionEight from "../Features/SectionEight";
import SectionFive from "../Features/SectionFive";
import SectionFour from "../Features/SectionFour";
import SectionNine from "../Features/SectionNine";
import SectionOne from "../Features/SectionOne";
import SectionSeven from "../Features/SectionSeven";
import SectionSix from "../Features/SectionSix";
import SectionThree from "../Features/SectionThree";
import SectionTwo from "../Features/SectionTwo";

function HomePage() {
    return (
        <>
            <Banner/>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
            <SectionEight/>
            <SectionNine/>
            <New/>
        </>
    );
}
export default HomePage;