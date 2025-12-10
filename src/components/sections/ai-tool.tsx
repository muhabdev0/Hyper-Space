'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { generatePersonalizedContentSuggestions } from '@/ai/flows/generate-personalized-content-suggestions';
import { useToast } from '@/hooks/use-toast';
import { Wand2, LoaderCircle, Lightbulb } from 'lucide-react';
import { AnimatedWrapper } from '../ui/animated-wrapper';

const AiToolSection = () => {
  const [userInteractions, setUserInteractions] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInteractions.trim()) {
      toast({
        title: 'Input Required',
        description: 'Please describe your interests or past interactions.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setSuggestions([]);
    try {
      const result = await generatePersonalizedContentSuggestions({ userInteractions });
      setSuggestions(result.contentSuggestions);
    } catch (error) {
      console.error('AI suggestion error:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate suggestions. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-20 md:py-32 bg-card/20">
      <div className="container mx-auto px-4">
        <AnimatedWrapper animation="fade-in-up">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4 text-glow">
              Personalized For You
            </h2>
            <p className="max-w-2xl mx-auto text-center text-lg text-muted-foreground mb-12">
              Our AI analyzes your interests to suggest content you'll love. Describe what you've been reading or watching to get started.
            </p>
        </AnimatedWrapper>
        
        <div className="max-w-3xl mx-auto">
        <AnimatedWrapper animation="fade-in-up" delay="0.2s">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Wand2 className="text-primary"/>
                AI Content Suggester
              </CardTitle>
              <CardDescription>
                Enter some topics or activities, and let our AI find your next favorite thing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                  value={userInteractions}
                  onChange={(e) => setUserInteractions(e.target.value)}
                  placeholder="e.g., 'I've been interested in sci-fi movies, space exploration, and retro-futurism...'"
                  rows={4}
                  className="bg-background/50 focus:ring-accent"
                  disabled={isLoading}
                />
                <Button type="submit" className="w-full font-bold button-glow" disabled={isLoading}>
                  {isLoading ? (
                    <LoaderCircle className="animate-spin mr-2" />
                  ) : (
                    <Wand2 className="mr-2" />
                  )}
                  {isLoading ? 'Generating...' : 'Generate Suggestions'}
                </Button>
              </form>
              {suggestions.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="text-accent" />
                    Here are some ideas:
                  </h3>
                  <ul className="space-y-3">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="p-3 bg-primary/10 rounded-md border border-primary/20 text-foreground/90"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

export default AiToolSection;
