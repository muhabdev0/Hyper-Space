'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import InteractiveHeroObject from '@/components/3d/interactive-hero-object';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <InteractiveHeroObject />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      
      <div className="relative z-10 text-center container px-4">
        <AnimatedWrapper animation="fade-in-up">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-glow">
            Welcome to HyperSpace
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper animation="fade-in-up" delay="0.2s">
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            Experience the future of web interaction with cutting-edge 3D visuals, AI-powered insights, and a seamless user experience.
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper animation="fade-in-up" delay="0.4s">
          <Button asChild size="lg" className="font-bold text-lg rounded-full button-glow bg-primary/80 hover:bg-primary">
            <Link href="#features">
              Explore Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default HeroSection;
