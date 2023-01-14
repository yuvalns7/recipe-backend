import * as express from 'express'
import * as mongoose from 'mongoose'
import * as dotenv from "dotenv";
import { scrapingRecipes } from './scraping/recipesScraping';

const app = express()

const PORT = 8080
dotenv.config();

mongoose.connect("mongodb+srv://recipeAdmin:Aa123456@recipe.mkfhw2d.mongodb.net/recipesDB?retryWrites=true&w=majority")

const db = mongoose.connection
db.on("error", (err) => {
  console.error(err)
})
db.once("open", (err) => {
  console.log("connected to DB")
})

app.get('/', (req: express.Request, res: express.Response) => {
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello World</h1>')
})

app.listen(PORT, () => console.log(`app running on port ${PORT}`))

scrapingRecipes()