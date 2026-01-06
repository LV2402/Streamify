import {StreamChat} from "stream-chat"
import "dotenv/config"

const apiKey=process.env.STREAM_API_KEY
const apiSecret=process.env.STREAM_API_SECRET

if(!apiKey || !apiSecret){
    console.error("Stream API key and secret are missing");
}

const streamClient = StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser=async(userData)=>{
    try{
        await streamClient.upsertUsers([userData]);
        return userData;
    }catch(err){
        console.error("Error in upserting stream user:",err);
    }
}

export const generateStreamToken=(userId)=>{
    try {
        //ensure userId is string
        const UIdStr=userId.toString();
        return streamClient.createToken(UIdStr);
    } catch (error) {
        console.error("Error in generating stream token:", error);
    }
};