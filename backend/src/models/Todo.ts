import {Schema, model} from 'mongoose';

const TodoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    task: {
        type: String,
        required: true
    }
})

export default model('Todo', TodoSchema);