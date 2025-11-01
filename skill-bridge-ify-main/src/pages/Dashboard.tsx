import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Music, Trophy, Palette, Dumbbell, Languages, LogOut, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  const technicalSkills = [
    { icon: Code, name: "Python", description: "Master programming fundamentals", color: "text-blue-500" },
    { icon: Code, name: "HTML & CSS", description: "Build beautiful websites", color: "text-orange-500" },
    { icon: Code, name: "Java", description: "Enterprise application development", color: "text-red-500" },
    { icon: Code, name: "JavaScript", description: "Interactive web development", color: "text-yellow-500" },
  ];

  const nonTechnicalSkills = [
    { icon: Music, name: "Guitar", description: "Learn acoustic & electric guitar", color: "text-purple-500" },
    { icon: Music, name: "Piano", description: "Master keys and composition", color: "text-pink-500" },
    { icon: Trophy, name: "Chess", description: "Strategic thinking & tactics", color: "text-amber-500" },
    { icon: Palette, name: "Digital Art", description: "Illustration and design", color: "text-green-500" },
    { icon: Dumbbell, name: "Yoga", description: "Fitness and mindfulness", color: "text-teal-500" },
    { icon: Languages, name: "Spanish", description: "Conversational language skills", color: "text-rose-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SkillShare
          </h1>
          <div className="flex gap-2">
            <Link to="/profile">
              <Button variant="ghost">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
            </Link>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of skills and start your journey today
          </p>
        </div>

        {/* Technical Skills Section */}
        <section className="mb-16 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold">Technical Skills</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <Link key={index} to="/skills/technical">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm group">
                  <CardHeader>
                    <skill.icon className={`w-12 h-12 ${skill.color} mb-2 group-hover:scale-110 transition-transform`} />
                    <CardTitle className="text-xl">{skill.name}</CardTitle>
                    <CardDescription>{skill.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Non-Technical Skills Section */}
        <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-6">
            <Music className="w-8 h-8 text-secondary" />
            <h3 className="text-3xl font-bold">Creative & Life Skills</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTechnicalSkills.map((skill, index) => (
              <Link key={index} to="/skills/non-technical">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm group">
                  <CardHeader>
                    <skill.icon className={`w-12 h-12 ${skill.color} mb-2 group-hover:scale-110 transition-transform`} />
                    <CardTitle className="text-xl">{skill.name}</CardTitle>
                    <CardDescription>{skill.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Inspirational Quote */}
        <div className="mt-16 max-w-3xl mx-auto">
          <blockquote className="text-center text-lg md:text-xl italic text-muted-foreground border-l-4 border-primary pl-6">
            "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice." - Brian Herbert
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
