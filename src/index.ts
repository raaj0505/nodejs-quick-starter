import app from "./App";

const port = process.env.PORT || 4000;

app.listen(port, (err: Error) => {
    if (err) {
        return console.error(err);

    }
    return console.log(`server is listening on ${port}`)
});