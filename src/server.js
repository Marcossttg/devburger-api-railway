import app from './app.js'

const port = process.env.APP_PORT || 3001;
app.listen(port, '0.0.0.0')

// app.listen(port, '0.0.0.0', () => console.log(`👨‍💻 App is running at port ${port}...`))
// app.listen(3001)
