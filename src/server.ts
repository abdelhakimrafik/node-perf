import express, { Application } from "express";

class Server {
  private readonly app: Application;

  constructor() {
    this.app = express();
  }

  async start(opt?): Promise<void> {
    const port = opt?.port || 3000;
    this.app.listen(port, () => {
      console.log(`🚀 Server started at port: ${port}`);
    });
  }
}

export default new Server();
