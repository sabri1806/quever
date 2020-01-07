const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({

    moviename: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    description:{
        type:String,
    }
,
    genre:{
        type:String,
    },
    year:{
        type:String,
    },
    updated_date: {
        type: Date,
        default: Date.now
        
    }
}, {
    timestamps: true,
});

//const movie = mongoose.model('movie',MovieSchema );
//module.exports = movie;
module.exports = Movie = mongoose.model('Movie', MovieSchema);