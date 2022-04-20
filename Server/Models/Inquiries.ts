/*
  Name: Ethan Bentolila
  ID: 100783477

  Name: Marshall Presutto
  ID: 100775601

  Date: 2022-04-15
*/


import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose.Schema

const InquiriesSchema = new Schema
({

        FullName: String,
        PhoneNumber: String,
        EmailAddress : String,
        Message : String
},
{  
    collection : "inquiries"  
});

const Model = mongoose.model("inquiries",InquiriesSchema);
export default Model;