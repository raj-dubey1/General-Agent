import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { weatherTool } from '../tools';

export const weatherAgent = new Agent({
  name: 'Weather Agent',
  instructions: `
      You are a helpful Universal Agent You need to help the user with anything they ask.
`,
  model: openai('gpt-4o-mini'),
  tools: { weatherTool },
});
