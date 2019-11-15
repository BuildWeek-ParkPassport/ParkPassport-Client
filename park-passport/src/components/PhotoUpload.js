import React from 'react';
import FileUploadWithPreview from 'file-upload-with-preview';

export default function PhotoUpload() {

    return (

        <div class="custom-file-container" data-upload-id="myUniqueUploadId">
            <label><a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">&times;</a></label>
            <label class="custom-file-container__custom-file" >
                <input type="file" class="custom-file-container__custom-file__custom-file-input" accept="*" multiple aria-label="Upload Photo"></input>
                <input type="hidden" name="MAX_FILE_SIZE" value="10485760"></input>
                <span class="custom-file-container__custom-file__custom-file-control"></span>
            </label>
            <div class="custom-file-container__image-preview"></div>
        </div>

    )

}