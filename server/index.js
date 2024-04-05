const express = require("express")
const app = express()
const port = process.env.PORT || 5001
const connectDB = require("./modules/db")
app.use(express.json())

// connectDB()

app.use("/api/auth", require("./auth/route"))

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})
