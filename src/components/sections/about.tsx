import Image from "next/image";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const AboutSection = () => {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-visual');

  return (
    <section id="about" className="py-20 md:py-32 bg-card/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedWrapper animation="slide-in-left">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              {aboutImage && (
                 <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    data-ai-hint={aboutImage.imageHint}
                    fill
                    className="object-cover"
                 />
              )}
               <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper animation="slide-in-right">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-glow">
              Crafting Digital Frontiers
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              HyperSpace is a design and development concept exploring the intersection of futuristic aesthetics and interactive web technologies. Our philosophy is to push boundaries and create immersive digital spaces that are both beautiful and functional.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe in minimalism, performance, and the power of subtle details to build a strong user connection. Every element is crafted with precision to contribute to a cohesive, high-end experience.
            </p>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
