import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const serviceList = [
  {
    category: 'Haircuts & Styling',
    items: [
      { name: 'Women\'s Haircut', price: '750+', duration: '60 min' },
      { name: 'Men\'s Haircut', price: '500+', duration: '45 min' },
      { name: 'Blowout & Style', price: '550+', duration: '45 min' },
      { name: 'Updo / Special Occasion', price: '950+', duration: '75 min' },
    ]
  },
  {
    category: 'Color Services',
    items: [
      { name: 'Single Process Color', price: '1200+', duration: '2 hours' },
      { name: 'Partial Highlights', price: '1800+', duration: '2.5 hours' },
      { name: 'Full Highlights', price: '2500+', duration: '3 hours' },
      { name: 'Balayage / Ombré', price: '3000+', duration: '3.5 hours' },
      { name: 'Gloss / Toner', price: '600+', duration: '30 min' },
    ]
  },
  {
    category: 'Treatments',
    items: [
      { name: 'Deep Conditioning Treatment', price: '450+', duration: '30 min' },
      { name: 'Keratin Smoothing Treatment', price: '3500+', duration: '3 hours' },
      { name: 'Scalp Treatment', price: '650+', duration: '45 min' },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-headline font-bold text-primary">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of services to cater to your every need. Explore our offerings and find your perfect treatment.
          </p>
        </div>

        <div className="space-y-12">
          {serviceList.map((category) => (
            <div key={category.category}>
              <h2 className="text-3xl font-headline font-semibold text-primary mb-6 pb-2 border-b-2 border-accent/50">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                   <Card key={item.name} className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-3xl font-sans font-bold text-primary">₹{item.price}</p>
                      <p className="text-sm text-muted-foreground mt-2">Approx. {item.duration}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <Link href="/booking">Book Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
