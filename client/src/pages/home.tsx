import { ArrowRight, BarChart2, Lightbulb, Users, CheckCircle, Globe, Award } from "lucide-react";
import { Link } from "wouter";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import heroImage from "@assets/stock_images/professional_diverse_5895f23c.jpg";
import researchImage from "@assets/stock_images/african_agricultural_4a8cedaa.jpg";
import meImage from "@assets/stock_images/data_analysis_monito_5040bc45.jpg";
import facilitationImage from "@assets/stock_images/corporate_workshop_f_307344bf.jpg";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Consulting Team" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl animate-in slide-in-from-bottom-5 duration-700 fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-6 tracking-tight">
              Evidence-Based <br/>
              <span className="text-secondary">Strategic Impact.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              We partner with organizations to design, monitor, and evaluate development programs that create lasting change across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className={cn(
                  buttonVariants({ size: "lg" }), 
                  "bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-full h-14 px-8 text-lg hover:no-underline"
                )}
              >
                Partner With Us
              </Link>
              <Link 
                href="/services" 
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }), 
                  "border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold rounded-full h-14 px-8 text-lg hover:no-underline"
                )}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-semibold uppercase tracking-wider text-sm mb-3">Our Expertise</h2>
            <h3 className="text-4xl font-bold font-heading text-primary mb-6">Comprehensive Development Solutions</h3>
            <p className="text-muted-foreground text-lg">
              Our multidisciplinary team brings deep technical expertise and contextual understanding to every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Research & Strategy" 
              description="Data-driven insights to inform policy, program design, and strategic decision-making."
              icon={<Lightbulb className="w-10 h-10 text-secondary" />}
              image={researchImage}
            />
            <ServiceCard 
              title="Monitoring & Evaluation" 
              description="Robust frameworks to measure impact, ensure accountability, and foster learning."
              icon={<BarChart2 className="w-10 h-10 text-secondary" />}
              image={meImage}
            />
            <ServiceCard 
              title="Capacity Building" 
              description="Empowering teams and communities through tailored training and institutional strengthening."
              icon={<Users className="w-10 h-10 text-secondary" />}
              image={facilitationImage}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className={cn(
                buttonVariants({ variant: "link" }), 
                "text-primary font-semibold text-lg group hover:no-underline"
              )}
            >
              View All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-secondary font-semibold uppercase tracking-wider text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-4xl font-bold font-heading text-primary mb-8">
                Local Insight, Global Standards
              </h3>
              
              <div className="space-y-8">
                <Feature 
                  icon={<Globe className="w-6 h-6 text-white" />}
                  title="Regional Expertise"
                  description="Deep understanding of the East African context, cultures, and development challenges."
                />
                <Feature 
                  icon={<CheckCircle className="w-6 h-6 text-white" />}
                  title="Proven Methodology"
                  description="Rigorous, scientifically-grounded approaches adapted for practical application."
                />
                <Feature 
                  icon={<Award className="w-6 h-6 text-white" />}
                  title="Cross-Cultural Insight"
                  description="Bridging the gap between international donor expectations and local realities."
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl transform rotate-3" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={facilitationImage} 
                  alt="Team collaboration" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="text-4xl font-bold text-primary mb-1">10+</div>
                <div className="text-muted-foreground font-medium">Years of impactful partnership across 5 countries.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl font-bold font-heading mb-6">Ready to maximize your impact?</h2>
          <p className="text-xl text-white/80 mb-10">
            Let's discuss how our expertise can support your organization's goals and sustainable development objectives.
          </p>
          <Link 
            href="/contact" 
            className={cn(
              buttonVariants({ size: "lg" }), 
              "bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-full h-14 px-10 text-lg shadow-xl hover:shadow-2xl transition-all hover:no-underline"
            )}
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, icon, image }: { title: string, description: string, icon: React.ReactNode, image: string }) {
  return (
    <Card className="overflow-hidden group border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <CardContent className="p-8 flex-1 flex flex-col">
        <div className="mb-6 p-3 bg-muted rounded-xl w-fit group-hover:bg-primary/5 transition-colors">
          {icon}
        </div>
        <h4 className="text-2xl font-bold font-heading text-primary mb-3">{title}</h4>
        <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
          {description}
        </p>
        <div className="text-secondary-foreground font-semibold flex items-center group-hover:translate-x-1 transition-transform cursor-pointer">
          Learn more <ArrowRight className="ml-2 w-4 h-4 text-secondary" />
        </div>
      </CardContent>
    </Card>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold font-heading text-primary mb-2">{title}</h4>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
