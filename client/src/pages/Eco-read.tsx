import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const pageFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function EcoPulsePhase1CaseStudy() {
  return (
    <motion.div
      variants={pageFade}
      initial="hidden"
      animate="visible"
      className="bg-background min-h-screen text-foreground"
    >
      <section className="relative bg-gradient-to-br from-primary/90 via-primary to-destructive/80 py-32 md:py-48 overflow-hidden text-white">
        <div className="absolute inset-0 bg-black/25" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative container mx-auto px-6 max-w-6xl text-center"
        >
          <motion.div variants={fadeUp}>
            <Badge className="mb-6 bg-white/20 text-white font-semibold px-6 py-3 text-lg rounded-full backdrop-blur-md">
              Phase 1: Baseline Assessment
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            Knowledge, Attitudes & Practices Towards Particulate Matter Pollution
            in Embakasi
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90"
          >
            Understanding community perceptions of invisible PM
            <sub>2.5</sub> threats in one of Kenya&apos;s most polluted urban areas.
          </motion.p>
        </motion.div>
      </section>

      <main className="container mx-auto px-6 py-20 md:py-32 max-w-6xl space-y-32">
        <AnimatedContentSection
          title="The Hidden Crisis"
          bgClass="bg-card border border-border/50 shadow-lg"
        >
          <p>
            Air pollution ranks as the top environmental health risk globally and
            is responsible for ~85% of non-communicable disease deaths worldwide.
          </p>
          <p>
            In Kenya, air pollution claims ~19,000 lives annually. Urbanization,
            industrialization, and everyday practices like firewood cooking
            disproportionately expose low-income communities to deadly PM
            <sub>2.5</sub>.
          </p>
          <p className="font-semibold">
            In Embakasi, air pollution accounts for 60% of daily hospital visits,
            with PM<sub>2.5</sub> levels exceeding WHO guidelines.
          </p>
        </AnimatedContentSection>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black mb-8"
          >
            Research Objectives
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Evaluate the community’s knowledge of PM2.5 pollution",
              "Examine attitudes and perceptions toward its health effects",
              "Investigate community protective practices",
              "Analyze influence of socio-demographic factors on practices",
              "Explore inter-relationships between knowledge, attitudes, and practices",
            ].map((obj, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-card shadow-lg rounded-2xl p-6 border border-border/50"
              >
                <span className="inline-block w-10 h-10 bg-primary text-white font-bold rounded-full text-center leading-10 mr-3">
                  {i + 1}
                </span>
                <span className="text-lg font-semibold">{obj}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <AnimatedContentSection
          title="Methodology"
          bgClass="bg-card border border-border/50 shadow-lg"
        >
          <p>
            Cross-sectional study conducted in Komarock Harmony A Community Health
            Unit, Embakasi, using systematic household sampling.
          </p>
          <p>
            314 participants (household heads aged 18+) completed structured
            surveys (~15 minutes each).
          </p>
          <p>
            Data analyzed using descriptive stats, ordinal logistic regression,
            and Spearman correlation in R.
          </p>
          <p className="font-semibold">
            Ethical approval obtained; informed consent from all participants.
          </p>
        </AnimatedContentSection>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black text-center"
          >
            Key Findings
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "74.8%", label: "High Knowledge Level" },
              { value: "76%", label: "Positive Attitudes & Risk Perception" },
              { value: "53%", label: "Moderate Protective Practices" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-3xl p-10 text-center shadow-lg border border-border/50"
              >
                <div className="text-6xl md:text-7xl font-extrabold mb-3 text-primary">
                  {stat.value}
                </div>
                <p className="text-lg md:text-xl font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="text-center text-muted-foreground mt-6 max-w-3xl mx-auto"
          >
            Strong predictors of protective practices: being female, neutral
            income perception, and higher attitude/risk perception scores.
          </motion.p>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-12 md:p-20 shadow-2xl border border-border/50 text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Path Forward with EcoPulse
          </h2>
          <p className="text-2xl font-bold">
            High awareness exists but protective action remains limited by
            systemic barriers.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            Community-wide and policy-level interventions, combined with enhanced
            risk communication, are urgently needed.
          </p>
          <p className="text-xl font-semibold">
            EcoPulse democratizes real-time air quality data, delivers AI-powered
            health guidance, and drives evidence-based policy for scalable
            solutions.
          </p>
        </motion.section>
      </main>
    </motion.div>
  );
}

function AnimatedContentSection({
  title,
  bgClass,
  children,
}: {
  title: string;
  bgClass: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      <motion.h2
        variants={fadeUp}
        className="text-4xl md:text-5xl font-black mb-6"
      >
        {title}
      </motion.h2>

      <motion.div
        variants={fadeUp}
        className={`rounded-3xl p-10 md:p-16 ${bgClass}`}
      >
        <div className="prose prose-lg md:prose-xl text-muted-foreground space-y-5">
          {children}
        </div>
      </motion.div>
    </motion.section>
  );
}
