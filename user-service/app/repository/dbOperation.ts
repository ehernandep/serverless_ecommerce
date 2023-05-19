import { DBClient } from "../utility/databaseClient";

export class DBOperation {
  constructor() {}
  async executeQuery(queryString: string, values) {
    const client = await DBClient();
    await client.connect();
    const result = await client.query(queryString, values);
    await client.end();
    return result;
  }
}
