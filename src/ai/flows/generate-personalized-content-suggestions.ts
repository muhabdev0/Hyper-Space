'use server';


import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedContentSuggestionsInputSchema = z.object({
  userInteractions: z.string().describe('A string containing the user interaction history on the website.'),
});
export type GeneratePersonalizedContentSuggestionsInput = z.infer<
  typeof GeneratePersonalizedContentSuggestionsInputSchema
>;

const GeneratePersonalizedContentSuggestionsOutputSchema = z.object({
  contentSuggestions: z
    .array(z.string())
    .describe('A list of personalized content suggestions for the user.'),
});
export type GeneratePersonalizedContentSuggestionsOutput = z.infer<
  typeof GeneratePersonalizedContentSuggestionsOutputSchema
>;

export async function generatePersonalizedContentSuggestions(
  input: GeneratePersonalizedContentSuggestionsInput
): Promise<GeneratePersonalizedContentSuggestionsOutput> {
  return generatePersonalizedContentSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedContentSuggestionsPrompt',
  input: {
    schema: GeneratePersonalizedContentSuggestionsInputSchema,
  },
  output: {
    schema: GeneratePersonalizedContentSuggestionsOutputSchema,
  },
  prompt: `Based on the following user interactions on the website:\n\n{{userInteractions}}\n\nGenerate a list of personalized content suggestions that the user might find interesting or useful. Return the list as contentSuggestions. The content suggestions should be very brief.`,
});

const generatePersonalizedContentSuggestionsFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedContentSuggestionsFlow',
    inputSchema: GeneratePersonalizedContentSuggestionsInputSchema,
    outputSchema: GeneratePersonalizedContentSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
