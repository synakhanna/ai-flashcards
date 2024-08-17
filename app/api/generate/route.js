// import { NextResponse } from 'next/server'
// import OpenAI from 'openai'

// const systemPrompt = `
// You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
// Both front and back should be one sentence long.
// You should return in the following JSON format:
// {
//   "flashcards":[
//     {
//       "front": "Front of the card",
//       "back": "Back of the card"
//     }
//   ]
// }
// `

// export async function POST(req) {
//     const openai = new OpenAI()
//     const data = await req.text()

//     const completion = await openai.chat.completions.create({
//         messages: [
//             { role: 'system', content: systemPrompt },
//             { role: 'user', content: data },
//         ],
//         model: 'gpt-4o',
//         response_format: { type: 'json_object' },
//     })

//     // Parse the JSON response from the OpenAI API
//     const flashcards = JSON.parse(completion.choices[0].message.content)

//     // Return the flashcards as a JSON response
//     return NextResponse.json(flashcards.flashcards)
// }

import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

const flashcardPrompt = `
You are a knowledgeable and efficient assistant tasked with creating educational flashcards to help users prepare for both technical 
interviews and school exams in programming languages. Please generate exactly 15 flashcards, each with a question on the front side and a 
corresponding answer on the back side. The flashcards should be designed for someone studying the following programming languages: [Insert Programming Languages].

### Requirements:
1. **Question Type:** The questions should vary between basic syntax, concepts, and common pitfalls in the specified languages. 
Include questions on topics like variables, loops, functions, data types, error handling, object-oriented principles, and language-specific features.
 Ensure a mix of conceptual questions and practical coding challenges relevant to both interview settings and academic exams.

2. **Answer Type:** Each answer should be clear, concise, and directly address the question. Include code snippets where necessary to illustrate the answer.

3. **Question/Answer Format:** 
   - **Front (Question):** Clearly state the question.
   - **Back (Answer):** Provide a thorough yet concise answer with examples if applicable.

4. **Balance:** Ensure that the flashcards cover a wide range of topics within the programming languages provided, with relevance to both technical interviews and school examinations.

5. **Output Format:** Return the flashcards in the following JSON format:
     "flashcards": [
       {
         "front": "Front of the card",
         "back": "Back of the card"
       }
       //... continue for all 15 flashcards
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