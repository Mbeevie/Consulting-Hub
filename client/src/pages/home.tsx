import { Link } from "wouter";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import home from "@assets/stock_images/hero.jpg";
import ecopulseimage from "@assets/stock_images/monitoring.jpg";
import mitigating from "@assets/stock_images/research.jpg";
import meImage from "@assets/stock_images/data_analysis_monito_5040bc45.jpg";

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/80 via-primary/70 to-destructive/60 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/25" />
        <div className="container mx-auto px-6 py-20 relative z-10 text-center lg:text-left max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-bottom-5 duration-700 fade-in">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                Evidence-Based <br/>
                <span className="text-secondary">Strategic Impact</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-xl">
                Partnering with organizations to design, monitor, and evaluate development programs that create lasting change across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full h-14 px-10 text-lg")}
                >
                  Partner With Us
                </Link>
                <Link 
                  href="/services"
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }), "border-input text-foreground hover:bg-primary/10 font-semibold rounded-full h-14 px-10 text-lg")}
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] hidden lg:block rounded-2xl overflow-hidden shadow-2xl animate-in slide-in-from-right-5 duration-700 fade-in delay-200">
              <img 
                src={home} 
                alt="Consulting Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-semibold uppercase tracking-wider text-sm mb-3">Our Expertise</h2>
            <h3 className="text-4xl font-bold mb-6 text-primary">Comprehensive Development Solutions</h3>
            <p className="text-muted-foreground text-lg">Our multidisciplinary team brings deep technical expertise and contextual understanding to every engagement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Research & Strategy"
              description="Data-driven insights to inform policy, program design, and strategic decision-making."
              image={mitigating}
            />
            <ServiceCard 
              title="Monitoring & Evaluation"
              description="Robust frameworks to measure impact, ensure accountability, and foster learning."
              image={meImage}
            />
            <ServiceCard 
              title="Capacity Building"
              description="Empowering teams and communities through tailored training and institutional strengthening."
              image={ecopulseimage}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-semibold uppercase tracking-wider text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-4xl font-bold text-primary mb-6">Local Insight, Global Standards</h3>
            <p className="text-muted-foreground text-lg">Delivering solutions with local insight while adhering to international best practices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature title="Regional Expertise" description="Deep understanding of East African context and development challenges." />
            <Feature title="Proven Methodology" description="Scientifically-grounded approaches adapted for practical application." />
            <Feature title="Cross-Cultural Insight" description="Bridging the gap between international donor expectations and local realities." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background text-center border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to maximize your impact?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss how our expertise can support your organization's goals and sustainable development objectives.
          </p>
          <Link 
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full h-14 px-12 text-lg shadow-lg hover:shadow-xl transition-all")}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, image }: { title: string, description: string, image: string }) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 group">
      <div className="relative h-56 overflow-hidden rounded-t-2xl">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <CardContent className="p-6 flex flex-col">
        <h4 className="text-2xl font-bold text-primary mb-3">{title}</h4>
        <p className="text-muted-foreground flex-1">{description}</p>
      </CardContent>
    </Card>
  );
}

function Feature({ title, description }: { title: string, description: string }) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-xl font-bold text-primary mb-2">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
