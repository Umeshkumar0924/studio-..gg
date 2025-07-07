import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Banknote, CalendarDays, PlusCircle, Users } from "lucide-react";

const bookings = [
    { date: 'Jul 7, 2024', service: 'Haircut', time: '11:00 AM', customer: 'Akash', staff: 'Rahul' },
    { date: 'Jul 7, 2024', service: 'Hair Color', time: '12:00 PM', customer: 'Priya', staff: 'N/A' },
    { date: 'Jul 7, 2024', service: 'Beard Trim', time: '02:00 PM', customer: 'Umesh', staff: 'Rahul' },
    { date: 'Jul 7, 2024', service: 'Spa', time: '03:00 PM', customer: 'Anjali', staff: 'Deepa' },
];

export default function OwnerDashboardPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <header className="mb-8">
                    <h1 className="text-4xl font-headline font-bold text-primary">Welcome, Salon Owner!</h1>
                    <p className="text-muted-foreground">Here's a summary of your salon's activity.</p>
                </header>

                <section id="summary" className="grid md:grid-cols-3 gap-8 mb-12">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Today's Bookings</CardTitle>
                            <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">8</div>
                            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue (Today)</CardTitle>
                            <Banknote className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">₹12,000</div>
                            <p className="text-xs text-muted-foreground">+15% from yesterday</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+3</div>
                             <p className="text-xs text-muted-foreground">New customers today</p>
                        </CardContent>
                    </Card>
                </section>

                <section id="bookings" className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Bookings</CardTitle>
                            <CardDescription>A list of all recent appointments.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Service</TableHead>
                                        <TableHead>Time</TableHead>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>Staff</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {bookings.map((booking, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{booking.date}</TableCell>
                                            <TableCell>{booking.service}</TableCell>
                                            <TableCell>{booking.time}</TableCell>
                                            <TableCell>{booking.customer}</TableCell>
                                            <TableCell>{booking.staff}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </section>
                
                <section id="management">
                    <h2 className="text-2xl font-headline font-bold text-primary mb-4">Management</h2>
                     <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <Button variant="outline"><PlusCircle className="mr-2 h-4 w-4" /> Add/Edit Services</Button>
                        <Button variant="outline"><PlusCircle className="mr-2 h-4 w-4" /> Add/Edit Staff</Button>
                        <Button variant="outline"><PlusCircle className="mr-2 h-4 w-4" /> Upload to Gallery</Button>
                        <Button variant="outline"><PlusCircle className="mr-2 h-4 w-4" /> Manage Reviews</Button>
                     </div>
                </section>

            </div>
        </div>
    )
}
