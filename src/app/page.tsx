import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Clock, Mail, MapPin, Palette, Phone, Scissors, Slice, Sparkles, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: <Scissors className="w-8 h-8 text-accent" />,
    title: 'Haircut',
    description: 'Classic and modern haircuts tailored to your style.',
  },
  {
    icon: <Slice className="w-8 h-8 text-accent" />,
    title: 'Beard Trim',
    description: 'Expert beard trimming and styling for a sharp look.',
  },
  {
    icon: <Palette className="w-8 h-8 text-accent" />,
    title: 'Hair Color',
    description: 'Professional coloring services to match your taste.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    title: 'Spa',
    description: 'Relaxing spa treatments to rejuvenate your senses.',
  },
];

const testimonials = [
  {
    quote: "Best salon in town! The staff is friendly and professional. I always leave happy with my haircut.",
    name: 'Umesh K.',
    avatar: 'https://placehold.co/100x100',
    hint: 'man portrait',
  },
  {
    quote: "I love my new hair color! The team really listened to what I wanted and delivered amazing results.",
    name: 'Priya S.',
    avatar: 'https://placehold.co/100x100',
    hint: 'woman portrait',
  },
  {
    quote: "A truly luxurious experience from start to finish. The salon is beautiful and the staff are incredibly talented.",
    name: 'Akash P.',
    avatar: 'https://placehold.co/100x100',
    hint: 'person smiling',
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
            Look Sharp, Feel Great!
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Your one-stop destination for premium grooming services. Book your appointment today and walk out with confidence.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg py-7 px-10">
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-headline font-bold mb-12 text-primary">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      
      <section id="gallery" className="py-20 bg-card">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-headline font-bold mb-12 text-primary">Gallery Preview</h2>
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
                        <Image src={testimonial.avatar} data-ai-hint={testimonial.hint} alt={testimonial.name} width={80} height={80} className="rounded-full mb-4" />
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

      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-primary">Get in Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to answer your questions or help you book your next appointment. Reach out to us!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="jane.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message here..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-3xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">123 Style Avenue, Fashion City, 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">contact@bytouchsalon.com</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold">Working Hours</h3>
                      <p className="text-muted-foreground">Tue - Fri: 9am - 7pm</p>
                      <p className="text-muted-foreground">Sat: 9am - 5pm</p>
                      <p className="text-muted-foreground">Sun - Mon: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

               <div className="h-80 w-full rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.618691515229!2d-73.987853684594!3d40.74844097932824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1626359245357!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Google Maps Location"
                  ></iframe>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
