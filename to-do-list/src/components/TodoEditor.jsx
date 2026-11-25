import React, { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeyDown = (e) => {
    // 한글 조합 중 Enter는 두 번 들어오므로 무시
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (!content.trim()) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <div className="Editor">
      <input
        type="text"
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="이루고 싶은 일..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default TodoEditor;
