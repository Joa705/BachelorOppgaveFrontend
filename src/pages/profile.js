import React, { useRef, useState } from "react";
import "../App.css";
import { DefaultPanel } from "../components/admin/panel";
import { UrlConfig } from "../config";
import { UseAuth } from "../functions/authentication";

export default function Profile() {
  const { token, profilePicture } = UseAuth();
  const [inputFile, setInputFile] = useState(0);
  const preview = useRef();

  function previwProfilePic(file) {
    setInputFile(file);
    preview.current.src = URL.createObjectURL(file);
  }

  async function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  async function submitForm() {
    await blobToBase64(inputFile).then((profileImg) => {
        let url = new URL(UrlConfig.serverUrl + "/User/id/" + token);
        fetch(url, {
          method: "post",
          headers: {
            userId: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profileImg),
        }).then((res) => console.log(res.status));
    });
  }


  return (
    <>
      <div className="Appcontainer">
        <DefaultPanel
          header={"Rediger bruker"}
          title={"Her kan du endre dine bruker opplysninger"}
        />
        <form
          className="m-2 p-4"
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          <div class="form-group">
            <input
              required
              type="file"
              accept="image/*"
              class="form-control"
              id="profilePic"
              placeholder="File"
              onChange={(e) => previwProfilePic(e.target.files[0])}
            />
            <img
              ref={preview}
              src={profilePicture}
              style={{ width: "200px" }}
              alt="Image preview"
            ></img>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
