//*** this file export the connections to alls DAOS ***/
import dotenv from 'dotenv';
dotenv.config();
import mongoose, { mongo } from 'mongoose';

const uri= process.env.MONGO_URI
const ear = mongoose.connection;



//mongoose.connect(`mongodb://db:27017/${process.env.MONGO_DATABASE}`,
mongoose.connect(uri,
    {
        // user: process.env.MONGO_USERNAME,
        // pass: process.env.MONGO_PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    }).catch(err => { console.log(err) })

ear.once('open', _ => {
    console.log(`Database is connected to: `, uri)
})

ear.on('error', err => { console.log(`Type error: ${err}`) })
