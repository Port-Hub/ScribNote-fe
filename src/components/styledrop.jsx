import { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px',
  borderWidth: 2,
  borderRadius: 12,
  borderColor: '#cccccc',
  borderStyle: 'dashed',
  backgroundColor: '#fafafc',
  color: '#bdbdbd',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const StyleDrop = (props) => {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({ maxFiles: 1, onDrop: acceptedFiles => {
    console.log(acceptedFiles);
    props.setFile(acceptedFiles);
    }});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div className="container">
      <div {...getRootProps({style})}>
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