from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key= os.getenv('GROQ_API_KEY'),
)

client_message = ''
client_input = ''
previous_context = ''

while client_input != "tchau" :
    client_input = input()
    client_message = previous_context + "\n" + client_input
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": f"{client_message}",
            }
        ],
        model="llama3-70b-8192",
    )

    print(chat_completion.choices[0].message.content)

    previous_context = f"{client_message}"
