import { useRef, useState,useCallback } from "react";
import UploadVoice from "../components/UploadVoice";
import axios from "axios"

const Home = () => {

    const [ analyse, setAnalyse ] = useState();
    const [ audio, setAudio ] = useState(null);
    const [ output, setOutput ] = useState();
    // console.log(backend);
    const analyser = useRef();
    const onDrop = useCallback(acceptedFiles => {
      // Do something with the files
      setAudio(acceptedFiles[0]);
      console.log(acceptedFiles[0]);
    }, [])

   
    return (
      <UploadVoice />
    )
}

export default Home;