import express from 'express';

const app = express();


app.get('/', (request, response) => {
    return response.json({
        message: 'Olá NLW 05'
    })    
});

app.post('/', (resquest, response) => {
    return response.json({ message: 'User Saved sucessfully !!'})
});

app.listen(3333, () => console.log('Server Runnig on port 3333'));
