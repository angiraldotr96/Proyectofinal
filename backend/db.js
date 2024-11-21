const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://and097:vpPe5T25DJlJ9lc4@entrega.ldqd1.mongodb.net/?retryWrites=true&w=majority&appName=Entrega', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a MongoDB Atlas.');
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
