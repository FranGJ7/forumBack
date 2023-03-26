import express from "express"
import cors from "cors"
import { routes } from "./routes"
import { connect } from "./database"

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

connect()

app.listen(3001, ()=> console.log("Aplicação iniciada na porta 3001"))