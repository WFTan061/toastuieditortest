import React,{useState,useRef} from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'

import{Editor} from '@toast-ui/react-editor'

function HomePage(){
    // const [testKit,setTestkit] = useState(0);
    var editorRef = useRef(null);
    const handleOnChange = (event)=>{
        console.log(event);
    }
    return (
        <div>
        <Editor
            initialValue="hello react editor world!"
            // previewStyle="vertical"
            height="440px"
            initialEditType="markdown"
            usageStatistics={false}
            useCommandShortcut={true}
            ref = {editorRef}
            onChange={handleOnChange}
        />
        <button onClick = {()=>{
            console.log("hi");
            console.log(editorRef.current.editorInst.getMarkdown())
            console.log(editorRef.current.getRootElement())
        }}>t</button>
        </div>
    );
}

export default HomePage;