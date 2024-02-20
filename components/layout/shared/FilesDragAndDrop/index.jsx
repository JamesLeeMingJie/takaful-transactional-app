import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

export default function FilesDragAndDrop({ onUpload, count, formats, children }) {
  const drop = useRef(null);

  useEffect(() => {
    drop.current?.addEventListener('dragover', handleDragOver);
    drop.current?.addEventListener('drop', handleDrop);

    return () => {
      drop.current?.removeEventListener('dragover', handleDragOver);
      drop.current?.removeEventListener('drop', handleDrop);
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = [...e.dataTransfer.files];

    if (count && count < files.length) {
      console.log(`Only ${count} file${count !== 1 ? 's' : ''} can be uploaded at a time`);
      return;
    }

    // This function was written to replicate the arrow function below for my own understanding
    function fileValidation(file) {
      return function formatValidation(format) {
        return file.name.toLowerCase().endsWith(format.toLowerCase())
      }
    }

    // This can be used in place of the fileValidation below (The method below is an example of currying)
    // (file) => !formats.some((format) => file.name.toLowerCase().endsWith(format.toLowerCase()))

    // To sanitise file size!!!
    if (formats && !files.some(fileValidation)) {
      alert(`Only following file formats are acceptable: ${formats.join(', ')}`);
      return;
    }

    if (files && files.length) {
      onUpload(files);
      alert(`${files[0].name} has been uploaded!`)
    }
  };

  return (
    <div ref={drop} className='pb-8'>
      {children}
    </div>
  )
}

FilesDragAndDrop.propTypes = {
  onUpload: PropTypes.func.isRequired,
};