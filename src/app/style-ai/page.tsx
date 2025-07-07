'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { recommendStyle, StyleRecommendationInput, StyleRecommendationOutput } from '@/ai/flows/style-recommendation';
import { Bot, Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  profile: z.string().min(20, 'Please provide more details about your hair and style.').max(500),
  preferences: z.string().min(10, 'Please tell us a bit about your preferences.').max(500),
});

type FormValues = z.infer<typeof formSchema>;

export default function StyleAiPage() {
  const [recommendation, setRecommendation] = useState<StyleRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profile: '',
      preferences: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setRecommendation(null);
    setError(null);
    try {
      const result = await recommendStyle(data as StyleRecommendationInput);
      setRecommendation(result);
    } catch (e) {
      setError('Sorry, we couldn\'t generate a recommendation at this time. Please try again later.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Bot className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-5xl font-headline font-bold text-primary">AI Style Recommender</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Unsure about your next look? Describe your hair, your style, and your goals, and let our AI assistant suggest the perfect style for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Tell Us About Yourself</CardTitle>
              <CardDescription>The more details you provide, the better the recommendation!</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="profile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Your Profile</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'I have long, thick, wavy brown hair. My style is classic and professional. I usually get highlights twice a year.'"
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preferences"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Your Preferences</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'I'm looking for something low-maintenance but stylish. I'm open to cutting a few inches off. I want to avoid anything too edgy.'"
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full text-lg py-6">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      'Get Recommendation'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="sticky top-24">
            <Card className="min-h-[300px] flex flex-col justify-center items-center bg-primary/5">
              <CardHeader>
                <CardTitle className="font-headline text-3xl text-center flex items-center gap-2">
                  <Sparkles className="h-8 w-8 text-accent" /> Your AI-Powered Recommendation
                </CardTitle>
              </CardHeader>
              <CardContent className="w-full">
                {isLoading && (
                  <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
                    <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                    <p className="font-semibold">Our AI is crafting your new look...</p>
                    <p>This may take a moment.</p>
                  </div>
                )}
                {error && <p className="text-destructive text-center">{error}</p>}
                {recommendation && (
                  <div className="space-y-6 text-left animate-in fade-in-50 duration-500">
                    <div>
                      <h3 className="font-headline text-xl font-bold text-primary mb-2">Recommended Style:</h3>
                      <p className="text-lg">{recommendation.recommendation}</p>
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold text-primary mb-2">Why it works for you:</h3>
                      <p className="text-muted-foreground">{recommendation.reason}</p>
                    </div>
                     <Button asChild className="w-full mt-4">
                        <Link href="/booking">Book this look!</Link>
                    </Button>
                  </div>
                )}
                {!isLoading && !recommendation && !error && (
                   <p className="text-center text-muted-foreground">Your personalized style suggestion will appear here.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
