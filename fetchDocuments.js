const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://root:<Password>@cluster0.prawc1z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'test';
const collectionName = 'solicitudes';

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); 

app.get('/obtener_solicitudes', async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const documents = await collection.find({}).toArray();
        
        
        const formattedDocuments = documents.map(doc => ({
            id: doc._id.toString(), 
            responsable: doc.responsable,
            fecha: doc.fecha,
            solicitante: doc.solicitante,
            estatus: doc.estatus
        }));

        res.json(formattedDocuments);
    } catch (err) {
        res.status(500).json({ error: 'Error al consultar la colección' });
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
