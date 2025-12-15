import { Search, PenTool, Users, BarChart, Presentation, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function Services() {
  const services = [
    {
      id: "research",
      title: "Research & Analysis",
      icon: <Search className="w-8 h-8" />,
      description: "We conduct rigorous mixed-methods research to provide evidence-based insights. From baseline surveys to market assessments, our data informs critical decision-making.",
      features: ["Baseline & Endline Surveys", "Market Systems Analysis", "Policy Research", "Feasibility Studies"]
    },
    {
      id: "design",
      title: "Design Strategy",
      icon: <PenTool className="w-8 h-8" />,
      description: "Using Human-Centered Design (HCD) principles, we co-create solutions with communities and stakeholders to ensure interventions are relevant, usable, and sustainable.",
      features: ["Program Co-creation", "User Experience Research", "Prototyping & Testing", "Service Design"]
    },
    {
      id: "facilitation",
      title: "Facilitation",
      icon: <Presentation className="w-8 h-8" />,
      description: "Our expert facilitators manage complex multi-stakeholder dialogues, strategic planning workshops, and validation meetings to drive consensus and action.",
      features: ["Strategic Planning", "Stakeholder Dialogue", "Validation Workshops", "Team Retreats"]
    },
    {
      id: "me",
      title: "Monitoring & Evaluation",
      icon: <BarChart className="w-8 h-8" />,
      description: "We design robust M&E frameworks and conduct independent evaluations to measure impact, accountability, and learning throughout the project lifecycle.",
      features: ["M&E Framework Design", "Mid-term & Final Evaluations", "Impact Assessments", "Third-party Monitoring"]
    },
    {
      id: "capacity",
      title: "Capacity Building",
      icon: <Users className="w-8 h-8" />,
      description: "We strengthen institutions and individuals through tailored training programs, mentorship, and organizational development support.",
      features: ["Training of Trainers (ToT)", "Curriculum Development", "Organizational Assessment", "Mentorship Programs"]
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Services</h1>
          <p className="text-xl text-primary-foreground/80">
            Holistic consulting solutions tailored to the unique challenges of development in Africa.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border-t-4 border-t-secondary hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-16 h-16 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-primary font-heading">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-foreground/80">
                      <Target className="w-4 h-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading text-primary mb-4">How We Work</h2>
            <p className="text-muted-foreground text-lg">
              Our engagement model is collaborative, iterative, and results-oriented.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding context, needs, and stakeholders." },
              { step: "02", title: "Design", desc: "Co-creating tailored methodologies and strategies." },
              { step: "03", title: "Implementation", desc: "Executing with precision and adaptive management." },
              { step: "04", title: "Learning", desc: "Analyzing results to inform future action." },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-primary/10 flex items-center justify-center text-2xl font-bold text-secondary mx-auto mb-6 shadow-sm group-hover:border-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-primary rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Need a tailored solution?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We understand that every project is unique. Contact us to discuss your specific requirements.
            </p>
            <Link 
              href="/contact" 
              className={cn(
                buttonVariants({ size: "lg" }), 
                "bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-full px-8 hover:no-underline"
              )}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
