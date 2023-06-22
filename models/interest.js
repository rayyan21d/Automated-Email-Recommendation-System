import { Schema, model, models } from 'mongoose';

const InterestSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
   
    interests: [{
        type: String,
        required: [true, 'Interests are required.'],
    }]
});

const Interest = models.Interest || model('Interest', InterestSchema);

export default Interest;