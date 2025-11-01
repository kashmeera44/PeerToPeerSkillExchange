import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Video, Calendar, BookOpen } from "lucide-react";

const SkillDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Learning Mode
            </h1>
            <p className="text-xl text-muted-foreground">
              Select how you'd like to learn this skill
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Video Tutorials */}
            <Link to="/video-tutorials">
              <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-primary group">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-6 bg-primary/10 rounded-full group-hover:scale-110 transition-transform">
                      <Video className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">Video Tutorials</CardTitle>
                  <CardDescription className="text-base">
                    Learn at your own pace with curated video content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Hand-picked YouTube tutorials
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Learn anytime, anywhere
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Free resources
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Live Sessions */}
            <Link to="/trainers">
              <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-secondary group">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-6 bg-secondary/10 rounded-full group-hover:scale-110 transition-transform">
                      <Calendar className="w-16 h-16 text-secondary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">Live Sessions</CardTitle>
                  <CardDescription className="text-base">
                    Book personalized 1-on-1 sessions with expert trainers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-secondary" />
                      Connect via Google Meet
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-secondary" />
                      Personalized guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-secondary" />
                      Real-time interaction
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <blockquote className="text-center italic text-muted-foreground border-l-4 border-primary pl-6">
              "Tell me and I forget. Teach me and I remember. Involve me and I learn." - Benjamin Franklin
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
