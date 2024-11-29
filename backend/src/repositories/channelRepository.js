
import Channel from './../schema/channel.js';
import crudRepository from "./crudRepository.js";

const channelRepository={
    ...crudRepository(Channel),
    deleteMany:async function(channelIds){
        const response=await Channel.deleteMany({
            _id:{
                $in:channelIds
            }
        })
        return response;
    }

};

export default channelRepository; 