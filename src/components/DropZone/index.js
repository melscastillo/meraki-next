import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import ReactDropzone from "react-dropzone";
import request from "superagent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  onDrop = (files) => {
    // POST to a test endpoint for demo purposes
    const req = request.post(
      "https://s3.console.aws.amazon.com/s3/buckets/meraki-app/Meraki"
    );

    files.forEach((file) => {
      req.attach(file.name, file);
    });

    req.end();
  };

  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
    });
  };

  render() {
    const previewStyle = {
      display: "inline",
      width: 100,
      height: 100,
    };

    return (
      <div className="app">
        <h2>Image Previews</h2>
        {/*         <ReactDropzone accept="image/*" onDrop={this.onPreviewDrop}>
          Drop an image, get a preview!
        </ReactDropzone> */}
        <ReactDropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps }) => (
            <div {...getRootProps()}>
              <p>Drop files here, or click to select files</p>
            </div>
          )}
        </ReactDropzone>
        {this.state.files.length > 0 && (
          <div>
            <h3>Previews</h3>
            {this.state.files.map((file) => (
              <img
                alt="Preview"
                key={file.preview}
                src={file.preview}
                style={previewStyle}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
