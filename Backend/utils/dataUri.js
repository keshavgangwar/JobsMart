import DataUriParser from "datauri/parser.js";
import path from "path";

const dataUri = (file) => {
  const parser = new DataUriParser();
  const ext = path.extname(file.originalname).toString();
  const data = parser.format(ext, file.buffer);
  return data;
};

export default dataUri;
