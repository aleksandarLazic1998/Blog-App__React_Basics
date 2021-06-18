import { useEffect,useState} from "react";

const useFetch = (url) => {
    // Data that was hardcoded for the purpose of refacturing it later with database
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    // To get the data first deploy database with fake API JSON Server
    useEffect(() => {
        fetch(url)
            .then(response => {
              if(response.status === 200){
                return response.json()
              } else{
                throw new Error('Bad request!!!');
              } 
            })
            .then(data => {
                setData(data);
                setLoading(false)
            })
            .catch(err => {
                setData(null);
                setLoading(false);
                setError(err.message);
            })

    }, [url]);

    return {data,loading,error};
}

export default useFetch;