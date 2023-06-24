import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


// Import data here and pass it down to the prompt card!
const springerEndpoint = "http://api.springernature.com/"


const methods = {
    single: "doi",
    set: "issn",
    setOfChapters: "isbn"
}
const doi = "10.1007/s11276-008-0131-4"
const finalndpoint = springerEndpoint + "metadata/json/?q=" + methods.single + ":" + doi + "&api_key=" + process.env.SPRINGER_API_KEY;

const finallendpoint = "https://api.springernature.com/metadata/json?q=doi:10.1007/s11276-008-0131-4&api_key=3deafdb219d7c8edf158686ab48668e9#"




export const GET = async (request) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({}).populate('creator')

        const raw = fetchSpringer();
        const processed = processSpringer(raw);

        return new Response(JSON.stringify(processed), { status: 200 })
        
        //return new Response(JSON.stringify(processed), { status: 200 })
        // What the above code does is fetch all the prompts from the database, and then return them as a JSON object with a status code of 200 (OK). the reason we are using json.stringify is because we are returning a JSON object, and we need to convert it to a string before we can return it.
        //The Response object is a built in object that allows us to return a response to the client. The first parameter is the body of the response, and the second parameter is the status code. it is necessary to stringify the body because the body can only be a string or a readable stream. why? because the body is sent over the network, and the network can only send strings or streams. how to confirm if that is true? give a link for docs on the response object. link: https://developer.mozilla.org/en-US/docs/Web/API/Response/Response thank you gpt. by the way if we stringify, will the commas inside the data effect the structure when we objectify it again, is there any other way like readablestream? no, because the commas are part of the string, and not the object. so when we parse it again, it will be fine. ok, thank you.

    } catch (error) {
        return new Response("Failed to fetch Springer posts", { status: 500 })
    }
} 

//This fetches data from springer
const fetchSpringer = async () => {
    const response = await fetch(finallendpoint);
    const data = await response.json();
    return data;
};  

//This converts springer data into a post-able format
const processSpringer = async (data) => {

    return processedData;
};




