from openai import OpenAI

client = OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key="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",
)

completion = client.chat.completions.create(
  extra_headers={
    "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai.
  },
  extra_body={},
  model="google/gemini-2.5-flash-preview-05-20",
  messages=[
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Qual a cor do ceu?"
        }
      ]
    }
  ]
)
print(completion.choices[0].message.content)
