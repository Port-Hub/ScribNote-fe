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

    // const queryVoice = async () => {
    //   try
    //   {
    //     setAnalyse(true);
    //     let audioFile = new FormData();
    //     audioFile.append("file", audio);
    //     console.log(audioFile);
    //     const request = await axios.post(
    //       backend+"/analyse",
    //       audioFile,
    //     )
    //     const output= await request.data;
    //     if(request.status === 200)
    //     {
    //       console.log(output)
    //       setAnalyse(false)
    //     }
    //     else
    //     {
    //       console.log(output)
    //       setAnalyse(false)
    //     }
    //   }
    //   catch(e)
    //   {
    //     console.log(e);
    //     setAnalyse(false);
    //   }
    // }
  
    return (
      <UploadVoice />
    )
}

export default Home;