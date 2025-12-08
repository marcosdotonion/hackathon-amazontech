import { storage } from "../config/firebase";

export async function uploadImage(file: Express.Multer.File) {
  const fileName = `${Date.now()}-${file.originalname}`;
  const blob = storage.file(fileName);

  const stream = blob.createWriteStream({
    contentType: file.mimetype,
  });

  stream.end(file.buffer);

  await new Promise((resolve, reject) => {
    stream.on("finish", resolve);
    stream.on("error", reject);
  });

  return `https://storage.googleapis.com/${storage.name}/${fileName}`;
}

