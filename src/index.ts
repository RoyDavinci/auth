import app from './app';

const PORT = process.env.PORT ?? '9800';

app.listen(PORT, () => {
    console.log(`app listening in on http://localhost:${PORT}`);
});
