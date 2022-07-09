import Creative from "../creative";
import Drop from "../drop";
import Home from "../home";
import Portfolio from "../portfolio";
import Profileskills from "../profileskills";
import Socialmedia from "../socialmedia";
import Work from "../work";

function Homepage() {
    return (
        <div>
            <Home />
            <Work />
            <Portfolio />
            <Profileskills />
            <Creative />
            <Socialmedia />
            <Drop />
        </div>

    );
}
export default Homepage;
