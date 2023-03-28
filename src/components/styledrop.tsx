import { useDropzone } from 'react-dropzone';

const StyleDrop: (arg: any) => JSX.Element = (props) => {
  const {
    getRootProps,
    getInputProps,
  } = useDropzone({ maxFiles: 1, onDrop: acceptedFiles => {
    console.log(acceptedFiles);
    props.setFile(acceptedFiles);
    }});

  return (
    <div className="container">
      <div className='flex flex- items-center p-14 border-2 border-dashed rounded-xl bg-base-100 border-secondary ease-in-out active:border-primary' {...getRootProps()}>
        <input {...getInputProps()} />
        {!props.files?<p>Drag 'n' drop some files here, or click to select files</p>:
        <aside>
            <ol className='list-disc'>{props.files}</ol>
      </aside>}
      </div>
    </div>
  );
}

export default StyleDrop;