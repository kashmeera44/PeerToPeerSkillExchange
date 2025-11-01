import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Star, Award, TrendingUp, Video, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";
import networkBg from "@/assets/network-bg.jpg";
import communityImage from "@/assets/learning-community.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent/90 to-primary/95"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Share Skills, <span className="text-secondary">Grow Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Connect with peers, exchange knowledge, and master new skills through our innovative peer-to-peer learning platform
            </p>
            <blockquote className="text-lg md:text-xl italic text-primary-foreground/80 mb-10 border-l-4 border-secondary pl-6 max-w-2xl mx-auto">
              "The beautiful thing about learning is that no one can take it away from you." - B.B. King
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="xl" variant="hero" className="w-full sm:w-auto">
                  <GraduationCap className="mr-2" />
                  Get Started Free
                </Button>
              </Link>
              <Link to="/login">
                <Button size="xl" variant="outline" className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="text-primary-foreground/60 text-sm">Scroll to explore</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${networkBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Choose SkillShare
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience a revolutionary way to learn and teach skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Peer-to-Peer Learning",
                description: "Connect directly with skilled individuals who share your passion for growth"
              },
              {
                icon: BookOpen,
                title: "Diverse Skills",
                description: "From coding to music, chess to design - explore countless learning opportunities"
              },
              {
                icon: Video,
                title: "Flexible Learning",
                description: "Choose between video tutorials or live one-on-one sessions via Google Meet"
              },
              {
                icon: Star,
                title: "Rating System",
                description: "Build credibility through student feedback and become a verified trainer"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to start your learning journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description: "Sign up and showcase your skills and learning interests"
              },
              {
                step: "02",
                title: "Choose Your Path",
                description: "Browse skills, select learning mode, and find the perfect trainer"
              },
              {
                step: "03",
                title: "Learn & Grow",
                description: "Book sessions, learn new skills, and earn ratings as you progress"
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Growing <span className="text-primary">Community</span>
              </h2>
              <blockquote className="text-lg italic text-muted-foreground mb-6 border-l-4 border-primary pl-6">
                "Education is not the filling of a pail, but the lighting of a fire." - W.B. Yeats
              </blockquote>
              <p className="text-lg text-muted-foreground mb-6">
                Connect with thousands of learners and trainers worldwide. Share your expertise, 
                earn recognition, and unlock opportunities as you help others grow.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: TrendingUp, label: "Verified Trainers", value: "500+" },
                  { icon: Award, label: "Skills Taught", value: "100+" },
                  { icon: Calendar, label: "Sessions Booked", value: "10K+" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/register">
                <Button size="lg" variant="gradient">
                  Start Your Journey
                </Button>
              </Link>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src={communityImage} 
                alt="Learning Community" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${networkBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/95"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of learners and trainers exchanging skills every day
          </p>
          <Link to="/register">
            <Button size="xl" variant="hero" className="bg-white text-primary hover:bg-white/90">
              <GraduationCap className="mr-2" />
              Sign Up Now - It's Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 SkillShare. Empowering peer-to-peer learning worldwide.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
