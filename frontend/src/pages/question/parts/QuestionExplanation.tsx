import { Editor } from "@tinymce/tinymce-react";

import CONFIG from "../../../constants/config";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function QuestionExplanation({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-3">
      <Editor
        apiKey={CONFIG.TINYMCE_API_KEY}
        value={value}
        onEditorChange={onChange}
        init={{
          height: 200,

          menubar: false,

          branding: false,

          promotion: false,

          plugins: [
            "lists",
            "link",
            "image",
            "code",
          ],

          toolbar:
            "undo redo | " +
            "bold italic underline strikethrough | " +
            "alignleft aligncenter alignright | " +
            "bullist numlist | " +
            "link image | " +
            "code",

          content_style: `
            body {
              font-family: Inter, sans-serif;
              font-size: 14px;
              padding: 12px;
            }
          `,
        }}
      />
    </div>
  );
}