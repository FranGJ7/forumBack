import mongoose from "mongoose"

mongoose.set("strictQuery", true)
mongoose.set("strictPopulate", false)

export async function connect(){
    try{
        const connection = await mongoose.connect("mongodb+srv://frangj7:h9N3syn5qTqS6QwK@websocket.gvpx6re.mongodb.net/?retryWrites=true&w=majority")
        console.log("Conectado ao Atlas")
    } catch(error){
        console.log(error.message)
    }
}