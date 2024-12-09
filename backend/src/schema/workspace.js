
import mongoose from "mongoose";

const workspaceSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'workspace name is required'],
        unique:true
    },
    description:{
        type:String
    },
    members:[
        {
            memberId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'User',
            },
            role:{
                type:String,
                enum:['admin','member'],
                default:'member'
            }
        }
    ],
    joinCode:{
        type:String,
        required:[true,'join code is required']
    },
    channels:[{
        type:mongoose.Schema.Types.ObjetcId,
        ref:'Channel'
    }]
});

const Workspace = mongoose.model('Workspace',workspaceSchema);

export default Workspace;