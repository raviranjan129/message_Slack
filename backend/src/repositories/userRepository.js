import User from '../schema/user';

export const getUserByEmail= async(email)=>{
try {
    const user= await User.findOne({email});
    return user;
} catch (error) {
    console.log(error)
}
};

export const getUserByName=async(name)=>{
    try {
        const user=await User.findOne({username:name});
        return user;
    } catch (error) {
        console.log(error);
    }
};


export const createUser=async(user)=>{

    try {
        const newUser=await User.create(user);
        return newUser;
    } catch (error) {
        console.log(error);
    }
};

export const getUsers=async()=>{
    try {
        const users=await User.find();
        return users;
    } catch (error) {
        console.log(error);
    }
};

export const getUserById=async(id)=>{
    try {
        const user=await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
    }
};


export const deleteUser=async(id)=>{
    try {
        const user=await User.findByIdAndDelete(id);
        return user;
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = async(id,user)=>{

    try {
        const response=await User.findByIdAndUpdate(id,user,{new:true})
        return response;
    } catch (error) {
        console.log(error);
    }
};
