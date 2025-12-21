import { ArrowLeft, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function EcoPulsePhase1CaseStudy() {
  return (
    <div className="bg-background min-h-screen text-foreground">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/90 via-primary to-destructive/80 py-32 md:py-48 overflow-hidden text-white">
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative container mx-auto px-6 max-w-6xl text-center">
          <Badge className="mb-6 bg-white/20 text-white font-semibold px-6 py-3 text-lg rounded-full backdrop-blur-md animate-pulse">
            Phase 1: Baseline Assessment
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Knowledge, Attitudes & Practices Towards Particulate Matter Pollution in Embakasi
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
            Understanding community perceptions of invisible PM<sub>2.5</sub> threats in one of Kenya's most polluted urban areas.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-20 md:py-32 max-w-6xl space-y-32">

        
        {/* Problem Statement */}
        <ContentSection title="The Hidden Crisis" bgClass="bg-card border border-border/50 shadow-lg">
          <p>
            Air pollution ranks as the top environmental health risk globally and is responsible for ~85% of non-communicable disease deaths worldwide.
          </p>
          <p>
            In Kenya, air pollution claims ~19,000 lives annually. Urbanization, industrialization, and everyday practices like firewood cooking disproportionately expose low-income communities to deadly PM<sub>2.5</sub>.
          </p>
          <p className="font-semibold">
            In Embakasi, air pollution accounts for 60% of daily hospital visits, with PM<sub>2.5</sub> levels exceeding WHO guidelines.
          </p>
        </ContentSection>

        {/* Research Objectives */}
        <section className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-foreground">Research Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Evaluate the community’s knowledge of PM2.5 pollution",
              "Examine attitudes and perceptions toward its health effects",
              "Investigate community protective practices",
              "Analyze influence of socio-demographic factors on practices",
              "Explore inter-relationships between knowledge, attitudes, and practices"
            ].map((obj, i) => (
              <div key={i} className="bg-card shadow-lg rounded-2xl p-6 border border-border/50 hover:scale-105 transition-transform">
                <span className="inline-block w-10 h-10 bg-primary text-white font-bold rounded-full text-center leading-10 mr-3">{i + 1}</span>
                <span className="text-lg font-semibold">{obj}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <ContentSection title="Methodology" bgClass="bg-card border border-border/50 shadow-lg">
          <p>Cross-sectional study conducted in Komarock Harmony A Community Health Unit, Embakasi, using systematic household sampling.</p>
          <p>314 participants (household heads aged 18+) completed structured surveys (~15 minutes each).</p>
          <p>Data analyzed using descriptive stats, ordinal logistic regression, and Spearman correlation in R.</p>
          <p className="font-semibold">Ethical approval obtained; informed consent from all participants.</p>
        </ContentSection>

        {/* Key Findings */}
        <section className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-black text-center">Key Findings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "74.8%", label: "High Knowledge Level" },
              { value: "76%", label: "Positive Attitudes & Risk Perception" },
              { value: "53%", label: "Moderate Protective Practices" },
            ].map((stat, i) => (
              <div key={i} className="bg-card rounded-3xl p-10 text-center shadow-lg border border-border/50 hover:scale-105 transition-transform">
                <div className="text-6xl md:text-7xl font-extrabold mb-3 text-primary">{stat.value}</div>
                <p className="text-lg md:text-xl font-semibold text-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6 max-w-3xl mx-auto">
            Strong predictors of protective practices: being female, neutral income perception, and higher attitude/risk perception scores.
          </p>
        </section>

        {/* Conclusion */}
        <section className="bg-card rounded-3xl p-12 md:p-20 shadow-2xl border border-border/50 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Path Forward with EcoPulse</h2>
          <p className="text-2xl font-bold text-foreground">High awareness exists — but protective action remains limited by systemic barriers.</p>
          <p className="text-lg md:text-xl text-muted-foreground">Community-wide and policy-level interventions, combined with enhanced risk communication, are urgently needed.</p>
          <p className="text-xl font-semibold text-foreground">EcoPulse democratizes real-time air quality data, delivers AI-powered health guidance, and drives evidence-based policy for scalable solutions.</p>
        </section>

      </main>
    </div>
  );
}

/* Reusable Section Component */
function ContentSection({ title, bgClass, children }: { title: string, bgClass: string, children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">{title}</h2>
      <div className={`rounded-3xl p-10 md:p-16 ${bgClass}`}>
        <div className="prose prose-lg md:prose-xl text-muted-foreground space-y-5">
          {children}
        </div>
      </div>
    </section>
  );
}
