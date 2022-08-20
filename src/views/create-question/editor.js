import { useState } from 'react';
import { Box } from '@mui/material';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditor = ({ getContent }) => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const handleEditorChange = (state) => {
        setEditorState(state);
        sendContent();
    };

    const sendContent = () => {
        const data = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        // console.log(data);
        getContent(data);
    };

    return (
        <Box>
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbar={{
                    options: ['inline', 'list', 'colorPicker', 'emoji', 'image', 'history'],
                    list: {
                        inDropdown: true
                    }
                }}
            />
            {/* <button onClick={sendContent}>Get Data</button> */}
            {/* <textarea value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}></textarea> */}
        </Box>
    );
};

export default TextEditor;
