import {useState, useEffect} from "react"
import {API_URL} from "../utils/Constants"




export default function useFetch(cedula){

    const url = `${API_URL}${cedula}`

    const [loading, setLoading] = useState(true)

    const [error , setError] = useState(null)

    const [result, setResult] = useState(null)


    useEffect(()=>{


        (async()=>{
            try{
                const res = await  fetch(url);
                const json = await res.json();
                setResult(json);
                setLoading(false);
            } catch(err){

                setError(err);
                setLoading(false);
            }

        })();



    },[url])

    return { loading,result,error}
}  
