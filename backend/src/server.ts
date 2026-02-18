import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/health", (_, res) => {
  res.json({ status: "ok", online: true })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("API rodando na porta", PORT)
})
