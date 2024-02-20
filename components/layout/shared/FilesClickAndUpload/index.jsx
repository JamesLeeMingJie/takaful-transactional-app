import { Component } from "react";

// export default function FilesClickAndUpload() {
//   return (
//     <span className='text-primary underline'>Browse File</span>
//   )
// }

class FilesClickAndUpload extends Component {
  state = {
    selectedFile: null,
  };

  onFileChange = (e) => {
    // To sanitise file formats and size!!!
    this.setState({
      selectedFile: e.target.files,
    });

    console.log(e.target.files);

    alert(`${e.target.files[0].name} has been uploaded!`)
  };

  // Functionality below is to POST file data to the backend (Using a button; not created yet!)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "uploadedFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Log details of the uploaded file
    console.log(this.state.selectedFile);
  };

  // To implement axios here, to post data in the backend

  render() {
    return (
      <>
        <input id="file-upload" type="file" className='hidden' onChange={this.onFileChange} />
        <label htmlFor="file-upload" className="text-primary underline pl-1 cursor-pointer">Browse File</label>
      </>
    )
  }
}

export default FilesClickAndUpload