import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Star, Award, Calendar } from "lucide-react";

const Trainers = () => {
  const navigate = useNavigate();
  const [selectedTrainer, setSelectedTrainer] = useState<number | null>(null);

  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      expertise: "Python & Data Science",
      rating: 4.9,
      sessions: 156,
      verified: true,
      price: "$25/hour",
      bio: "Senior software engineer with 8 years of experience in Python development",
      initials: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      expertise: "Python & Web Development",
      rating: 4.8,
      sessions: 142,
      verified: true,
      price: "$22/hour",
      bio: "Full-stack developer specializing in Python frameworks",
      initials: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      expertise: "Python for Beginners",
      rating: 4.7,
      sessions: 98,
      verified: true,
      price: "$20/hour",
      bio: "Patient instructor focused on helping beginners learn coding fundamentals",
      initials: "ER"
    },
    {
      id: 4,
      name: "David Kim",
      expertise: "Python & Machine Learning",
      rating: 5.0,
      sessions: 203,
      verified: true,
      price: "$30/hour",
      bio: "ML engineer with expertise in Python, TensorFlow, and scikit-learn",
      initials: "DK"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Expert Trainers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our top-rated trainers based on ratings and experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {trainers.map((trainer, index) => (
            <Card 
              key={trainer.id}
              className={`hover:shadow-xl transition-all duration-300 animate-fade-in-up border-2 ${
                selectedTrainer === trainer.id ? 'border-primary' : 'border-border/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center md:items-start">
                    <Avatar className="w-24 h-24 mb-3">
                      <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                        {trainer.initials}
                      </AvatarFallback>
                    </Avatar>
                    {trainer.verified && (
                      <Badge variant="secondary" className="gap-1">
                        <Award className="w-3 h-3" />
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                      <div>
                        <CardTitle className="text-2xl mb-1">{trainer.name}</CardTitle>
                        <CardDescription className="text-base">{trainer.expertise}</CardDescription>
                      </div>
                      <div className="text-2xl font-bold text-primary">{trainer.price}</div>
                    </div>

                    <p className="text-muted-foreground mb-4">{trainer.bio}</p>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{trainer.rating}</span>
                        <span className="text-muted-foreground">rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-semibold">{trainer.sessions}</span>
                        <span className="text-muted-foreground">sessions</span>
                      </div>
                    </div>

                    <Link to={`/booking?trainer=${trainer.id}`}>
                      <Button 
                        size="lg" 
                        variant="hero"
                        onClick={() => setSelectedTrainer(trainer.id)}
                      >
                        Book Session
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <blockquote className="text-center text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
            "A good teacher can inspire hope, ignite the imagination, and instill a love of learning." - Brad Henry
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
