import app from './app'

const port = process.env.APP_PORT || 3001;
app.listen(port, () => console.log(`👨‍💻 App is running at port ${port}...`))

// app.listen(port, '0.0.0.0')
// app.listen(3001)
