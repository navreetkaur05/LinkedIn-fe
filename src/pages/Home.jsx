import react from "react"
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Explore from "../component/Explore";
import FindJob from "../component/FindJob";
import PostJob from "../component/PostJob";
import SoftwareTools from "../component/SoftwareTools";
import Games from "../component/Games";
import OpenToWork from "../component/OpenToWork";
import ConnectPeople from "../component/ConnectPeople";
import WhoIsLinkedInFor from "../component/WhoIsLinkedInFor";
import DreamStory from "../component/DreamStory";
import JoinLinkedIn from "../component/JoinLinkedIn";
import Footer from "../component/Footer";


const Home = () => {
    return(<>
        
        <Hero/>
        <Explore />
        <FindJob />
        <PostJob />
        <SoftwareTools />
        <Games />
        <OpenToWork />
        <ConnectPeople />
        <WhoIsLinkedInFor />
        <DreamStory />
        <JoinLinkedIn />
        
    </>)
}

export default Home;