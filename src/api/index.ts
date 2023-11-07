import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

export const fetchGPT4Request = async (content: string = '') => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: content }],
    model: 'gpt-4',
  });
  // 回答結果を返却
  console.log(completion);
  const answer = completion.choices[0].message?.content;
  return answer;
};
