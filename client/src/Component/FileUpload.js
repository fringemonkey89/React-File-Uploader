import React, {Fragment, useState } from 'react'
import axios from 'axios'

const FileUpload = () => {
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('choose file')
    const [upLoadedFile, setUpLoadedFile] = useState({})

    const onChange = e => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)

    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)

        try{
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }
        catch(err){

        }
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
               <div className='custom-file mb-4'>
                    <input type='file' className='custom-file-input' id='customeFile' onChange={onChange}/>
                    <label className='custom-file-label' htmlFor="customFile">
                        {filename}
                        </label>
                </div> 
                <input type='submit' value="Upload" className='btn btn-primary btn-block mt-4' />
            </form>
        </Fragment>
    )
}

export default FileUpload