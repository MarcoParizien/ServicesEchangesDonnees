import mongosse from "mongoose";

const planetSchema = mongosse.Schema({

    name:{type: String, unique:true, required:true}


});