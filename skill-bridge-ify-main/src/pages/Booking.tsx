import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const trainerId = searchParams.get("trainer");

  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    skill: "",
    duration: "60"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    
    toast({
      title: "Booking Request Sent!",
      description: "Waiting for trainer confirmation...",
    });

    setTimeout(() => {
      navigate("/confirmation");
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Trainers
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-border/50 animate-scale-in">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Calendar className="w-12 h-12 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold">Book Your Session</CardTitle>
              <CardDescription className="text-base">
                Schedule a learning session at your convenience
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="skill">Select Skill *</Label>
                  <Select onValueChange={(value) => handleChange("skill", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose the skill you want to learn" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="python">Python Programming</SelectItem>
                      <SelectItem value="html-css">HTML & CSS</SelectItem>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="guitar">Guitar</SelectItem>
                      <SelectItem value="piano">Piano</SelectItem>
                      <SelectItem value="chess">Chess</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Input
                      id="time"
                      type="time"
                      value={bookingData.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Session Duration *</Label>
                  <Select 
                    value={bookingData.duration}
                    onValueChange={(value) => handleChange("duration", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="90">1.5 hours</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Session Details
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    You will receive a Google Meet link once the trainer confirms your booking. 
                    Both you and the trainer will be notified via the platform.
                  </p>
                </div>

                <Button type="submit" className="w-full" size="lg" variant="hero">
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold mb-2 text-center">📌 Important Note</h3>
            <p className="text-muted-foreground text-center text-sm">
              Your booking request will be sent to the trainer. You'll receive a notification 
              once they accept. Please be ready at the scheduled time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
