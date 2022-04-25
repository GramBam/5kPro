const express = require('express')
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')


// Connect to Database
connectDB()

const app = express()


//Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'WELCOME' })
})


app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))