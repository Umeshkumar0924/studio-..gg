'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { serviceList as initialServiceList } from '@/lib/data';
import { Edit, Trash2, PlusCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ManageServicesPage() {
  const [serviceList, setServiceList] = useState(initialServiceList);
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddService = () => {
    toast({ title: 'Service Added', description: 'The new service has been added.' });
    setIsDialogOpen(false);
  }

  const handleDeleteService = (categoryId: string, itemId: string) => {
    // This is a simplified deletion logic for the prototype
    toast({ variant: 'destructive', title: 'Service Deleted', description: 'The service has been removed.' });
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <header className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-4xl font-headline font-bold text-primary">Manage Services</h1>
                <p className="text-muted-foreground">Add, edit, or remove services offered by the salon.</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button><PlusCircle className="mr-2 h-4 w-4" /> Add New Service</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Service</DialogTitle>
                  <DialogDescription>
                    Fill in the details for the new service.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">Name</Label>
                    <Input id="name" placeholder="e.g., Deep Tissue Massage" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="price" className="text-right">Price</Label>
                    <Input id="price" placeholder="e.g., Rs. 1500+" className="col-span-3" />
                  </div>
                   <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="duration" className="text-right">Duration</Label>
                    <Input id="duration" placeholder="e.g., 90 min" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleAddService}>Save Service</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
        </header>

        <div className="space-y-12">
          {serviceList.map((category) => (
            <div key={category.category}>
              <h2 className="text-3xl font-headline font-semibold text-primary mb-6 pb-2 border-b-2 border-accent/50">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                   <Card key={item.id} className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-2">
                      <p className="text-3xl font-sans font-bold text-primary">Rs. {item.price}</p>
                      <p className="text-sm text-muted-foreground">Approx. {item.duration}</p>
                    </CardContent>
                    <CardContent>
                      <div className="flex gap-2 justify-end">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" /> Edit
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => handleDeleteService(category.category, item.id)}>
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </Button>
                      </div>
                    </CardContent>
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
