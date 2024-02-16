import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';

function PostForm() {

    const [editorContent, setEditorContent] = useState();

    return (
        <div className="">
            <h2>Using CKEditor&nbsp;5 build in React</h2>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Insert post content</p>"
                config={{
                }}
                // onReady={editor => {
                //     // You can store the "editor" and use when it is needed.
                //     // console.log('Editor is ready to use!', editor);
                // }}
                onChange={(event, editor) => {
                    setEditorContent(editor.getData());
                }}
                // onBlur={(event, editor) => {

                // }}
            // onFocus={(event, editor) => {
            // }}
            />

            <div dangerouslySetInnerHTML={{__html:editorContent}} />
        </div>
    );
}

export default PostForm;