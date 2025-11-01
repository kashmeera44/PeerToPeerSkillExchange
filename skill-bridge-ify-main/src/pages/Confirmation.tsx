import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Calendar, Clock, BookOpen, Home } from "lucide-react";

const Confirmation = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("bookingData");
    if (data) {
      setBookingData(JSON.parse(data));
    } else {
      navigate("/dashboard");
    }
  }, [navigate]);

  if (!bookingData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="shadow-2xl border-border/50 animate-scale-in">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-6 bg-green-100 dark:bg-green-900/20 rounded-full animate-glow">
                <CheckCircle2 className="w-20 h-20 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">
              Booking Confirmed!
            </CardTitle>
            <CardDescription className="text-base md:text-lg">
              Your trainer has accepted your session request
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="p-6 bg-muted/50 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold mb-4">Session Details</h3>
              
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Skill</p>
                  <p className="text-muted-foreground capitalize">{bookingData.skill?.replace('-', ' ')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-muted-foreground">
                    {new Date(bookingData.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Time & Duration</p>
                  <p className="text-muted-foreground">
                    {bookingData.time} ({bookingData.duration} minutes)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-300">📧 What's Next?</h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
                <li>• You'll receive a Google Meet link 30 minutes before the session</li>
                <li>• Both you and your trainer will get email reminders</li>
                <li>• Make sure to join on time for the best experience</li>
                <li>• After the session, you'll be able to provide feedback</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/feedback" className="flex-1">
                <Button variant="hero" size="lg" className="w-full">
                  Leave Feedback (After Session)
                </Button>
              </Link>
              <Link to="/dashboard" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8">
          <blockquote className="text-center text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
            "An investment in knowledge pays the best interest." - Benjamin Franklin
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
