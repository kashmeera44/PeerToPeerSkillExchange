import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";

const VideoTutorials = () => {
  const navigate = useNavigate();

  const tutorials = [
    {
      title: "Python for Beginners - Full Course",
      channel: "freeCodeCamp.org",
      duration: "4:26:52",
      url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
      thumbnail: "https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg"
    },
    {
      title: "Python Tutorial - Python Full Course for Beginners",
      channel: "Programming with Mosh",
      duration: "6:14:07",
      url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
      thumbnail: "https://img.youtube.com/vi/_uQrJ0TkZlc/maxresdefault.jpg"
    },
    {
      title: "Learn Python - Full Course for Beginners",
      channel: "Telusko",
      duration: "1:54:00",
      url: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
      thumbnail: "https://img.youtube.com/vi/WGJJIrtnfpk/maxresdefault.jpg"
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
            Recommended Video Tutorials
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated high-quality videos to help you master this skill
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {tutorials.map((tutorial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative group flex-shrink-0">
                    <img 
                      src={tutorial.thumbnail} 
                      alt={tutorial.title}
                      className="w-full md:w-64 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors rounded-lg flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {tutorial.duration}
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{tutorial.title}</CardTitle>
                    <CardDescription className="mb-4">
                      by {tutorial.channel}
                    </CardDescription>
                    <a href={tutorial.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="hero" size="lg">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Watch on YouTube
                      </Button>
                    </a>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto p-6 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-xl font-semibold mb-3 text-center">💡 Learning Tip</h3>
          <p className="text-muted-foreground text-center">
            Take your time with each tutorial. Practice coding along with the videos and don't hesitate 
            to pause and experiment. Learning is a journey, not a race!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorials;
