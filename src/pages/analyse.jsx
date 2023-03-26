import { Component }from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import StyleDrop from '../components/styledrop';

class Analyse extends Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null,
            list: null,
            analyse: false,
            message: null,
            backend: import.meta.env.VITE_BACKEND_URL,
            paragraph: null
        };
        sessionStorage.removeItem("Summary");
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onDrop = (acceptedFiles) => {
        this.setState({file:acceptedFiles[0]});
        this.setState({list : acceptedFiles.map(file => (
            <li key={file.path}>
              {file.path} - {file.size} bytes
            </li>
          ))});
      }

    onFormSubmit(e){
        this.setState({analyse:true});
        e.preventDefault();
        const formData = new FormData();
        formData.append('myVoice',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post(this.state.backend+"/analyse",formData,config)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("Paragraph",response.data.text);
                axios.post(this.state.backend+"/summarize",{"paragraph":response.data.text})
                    .then((response) => {
                        console.log(response.data);
                        this.setState({message:"Click the button below to view the PDF"});
                        sessionStorage.setItem("Summary",response.data.body.summary);
                        this.setState({analyse:false});
                    }).catch((error) => {
                        console.log(error);
                        this.setState({message: "Server : "+error.message})
                        this.setState({analyse:false});
                });
            }).catch((error) => {
                console.log(error);
                this.setState({message: "Server : "+error.message})
                this.setState({analyse:false});
        });
    }

    render() {
        return (
            <form encType="multipart/form-data" onSubmit={this.onFormSubmit}>
                <div className="flex flex-col gap-10 items-center">
                    <h1 className="text-center text-secondary text-xl">File Upload</h1>
                    <StyleDrop setFile={this.onDrop} files={this.state.list} />
                    {this.state.message !== null | undefined?<p className=' text-secondary text-md '>{this.state.message}</p>:""}
                    {sessionStorage.getItem("Summary")?<></>:
                    <button type="submit"  className={this.state.analyse?"btn btn-outline btn-primary items-center border-2 shadow-xl shadow-neutral rounded-xl px-4 py-2 hover:scale-110 active:scale-90 loading":"btn btn-outline btn-primary items-center border-2 shadow-xl shadow-neutral rounded-xl px-4 py-2 hover:scale-110 active:scale-90 "}>
                        Analyse</button>}
                    {sessionStorage.getItem("Summary")?<Link className="button button-primary border-2 shadow-xl shadow-accent rounded-xl px-4 py-2 hover:scale-110 active:scale-90" to="sample">View PDF</Link>:<></>}
                </div>
            </form>
        )
    }
}

export default Analyse;