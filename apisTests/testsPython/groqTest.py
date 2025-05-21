from groq import Groq

client = Groq(
    api_key= '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',
)

client_message = ''

while client_message != "tchau" :
    client_message = input()
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