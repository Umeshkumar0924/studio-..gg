import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, Bot, Palette, Scissors, Star, Wind } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: <Scissors className="w-8 h-8 text-accent" />,
    title: 'Precision Haircuts',
    description: 'Tailored haircuts to suit your style and personality, from classic cuts to modern trends.',
  },
  {
    icon: <Palette className="w-8 h-8 text-accent" />,
    title: 'Expert Coloring',
    description: 'Vibrant, professional coloring services, including highlights, balayage, and full-color treatments.',
  },
  {
    icon: <Wind className="w-8 h-8 text-accent" />,
    title: 'Elegant Styling',
    description: 'Perfect styling for any occasion, from blowouts to updos, ensuring you look your absolute best.',
  },
];

const testimonials = [
  {
    quote: "The best haircut I've ever had! The attention to detail and friendly atmosphere at By Touch Unisex Saloon is unmatched.",
    name: 'Jessica M.',
    avatar: 'https://placehold.co/100x100',
  },
  {
    quote: "I tried the AI Style Recommendation and it was spot on! I love my new look and will definitely be back.",
    name: 'David L.',
    avatar: 'https://placehold.co/100x100',
  },
  {
    quote: "A truly luxurious experience from start to finish. The salon is beautiful and the staff are incredibly talented.",
    name: 'Sarah P.',
    avatar: 'https://placehold.co/100x100',
  },
];

const galleryImages = [
  { src: 'https://placehold.co/600x800', alt: 'Elegant hairstyle', hint: 'hairstyle portrait' },
  { src: 'https://placehold.co/600x800', alt: 'Modern haircut', hint: 'modern haircut' },
  { src: 'https://placehold.co/600x800', alt: 'Vibrant hair color', hint: 'hair color' },
  { src: 'https://placehold.co/600x800', alt: 'Stylish updo', hint: 'stylish updo' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x1080"
          alt="Woman with elegant hairstyle"
          data-ai-hint="elegant hairstyle"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 brightness-50"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-headline font-bold drop-shadow-lg">
            Experience the Art of Hair
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            At By Touch Unisex Saloon, we blend creativity with precision to give you a look that is uniquely you.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg py-7 px-10">
            <Link href="/booking">Book an Appointment</Link>
          </Button>
        </div>
      </section>
      
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-headline font-bold mb-4 text-primary">Welcome to By Touch Unisex Saloon</h2>
              <p className="mb-6 text-lg">
                Nestled in the heart of the city, By Touch Unisex Saloon is more than just a salon—it's a sanctuary of style. Our philosophy is built on the belief that a great haircut can empower and inspire. We are dedicated to providing a personalized and luxurious experience for every client.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://placehold.co/600x700"
                alt="Interior of the Shear Elegance salon"
                data-ai-hint="luxury salon"
                width={600}
                height={700}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-headline font-bold mb-12 text-primary">Our Signature Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild size="lg" className="mt-12">
            <Link href="/services">View All Services <ArrowRight className="ml-2 h-5 w-5"/></Link>
          </Button>
        </div>
      </section>

      <section id="style-ai" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/600x600"
                alt="AI generated hairstyles"
                data-ai-hint="futuristic hairstyle"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <Bot className="w-16 h-16 mb-4 text-accent" />
              <h2 className="text-4xl font-headline font-bold mb-4">Discover Your Perfect Look with AI</h2>
              <p className="mb-6 text-lg text-primary-foreground/80">
                Not sure what style to go for? Our revolutionary AI Style Recommender analyzes your preferences and facial features to suggest the perfect haircut and color for you. Step into the future of hairstyling.
              </p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                <Link href="/style-ai">Try Style AI Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-headline font-bold mb-12 text-primary">What Our Clients Say</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-8">
                        <Image src={testimonial.avatar} data-ai-hint="person portrait" alt={testimonial.name} width={80} height={80} className="rounded-full mb-4" />
                        <p className="text-lg italic mb-4 max-w-2xl">"{testimonial.quote}"</p>
                        <div className="flex text-accent">
                          {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                        </div>
                        <p className="font-bold mt-4">{testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-card">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-headline font-bold mb-12 text-primary">Our Gallery of Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  data-ai-hint={image.hint}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="mt-12">
            <Link href="/gallery">Explore Full Gallery <ArrowRight className="ml-2 h-5 w-5"/></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
