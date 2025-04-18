import db from "@/instantdb/database";
import { FileOpts } from "@instantdb/react";

class FileService {
  async uploadFile(path: string, file: File, opts?: FileOpts) {
    const { data } = await db.storage.uploadFile(path, file, opts);

    return data.id;
  }
}

const fileServiceInstance = new FileService();

export default fileServiceInstance;
