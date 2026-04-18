import express from "express"
import cors from "cors"
import fs from "fs"
import path from "path"

const app = express()
app.use(cors())
app.use(express.json())

const csvPath = path.join(process.cwd(), "emails.csv")

function escapeCsv(value) {
  return `"${String(value).replace(/"/g, '""')}"`
}

app.post("/api/emails", (req, res) => {
  const email = String(req.body?.email || "").trim().toLowerCase()
  if (!email || !email.includes("@")) {
    return res.status(400).json({ ok: false, message: "Invalid email" })
  }

  if (!fs.existsSync(csvPath)) {
    fs.writeFileSync(csvPath, `"email","createdAt"\n`)
  }

  const line = `${escapeCsv(email)},${escapeCsv(new Date().toISOString())}\n`
  fs.appendFileSync(csvPath, line)

  return res.json({ ok: true })
})

app.listen(5050, () => {
  console.log("Email API running on http://localhost:5050")
})