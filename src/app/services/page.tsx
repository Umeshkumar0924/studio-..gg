import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { serviceList } from '@/lib/data';
import Link from 'next/link';

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
                      <p className="text-3xl font-sans font-bold text-primary">Rs. {item.price}</p>
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
