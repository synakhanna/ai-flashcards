import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

const flashcardPrompt = `
You are a knowledgeable and efficient assistant tasked with creating educational flashcards to help users prepare for both technical 
interviews and school exams in programming languages. Please generate exactly 10 flashcards, each with a question on the front side and a 
corresponding answer on the back side. The flashcards should be designed for someone studying the following programming languages: [Insert Programming Languages].

### Requirements:
1. **Question Type:** The questions should vary between basic syntax, concepts, and common pitfalls in the specified languages. 
Include questions on topics like variables, loops, functions, data types, error handling, object-oriented principles, and language-specific features.
 Ensure a mix of conceptual questions and practical coding challenges relevant to both interview settings and academic exams.

2. **Answer Type:** Each answer should be brief (2-3 sentences), clear, and directly address the question. Include code snippets only when essential.

3. **Question/Answer Format:** 
   - **Front (Question):** Clearly state the question.
   - **Back (Answer):** Provide a thorough yet concise answer with examples if applicable.

4. **Balance:** Ensure that the flashcards cover a wide range of topics within the programming languages provided, with relevance to both technical interviews and school examinations.

5. **Output Format:** Return the flashcards in the following JSON format:
     "flashcards": [
       {
         "front": "Front of the card",
         "back": "Back of the card",
         "language": "programming language"
       }
       //... continue for all 10 flashcards
     ]
   }
`;

export async function POST(req) {
    try {
        const { message } = await req.json();
        console.log("the recieved message in backend "+message);
        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(flashcardPrompt.replace("[Insert Programming Languages]",message));
        const response = await result.response;
        const firstParse = JSON.parse(JSON.stringify(response.candidates[0].content.parts[0].text)).replace("```json","");
        const finalParse = firstParse.replace("\n```","")
        //console.log("The final parse is: "+finalParse);
        


        return NextResponse.json(finalParse);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}