import mongoose from "mongoose"

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGP_URL as string)
        console.log("mongo connected");

    } catch (error) {
        console.log("unable to connect", db);


    }
}
export default db