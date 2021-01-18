import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function CKEditorFunc() {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data="<p></p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      ></CKEditor>
    </div>
  );
}

export default CKEditorFunc;
