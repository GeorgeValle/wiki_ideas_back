import mongoose from 'mongoose';
import './ConnectionDAOMongo.js';

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 1,
        maxLength: 100,
        required: true
    },
    content: {
        type: String,
        minLength: 1,
        required: true
    },
}, {timestamps: true});

const Topic = mongoose.model('Topic', topicSchema);
export default Topic;