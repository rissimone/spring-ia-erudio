import { useState } from "react";

import api from "../../services/api";

function GenetateImages() {

    const [prompt, setPrompt] = useState('');
    const [quality, setQuality] = useState('hd');
    const [n, setN] = useState('1');
    const [height, setHeight] = useState('1024');
    const [width, setWidth] = useState('1024');

    const [imageUrls, setImageUrls] = useState([]);

    const generateImage = async () => {
        try {
            const response = await api.get(`generate-image`, {
                params: {
                    prompt, 
                    quality,
                    n,
                    height,
                    width
                }
            });
            const data =  await response.data;
            console.log(data);
            setImageUrls(data)
        } catch (error) {
            console.log("Error Generating response: ", error);
        }
    }

    return (
        <div>
            <h2>Genetate Images</h2>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a prompt for Generate Images"
            />
            <button onClick={generateImage}>Generate Images</button>
            <div className="image-grid">
                
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Generated ${index}`} />
                ))}

                {[...Array(4 - imageUrls.length)].map((_, index) => (
                    <div key={index + imageUrls.length} className="empty-image-slot"></div>
                ))}

            </div>
        </div>
    );
}
export default GenetateImages;