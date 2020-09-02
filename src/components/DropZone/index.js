import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

// import "./styles.css";

function App({ callback }) {
  const [photos, setPhotos] = React.useState([]);
  const maxNumber = 7;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList);
    setPhotos(imageList);
    const img1 = imageList[0].file;
    const img2 = imageList[1].file;
    const img3 = imageList[2].file;
    const img4 = imageList[3].file;
    const img5 = imageList[4].file;
    const img6 = imageList[5].file;
    const img7 = imageList[6].file;
    const imagesUrl = [img1, img2, img3, img4, img5, img6, img7];
    callback(imagesUrl);
    console.log(imagesUrl);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={photos}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default App;
