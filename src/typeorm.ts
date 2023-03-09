import { Connection, createConnections, useContainer } from "typeorm-plus";
import { Container } from "typeorm-typedi-extensions";

let connections: Connection[];

export async function connect(): Promise<Connection[]> {

  const user_creation = Object.assign({
    type: "mysql",
    name: "default",
    database: process.env.USER_DB,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: true,
    logging: true,
    entities: [__dirname + "/models/userDb/*"]
  });

  const ALL_DATABASES = [user_creation];


  useContainer(Container);
  try {
    connections = await createConnections(ALL_DATABASES);
  } catch (error) {
    console.log("db error ::: ", error);
    throw error;
    
  }
  console.log("**********************!!!!!!", connections);
  return connections;
}

console.log("USERNAME", process.env.DB_USERNAME)
console.log("PASSWORD", process.env.PASSWORD)

