import { useState } from "react";
import { Filter, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import researchImage from "@assets/stock_images/african_agricultural_4a8cedaa.jpg";
import meImage from "@assets/stock_images/data_analysis_monito_5040bc45.jpg";
import facilitationImage from "@assets/stock_images/corporate_workshop_f_307344bf.jpg";
import designImage from "@assets/stock_images/design_strategy_thin_307f71ec.jpg";

type Category = "All" | "Research" | "M&E" | "Capacity Building" | "Design Strategy";

const projects = [
  {
    id: 1,
    title: "Youth Livelihood Program Evaluation",
    category: "M&E",
    description: "Comprehensive midterm evaluation of a multi-country youth employment initiative reaching 50,000+ beneficiaries.",
    stats: "50,000+ youth reached",
    location: "Kenya & Uganda",
    date: "2023",
    image: meImage
  },
  {
    id: 2,
    title: "Agricultural Value Chain Assessment",
    category: "Research",
    description: "In-depth analysis of smallholder farmer integration into commercial agricultural value chains.",
    stats: "12 value chains mapped",
    location: "Tanzania",
    date: "2023",
    image: researchImage
  },
  {
    id: 3,
    title: "Health Systems Strengthening",
    category: "Capacity Building",
    description: "Designed and delivered training for 200+ health workers on community-based healthcare delivery.",
    stats: "200+ workers trained",
    location: "Rwanda",
    date: "2022",
    image: facilitationImage
  },
  {
    id: 4,
    title: "Financial Inclusion Strategy",
    category: "Design Strategy",
    description: "Human-centered design process to develop new digital financial products for rural women.",
    stats: "3 prototypes piloted",
    location: "Ethiopia",
    date: "2023",
    image: designImage
  },
  {
    id: 5,
    title: "Education Policy Review",
    category: "Research",
    description: "Review of national education policies to identify gaps in vocational training alignment.",
    stats: "National policy impact",
    location: "Kenya",
    date: "2022",
    image: researchImage
  },
  {
    id: 6,
    title: "Community Resilience Workshop",
    category: "Facilitation", // Mapped to Capacity Building for filter simplicity if needed, or keep separate
    description: "Facilitated multi-stakeholder dialogue on climate resilience in pastoralist communities.",
    stats: "15 communities engaged",
    location: "Somalia",
    date: "2023",
    image: facilitationImage
  }
];

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const categories: Category[] = ["All", "Research", "M&E", "Capacity Building", "Design Strategy"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter || (activeFilter === "Capacity Building" && p.category === "Facilitation"));

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header */}
      <div className="bg-background text-foreground py-20 mb-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-primary">Our Impact</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our portfolio of projects driving sustainable development across the continent.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <div className="flex items-center text-muted-foreground mr-2">
            <Filter className="w-5 h-5 mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeFilter === cat ? "default" : "outline"}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-6 ${
                activeFilter === cat 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-transparent hover:bg-muted"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border">
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-primary font-bold hover:bg-white text-xs uppercase tracking-wide px-3 py-1">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <div className="flex items-center text-sm font-medium">
                    <Users className="w-4 h-4 mr-2 text-secondary" />
                    {project.stats}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-heading text-primary mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
