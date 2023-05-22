import express from "express";
import categoryRoutes from "./routes/category.routes.js";
import productsRoutes from "./routes/products.routes.js";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/api", productsRoutes);
app.use("/api", categoryRoutes);

app.listen(port);
console.log('server listen on port', port);