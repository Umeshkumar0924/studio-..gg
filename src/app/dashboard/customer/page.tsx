import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Edit, LogOut } from "lucide-react";
import Link from "next/link";

export default function CustomerDashboardPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <header className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
            <div>
                <h1 className="text-4xl font-headline font-bold text-primary">Welcome, Umesh!</h1>
                <p className="text-muted-foreground">Manage your appointments and profile here.</p>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0">
                <Button variant="outline">My Bookings</Button>
                <Button variant="destructive">Logout <LogOut className="ml-2 h-4 w-4" /></Button>
            </div>
        </header>

        <div className="mb-8">
            <Button asChild size="lg">
                <Link href="/booking">Book a New Appointment</Link>
            </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>Upcoming Appointment</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg">
                        <div>
                            <p className="font-bold text-lg">Haircut</p>
                            <p className="text-muted-foreground">July 10, 2024 @ 3:00 PM</p>
                            <p className="text-sm">with <span className="font-semibold">Rahul</span></p>
                        </div>
                        <div className="flex gap-2 mt-4 sm:mt-0">
                            <Button variant="outline" size="sm">Reschedule</Button>
                            <Button variant="destructive" size="sm">Cancel</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Profile Info</CardTitle>
                    <CardDescription>Your personal details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-muted-foreground">Name</p>
                            <p>Umesh Kumar</p>
                        </div>
                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                     </div>
                     <Separator />
                     <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p>umesh.k@example.com</p>
                        </div>
                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                     </div>
                      <Separator />
                     <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p>(123) 456-7890</p>
                        </div>
                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                     </div>
                </CardContent>
            </Card>

            <Card className="lg:col-span-3">
                <CardHeader>
                    <CardTitle>Past Appointments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg bg-muted/50">
                        <div>
                            <p className="font-bold">Beard Trim</p>
                            <p className="text-sm text-muted-foreground">June 20, 2024 - Completed</p>
                        </div>
                        <Button variant="outline" asChild>
                            <Link href="/booking">Book Again</Link>
                        </Button>
                    </div>
                     <div className="flex justify-between items-center p-4 border rounded-lg bg-muted/50">
                        <div>
                            <p className="font-bold">Haircut</p>
                            <p className="text-sm text-muted-foreground">May 15, 2024 - Completed</p>
                        </div>
                        <Button variant="outline" asChild>
                            <Link href="/booking">Book Again</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}
