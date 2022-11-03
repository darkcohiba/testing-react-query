import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
const url = 'https://api.chucknorris.io/jokes/random';

function ChuckNorrisJokes() {
    const {data, isLoading, refetch} = useQuery(['chuckNorrisJokes'], () => {
        return Axios.get(url)
        .then((res) => res.data.value);
    });
    if (isLoading) {
        return (
        <h2>A Joke is Loading...</h2>);
    }
    return (
        <div>
            <h1>Chuck Norris Jokes</h1>
            <p>{data}</p>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-20 ml-2 font-extrabold text-black" onClick={refetch}> new joke!</button>
        </div>
    );
}

export default ChuckNorrisJokes;