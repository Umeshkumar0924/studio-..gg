import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Eleanor Vance',
    role: 'Founder & Master Stylist',
    avatar: 'https://placehold.co/200x200',
    hint: 'woman portrait',
    bio: 'With over 20 years of experience, Eleanor founded Shear Elegance with a vision to create a haven of style and luxury. She specializes in precision cutting and timeless looks.',
  },
  {
    name: 'Marcus Thorne',
    role: 'Lead Colorist',
    avatar: 'https://placehold.co/200x200',
    hint: 'man portrait',
    bio: 'Marcus is an artist with color. From subtle balayage to bold, vibrant transformations, he brings a creative flair and technical expertise to every client.',
  },
  {
    name: 'Clara Belle',
    role: 'Styling & Treatments Specialist',
    avatar: 'https://placehold.co/200x200',
    hint: 'woman smiling',
    bio: 'Clara has a passion for hair health and special occasion styling. She ensures every client leaves with hair that not only looks great but feels amazing too.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="relative h-80">
        <Image 
          src="https://placehold.co/1920x600" 
          alt="Salon interior" 
          data-ai-hint="salon interior"
          layout="fill" 
          objectFit="cover" 
          className="brightness-50" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-headline font-bold text-white text-center drop-shadow-2xl">About Shear Elegance</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Shear Elegance was born from a simple idea: that everyone deserves to feel beautiful and confident. Founded in 2010, our salon has grown into a premier destination for those seeking exceptional hair care in a welcoming and luxurious environment.
            </p>
            <p className="text-lg text-muted-foreground">
              We are a team of passionate, skilled professionals who are committed to the art of hairdressing. We stay at the forefront of the latest trends and techniques to provide you with the very best service.
            </p>
          </div>
          <div>
            <Image 
              src="https://placehold.co/600x400" 
              alt="Salon team working" 
              data-ai-hint="hairstylists working"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary">Meet Our Team</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">The artists behind the elegance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center">
              <CardHeader className="items-center">
                <Avatar className="w-32 h-32 mb-4 border-4 border-accent">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                <p className="text-accent font-semibold">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
