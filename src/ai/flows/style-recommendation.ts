'use server';

/**
 * @fileOverview An AI tool that recommends hairstyles or services based on customer profile and preferences.
 *
 * - recommendStyle - A function that handles the style recommendation process.
 * - StyleRecommendationInput - The input type for the recommendStyle function.
 * - StyleRecommendationOutput - The return type for the recommendStyle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StyleRecommendationInputSchema = z.object({
  profile: z
    .string()
    .describe(
      'Customer profile including hair type, style preferences, and past services.'
    ),
  preferences: z.string().describe('Specific preferences or requests from the customer.'),
});
export type StyleRecommendationInput = z.infer<typeof StyleRecommendationInputSchema>;

const StyleRecommendationOutputSchema = z.object({
  recommendation: z.string().describe('The AI recommendation for hairstyles or services.'),
  reason: z.string().describe('The reason for the recommendation based on profile and preferences.'),
});
export type StyleRecommendationOutput = z.infer<typeof StyleRecommendationOutputSchema>;

export async function recommendStyle(input: StyleRecommendationInput): Promise<StyleRecommendationOutput> {
  return recommendStyleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'styleRecommendationPrompt',
  input: {schema: StyleRecommendationInputSchema},
  output: {schema: StyleRecommendationOutputSchema},
  prompt: `You are a professional hairstylist AI assistant. Based on the customer's profile and preferences, recommend a hairstyle or service.

Customer Profile: {{{profile}}}
Customer Preferences: {{{preferences}}}

Recommendation:`,
});

const recommendStyleFlow = ai.defineFlow(
  {
    name: 'recommendStyleFlow',
    inputSchema: StyleRecommendationInputSchema,
    outputSchema: StyleRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
