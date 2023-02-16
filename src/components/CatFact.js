import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
const url = 'https://catfact.ninja/fact';


function CatFact() {
    const { data : oneCatFact, isLoading, refetch, error } = useQuery(['catFact'], () => {
        return Axios.get(url)
        .then((res) => res.data.fact);
    });
    if (isLoading) {
        return (
        <h2>A Cat Fact is Loading...</h2>);
    }
    
    return (
        <div>
            <h1>Cat Fact</h1>
            <p>{oneCatFact}</p>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-20 ml-2 font-extrabold text-black" onClick={refetch}> new fact!</button>
        </div>
    );
}

export default CatFact;