import { useRef, useState,useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios"

const Home = () => {

    const [ sentence, setSentence ] = useState();
    const [ analyse, setAnalyse ] = useState();
    const [ output, setOutput ] = useState();
    const analyser = useRef();
    const onDrop = useCallback(acceptedFiles => {
      // Do something with the files
      console.log("File accepted")
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    const queryVoice = async () => {
      try
      {
        setAnalyse(true);
        const inp = { inputs: sentence, options: { wait_for_model: true } };
        const request = await axios.post(
          "https://api-inference.huggingface.co/models/RahulRST/emoTer",
          inp,
          {
            headers:
            {
              Authorization: import.meta.env.VITE_HEADER_KEY,
            }
          }
        )
        const output= await request.data;
        if(request.status === 200)
        {
          let emote = output[0][0];
          emote.label = emote.label.charAt(0).toUpperCase()+emote.label.slice(1);
          setOutput(emote);
          setAnalyse(false)
        }
        else
        {
          setOutput({
            label: output,
            score: 1
          })
          setAnalyse(false)
        }
      }
      catch(e)
      {
        if(e.response.status === 400)
        {
          setOutput({
            label: "Enter text to Analyse",
            score: 1
          })
          setAnalyse(false);
        }
        else
        {
          setOutput({
            label: "Error in Reaching Server",
            score: 1
          })
          console.log(e.response)
          setAnalyse(false)
        }
      }
    }

    const Loader = () => {
      return(
        <div aria-label="Loading..." role="status">
          <svg className="h-10 w-10 animate-spin stroke-sky-700" viewBox="0 0 256 256">
            <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"></line>
            <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"></line>
            <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"></line>
            <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"></line>
            </svg>
          </div>
      )
    }
  
    return (
    <>
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-center text-sky-700 text-4xl">ScribNote</h1>
        <input className='bg-transparent rounded-xl shadow-xl shadow-sky-900 border-solid border-2 p-6' type="text" placeholder='Type it out' onChange={(e) => setSentence(e.target.value)} />
        <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>

        <button ref={analyser} className="border-2 shadow-xl shadow-sky-900 rounded-xl px-4 py-2 hover:scale-110 active:scale-90" onClick={queryVoice}>
          { analyse?<Loader />:<p>Analyse</p>}</button>
      </div>
    </>
    )
}

export default Home;