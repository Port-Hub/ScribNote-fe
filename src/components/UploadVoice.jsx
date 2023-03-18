import { Component }from 'react'
import axios from 'axios';
import Loader from './loader';

class UploadVoice extends Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null,
            analyse: false,
            backend: import.meta.env.VITE_BACKEND_URL,
            paragraph: null
        };
        sessionStorage.setItem("Summary",null);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
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
                        sessionStorage.setItem("Summary",response.data.body.summary);
                        this.setState({analyse:false});
                    }).catch((error) => {
                        console.log(error);
                        this.setState({analyse:false});
                });
            }).catch((error) => {
                console.log(error);
                this.setState({analyse:false});
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            // <>
            //     {audio !== null ?
            //           <p>The Audio File is Uploaded ... </p> :
            //           <input type={"file"} name="audio" onInput={(e) => onDrop(e.target.files)} className="border-2 shadow-xl bg-transparent shadow-sky-900 rounded-xl px-4 py-2" />
            //     }
            <form encType="multipart/form-data" onSubmit={this.onFormSubmit}>
                <div className="flex flex-col gap-10 items-center">
                    <h1 className="text-center text-sky-700 text-4xl">ScribNote</h1>
                    <h1 className="text-center text-sky-700 text-xl">File Upload</h1>
                    <input type="file" name="myVoice" onChange= {this.onChange} />
                    <button type="submit"  className="border-2 shadow-xl shadow-sky-900 rounded-xl px-4 py-2 hover:scale-110 active:scale-90">{this.state.analyse?<Loader />:<p>Analyse</p>}</button>
                </div>
            </form>
        )
    }
}

export default UploadVoice;