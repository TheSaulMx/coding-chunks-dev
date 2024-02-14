import { useState } from "react";

function PostForm() {

    const [title, setTitle] = useState('');

    return (
        <div>
            <form action="">
                <label>Title:
                    <input type="text" value={title} onChange={e => { setTitle(e.target.value); }} />
                </label>

            </form>
            <button onClick={() => console.log("TITLE: ", title)} >click</button>

        </div>
    );
}

export default PostForm;