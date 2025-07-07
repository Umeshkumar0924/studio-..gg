import Image from 'next/image';

const images = [
  { src: 'https://placehold.co/600x800', alt: 'Elegant long hairstyle', hint: 'long hairstyle' },
  { src: 'https://placehold.co/600x600', alt: 'Short pixie cut', hint: 'pixie cut' },
  { src: 'https://placehold.co/600x900', alt: 'Vibrant red hair color', hint: 'red hair' },
  { src: 'https://placehold.co/600x700', alt: 'Men\'s modern haircut', hint: 'men haircut' },
  { src: 'https://placehold.co/600x600', alt: 'Blonde balayage', hint: 'blonde balayage' },
  { src: 'https://placehold.co/600x800', alt: 'Bridal updo', hint: 'bridal updo' },
  { src: 'https://placehold.co/600x900', alt: 'Curly hair styling', hint: 'curly hair' },
  { src: 'https://placehold.co/600x700', alt: 'Creative hair color', hint: 'creative hair color' },
  { src: 'https://placehold.co/600x800', alt: 'Classic bob cut', hint: 'bob cut' },
  { src: 'https://placehold.co/600x600', alt: 'Sleek straight hair', hint: 'straight hair' },
  { src: 'https://placehold.co/600x900', alt: 'Pastel pink hair', hint: 'pastel hair' },
  { src: 'https://placehold.co/600x700', alt: 'Wedding guest hairstyle', hint: 'wedding hairstyle' },
];

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-headline font-bold text-primary">Our Gallery</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of our passion, creativity, and craftsmanship. Get inspired for your next look.
          </p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid">
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                width={600}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
