import server from "./server"
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then(res => {
    console.log("Connection to the database made successfully");
    server.listen(PORT, () => {
        console.log(`Server listening on PORT ${PORT}`);
    });
});


