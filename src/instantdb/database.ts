import { init } from "@instantdb/react";
import config from "@/config/config";
import schema from "@/../instant.schema";

const db = init({ appId: config.APP_ID, schema: schema });

export default db;
