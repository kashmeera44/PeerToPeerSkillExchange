import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Star, Award, Calendar, TrendingUp, BookOpen } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null);
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const user = localStorage.getItem("user");
    if (user) {
      setUserData(JSON.parse(user));
    }

    const feedback = JSON.parse(localStorage.getItem("userFeedback") || "[]");
    setFeedbackCount(feedback.length);
    
    if (feedback.length > 0) {
      const avg = feedback.reduce((sum: number, f: any) => sum + f.rating, 0) / feedback.length;
      setAverageRating(avg);
    }
  }, [navigate]);

  if (!userData) return null;

  const initials = userData.name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const isVerified = feedbackCount >= 3 && averageRating >= 4;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header */}
          <Card className="shadow-2xl border-border/50 animate-fade-in">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="w-32 h-32">
                  <AvatarFallback className="text-4xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    {initials}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                    <h1 className="text-3xl font-bold">{userData.name}</h1>
                    {isVerified && (
                      <Badge variant="secondary" className="gap-1 w-fit mx-auto md:mx-0">
                        <Award className="w-4 h-4" />
                        Verified Trainer
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{userData.email}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <Star className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold">{averageRating.toFixed(1)}</p>
                      <p className="text-xs text-muted-foreground">Rating</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <Calendar className="w-6 h-6 text-primary mx-auto mb-1" />
                      <p className="text-2xl font-bold">{feedbackCount}</p>
                      <p className="text-xs text-muted-foreground">Sessions</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <BookOpen className="w-6 h-6 text-secondary mx-auto mb-1" />
                      <p className="text-2xl font-bold">{userData.skills?.split(',').length || 0}</p>
                      <p className="text-xs text-muted-foreground">Skills</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold">${feedbackCount * 25}</p>
                      <p className="text-xs text-muted-foreground">Earned</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Position</p>
                  <p className="font-medium capitalize">{userData.position?.replace('-', ' ')}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Workplace/Study Place</p>
                  <p className="font-medium">{userData.workplace}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date of Birth</p>
                  <p className="font-medium">{new Date(userData.dob).toLocaleDateString()}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>Your areas of expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {userData.skills?.split(',').map((skill: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-base py-2 px-4">
                      {skill.trim()}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Verification Status */}
          {!isVerified && (
            <Card className="bg-primary/5 border-primary/20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Path to Verification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete {3 - feedbackCount} more session{3 - feedbackCount !== 1 ? 's' : ''} with 
                  a rating of 4 stars or higher to become a verified trainer!
                </p>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((feedbackCount / 3) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {feedbackCount} / 3 sessions completed
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <blockquote className="text-center text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
            "The expert in anything was once a beginner." - Helen Hayes
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Profile;
