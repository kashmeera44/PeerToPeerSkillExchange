import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a rating before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Store feedback data
    const existingFeedback = JSON.parse(localStorage.getItem("userFeedback") || "[]");
    existingFeedback.push({
      rating,
      feedback,
      date: new Date().toISOString()
    });
    localStorage.setItem("userFeedback", JSON.stringify(existingFeedback));

    toast({
      title: "Thank You!",
      description: "Your feedback has been submitted successfully.",
    });

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

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
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-border/50 animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Rate Your Experience</CardTitle>
              <CardDescription className="text-base">
                Your feedback helps trainers improve and guides other learners
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <Label className="text-lg">How would you rate this session? *</Label>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="transition-transform hover:scale-110"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                      >
                        <Star
                          className={`w-12 h-12 md:w-16 md:h-16 transition-colors ${
                            star <= (hoveredRating || rating)
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-center text-lg font-medium animate-fade-in">
                      {rating === 5 && "Outstanding! 🌟"}
                      {rating === 4 && "Great! 👍"}
                      {rating === 3 && "Good 👌"}
                      {rating === 2 && "Needs Improvement 🤔"}
                      {rating === 1 && "Poor 😞"}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback">Share Your Experience (Optional)</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Tell us about your learning experience, what went well, and what could be improved..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">💡 Trainer Progression</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Trainers with 3+ sessions and high ratings become verified</li>
                    <li>• Verified trainers appear at the top of search results</li>
                    <li>• Your honest feedback helps maintain quality</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full" size="lg" variant="hero">
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8">
            <blockquote className="text-center text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
              "Feedback is the breakfast of champions." - Ken Blanchard
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
