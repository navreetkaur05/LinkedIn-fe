import react from "react"
import Left from  "../component/Left"
import NavbarFeed from "../component/NavbarFeed";
import Middle from "../component/Middle";
import Right from "../component/Right";

const Feed = () => {
    return(<>
    <NavbarFeed />
    <section className="flex">
        <Left />
        <Middle />
        <Right />
        </section>
    </>)
}

export default Feed;