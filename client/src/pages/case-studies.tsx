import { useState } from "react";
import { Link } from "wouter";
import { Filter, MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import meImage from "@assets/stock_images/case-2.webp";
import ecopulseimage from "@assets/stock_images/case-1.webp";

type Category =
  | "All"
  | "Research"
  | "M&E"
  | "Capacity Building"
  | "Design Strategy";

const projects = [
  {
    id: 1,
    title: "Youth Livelihood Program Evaluation",
    category: "M&E",
    description:
      "Comprehensive midterm evaluation of a multi-country youth employment initiative reaching 50,000+ beneficiaries.",
    stats: "3,000+ youth reached",
    location: "Kenya & Uganda",
    date: "2023",
    image: meImage,
  },
  {
    id: 7,
    title: "EcoPulse: A Civic-Tech Ecosystem for Air Quality Action",
    category: "M&E",
    mission:
      "To empower communities with real-time air-quality data, AI-driven health guidance, and a public accountability system to enable timely protective actions, drive evidence-based government interventions and generate epidemiology data to inform scalable solutions against air pollution.",
    progress: "Phase 1 activities ongoing",
    stats: "Phase 1 active",
    location: "Urban Kenya",
    date: "Ongoing (2025)",
    image: ecopulseimage,
  },
];

/* ------------------ Animation Variants ------------------ */

const pageFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const categories: Category[] = [
    "All",
    "Research",
    "M&E",
    "Capacity Building",
    "Design Strategy",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <motion.div
      variants={pageFade}
      initial="hidden"
      animate="visible"
      className="bg-background min-h-screen pb-20"
    >
      {/* Header */}
      <div className="bg-background text-foreground py-20 mb-12 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-primary tracking-tight"
          >
            Our Impact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            Explore our portfolio of projects driving sustainable development
            across the continent.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <div className="flex items-center text-muted-foreground mr-4">
            <Filter className="w-5 h-5 mr-2" />
            <span className="font-semibold">Filter by:</span>
          </div>

          {categories.map((cat) => (
            <motion.div
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeFilter === cat ? "default" : "outline"}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-transparent hover:bg-muted hover:border-primary/50"
                }`}
              >
                {cat}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{ y: -8 }}
                className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-border/30"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    initial={{ scale: 1.05 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

                  <div className="absolute top-5 left-5">
                    <Badge className="bg-white/95 text-primary font-bold text-xs uppercase px-4 py-2 backdrop-blur-md shadow-md">
                      {project.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-5 left-5 text-white">
                    <div className="flex items-center text-sm font-semibold bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5">
                      <Users className="w-5 h-5 mr-2" />
                      {project.stats}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="p-8 md:p-10"
                >
                  <div className="flex items-center text-sm text-muted-foreground mb-5 space-x-6 uppercase tracking-wider">
                    <div className="flex items-center font-medium">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.date}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold mb-5 leading-tight tracking-tight">
                    {project.title}
                  </h3>

                  {project.mission && (
                    <div className="mb-8">
                      <h4 className="text-lg font-bold mb-3">Mission</h4>
                      <p className="text-muted-foreground italic leading-relaxed">
                        {project.mission}
                      </p>
                    </div>
                  )}

                  {project.progress && (
                    <div className="mb-8">
                      <h4 className="text-lg font-bold mb-3">
                        Current Progress
                      </h4>
                      <p className="text-muted-foreground">
                        {project.progress}
                      </p>
                    </div>
                  )}

                  {!project.mission && !project.progress && (
                    <p className="text-muted-foreground leading-relaxed mb-10 line-clamp-4">
                      {project.description}
                    </p>
                  )}

                  <motion.div whileHover={{ scale: 1.03 }}>
                    <Link href="/eco-read" className="w-full">
                      <Button
                        variant="ghost"
                        className="group/btn w-full justify-between rounded-2xl border border-border/40 bg-muted/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all px-8 py-7 text-lg font-semibold tracking-wide"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-3" />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
