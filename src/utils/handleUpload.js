import { UPLOAD_IMAGE } from "@/constant/api";
import { IMAGE_UPLOAD_CONFIG } from "@/constant/config";
import axios from "axios";

const handleUpload = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(
      UPLOAD_IMAGE,
      formData,
      IMAGE_UPLOAD_CONFIG
    );

    console.log("File uploaded successfully:", response.data);
    return response.data;
    // Handle success, e.g., update UI, show a success message, etc.
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error(error);
    // Handle error, e.g., show an error message to the user
  }
};

export default handleUpload;
