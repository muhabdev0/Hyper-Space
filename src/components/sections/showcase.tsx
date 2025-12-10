import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const ShowcaseSection = () => {
  const showcaseImages = PlaceHolderImages.filter(p => p.id.startsWith('showcase-'));

  return (
    <section id="showcase" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <AnimatedWrapper animation="fade-in-up">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4 text-glow">
              Visual Showcase
            </h2>
            <p className="max-w-2xl mx-auto text-center text-lg text-muted-foreground mb-12">
              A gallery of concepts and designs that embody the HyperSpace aesthetic.
            </p>
        </AnimatedWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseImages.map((item, index) => (
            <AnimatedWrapper
              key={item.id}
              animation="fade-in-up"
              delay={`${index * 0.1}s`}
            >
              <Card className="group card-glow overflow-hidden bg-card/50 border-border/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.description}
                      data-ai-hint={item.imageHint}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
