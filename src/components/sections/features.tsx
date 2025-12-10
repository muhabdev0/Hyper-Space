import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { Cpu, Layers, Rocket, Shield } from "lucide-react";
import React from "react";

const features = [
  {
    icon: <Layers size={32} className="text-primary" />,
    title: "Interactive 3D Hero",
    description: "Captivating 3D visuals that respond to your movements, creating a truly immersive experience.",
  },
  {
    icon: <Rocket size={32} className="text-primary" />,
    title: "Parallax & Animations",
    description: "Smooth, subtle parallax scrolling and animations that add depth and a futuristic feel to the interface.",
  },
  {
    icon: <Cpu size={32} className="text-primary" />,
    title: "AI-Powered Content",
    description: "Leverage artificial intelligence to get personalized content suggestions based on your activity.",
  },
  {
    icon: <Shield size={32} className="text-primary" />,
    title: "Dynamic & Responsive",
    description: "A seamless experience across all devices with dynamic content loading and a fully responsive layout.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <AnimatedWrapper animation="fade-in-up">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4 text-glow">
              Advanced Technology
            </h2>
            <p className="max-w-2xl mx-auto text-center text-lg text-muted-foreground mb-12">
              Built on a foundation of modern technologies to deliver a premium, high-performance experience.
            </p>
        </AnimatedWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedWrapper
              key={feature.title}
              animation="fade-in-up"
              delay={`${index * 0.1}s`}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 card-glow transition-transform duration-300 hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
