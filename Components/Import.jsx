import React from "react";
export default ()=>{
    return(
        <div className="import">
            <h2>Import Products</h2>
            <p>Bulk upload your products</p>
            <p>Field must be in csv format</p>
            <button className="btn">Download Sample File</button>
            <div class="file-drop-container">
            <input type="file" id="fileInput" name="fileInput" class="file-input"/>
            <label for="fileInput" class="file-label">
            <span>Drag and drop a file here or click to select</span>
            </label>
</div>
            </div>
    )
}