import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatchDeco, useStateDeco } from "../../context/DecoSetContext";

function CKEditorFunc() {
  const [decoData, setDecoData] = useState();
  const dispatch = useDispatchDeco();
  const decoState = useStateDeco();

  const decoSet = () => {
    dispatch({ type: "DECO_SET", deco: decoData });
    console.log("editor deco=", decoState);
  };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          setDecoData(editor.getData());
        }}
        onBlur={(event, editor) => {
          decoSet();
        }}
        onFocus={(event, editor) => {}}
      ></CKEditor>
    </div>
  );
}

export default CKEditorFunc;
