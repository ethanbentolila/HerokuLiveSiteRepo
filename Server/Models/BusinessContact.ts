/*
  Name: Ethan Bentolila
  ID: 100783477

  Name: Marshall Presutto
  ID: 100775601

  Date: 2022-04-15
*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose.Schema

const BusinessContactSchema = new Schema
({

        ContactName: String,
        ContactNumber: String,
        ContactEmail : String
},
{  
    collection : "BusinessContact"  
});

const Model = mongoose.model("BusinessContact",BusinessContactSchema);
export default Model;