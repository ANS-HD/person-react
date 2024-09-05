import React, { useEffect, useRef, useState } from 'react';
import 'quill/dist/quill.snow.css'; // Quill 样式
import Quill from 'quill'; 

const CreateBlogPost: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['link'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['clean'],
          ],
        },
      });

      // Add event listener for when the content changes
      editor.on('text-change', () => {
        const content = editor.root.innerHTML;
        setEditorContent(content);
        extractMeta(content);
      });
    }
  }, []);

  const extractMeta = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Extract title and description based on your HTML structure
    const titleElement = doc.querySelector('h1');
    const descriptionElement = doc.querySelector('p.description');
    
    setTitle(titleElement ? titleElement.textContent || '' : '');
    setDescription(descriptionElement ? descriptionElement.textContent || '' : '');
  };

  const handleSubmit = async () => {
    const response = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, content: editorContent }),
    });

    if (response.ok) {
      alert('Blog post uploaded successfully!');
    } else {
      alert('Failed to upload the blog post.');
    }
  };

  return (
    <div>
      <h1>文章创建</h1>
      <div ref={editorRef} style={{ height: '400px' }}></div>
      <div>
        <h2>Extracted Information</h2>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Content:</strong> {editorContent}</p>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreateBlogPost;
