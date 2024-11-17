import User from "../schema/user.js";

import crudRepository from "./crudRepository.js";
import Channel from './../schema/channel.js';

const channelRepository={
    ...crudRepository(Channel),

};

export default channelRepository;