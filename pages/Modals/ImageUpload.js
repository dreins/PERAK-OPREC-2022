import React from "react"
import { useState } from "react"
import Image from "next/image";

function ImageUpload() {
    const[fileInput,setFileInput ] = useState('');
    const[Source, setSource] = useState('/img/profile-pic.png')
    const handleFile =(e) =>{
        const file =e.target.files[0];
        previewFile(file);
    }
    const previewFile =(file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
            setSource(reader.result);
        }
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        if(!Source) return;
        uploadImage (Source);
    }
    const uploadImage = (base64EncodedImage) => {
        console.log(base64EncodedImage);
    }
    return(
        <div className="grid justify-items-start">
            <div className=" border-black-500 flex items-center justity-center">
                {Source &&(
                    <Image class="border-solid" src = {Source} alt = "Image" width={100} height={100}/>
                )}
            </div>
            <form onSubmit={handleSubmit}>
                <input className="" type="file" accept="Image/" onChange={handleFile} value = {fileInput} onSubmit={() => setFileInput(false)}/>
            </form>
        </div>
    )
}

export default ImageUpload
