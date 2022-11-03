import CatFact from "./CatFact.js";
import ChuckNorrisJokes from "./ChuckNorrisJokes.js";


function ApiHome() {
    return (
        <div>
            <h1>API Home</h1>
            <CatFact />
            <ChuckNorrisJokes />
        </div>
    );
}

export default ApiHome;