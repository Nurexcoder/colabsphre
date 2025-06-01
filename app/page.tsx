"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Bot,
  Mail,
  Target,
  Zap,
  Star,
  CheckCircle,
  Sparkles,
  Users,
  TrendingUp,
  Play,
} from "lucide-react";
import { CollabSphereLogo } from "@/components/CollabSphereLogo";

// SECTION: Floating Particles Background
const FloatingParticles = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  const particles = Array.from({ length: 50 }, (_, i) => i);

  if (dimensions.width === 0 || dimensions.height === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

// SECTION: Animated Counter
type AnimatedCounterProps = {
  end: number;
  duration?: number;
};
const AnimatedCounter = ({ end, duration = 2 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime: number | undefined;
      const animate = (currentTime: number) => {
        if (startTime === undefined) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

// SECTION: Main Landing Page
export default function EnhancedLandingPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1Spring = useSpring(y1, springConfig);
  const y2Spring = useSpring(y2, springConfig);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* SECTION: Floating Particles */}
      <FloatingParticles />

      {/* SECTION: Header */}
      <motion.header
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <CollabSphereLogo size={40} />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CollabSphere
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Features", "Pricing", "About"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors relative"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                className="text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:text-white border border-white/20"
              >
                <a href="/auth/login">Login</a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg"
              >
                <a href="/auth/signup">Sign Up</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* SECTION: Hero */}
      <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"
          style={{ y: y1Spring }}
        />

        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity, scale }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Badge className="mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 text-lg px-6 py-2">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀
                </motion.span>
                AI-Powered Influencer Marketing Revolution
              </Badge>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Automate Your
              </span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Influencer Empire
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From discovery to negotiation, let cutting-edge AI handle your
              entire influencer campaign workflow. Connect with perfect
              creators, negotiate terms automatically, and scale your campaigns
              to unprecedented heights.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  size="lg"
                  className="text-xl px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-2xl shadow-blue-500/25 text-white border-0"
                >
                  Start as Brand
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  backgroundColor: "rgba(147, 51, 234, 0.1)",
                  borderColor: "rgba(147, 51, 234, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-xl px-12 py-6 border-2 border-white/30 text-white hover:border-purple-400 hover:bg-purple-400/10 hover:text-white backdrop-blur-sm bg-white/5"
                >
                  Join as Influencer
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Dashboard Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ y: y2Spring }}
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-2xl shadow-purple-500/20">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="h-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION: Stats */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: 10000, label: "Active Brands", suffix: "+" },
              { number: 50000, label: "Influencers", suffix: "+" },
              { number: 95, label: "Success Rate", suffix: "%" },
              { number: 500, label: "Million Reach", suffix: "M+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <AnimatedCounter end={stat.number} />
                  {stat.suffix}
                </motion.div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg -z-10"
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION: Features */}
      <section id="features" className="py-32 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge AI technology that transforms how brands and
              influencers collaborate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "AI-Powered Outreach",
                description:
                  "Automated personalized emails that get responses. Our neural networks craft compelling messages tailored to each influencer's style and preferences.",
                color: "from-blue-500 to-cyan-500",
                features: [
                  "GPT-4 powered personalization",
                  "98% delivery rate",
                  "3x higher response rates",
                ],
              },
              {
                icon: Bot,
                title: "Smart Negotiation Engine",
                description:
                  "Revolutionary AI handles complex terms and pricing discussions, ensuring optimal deals while saving countless hours of manual negotiation.",
                color: "from-green-500 to-emerald-500",
                features: [
                  "Real-time market analysis",
                  "Fair pricing algorithms",
                  "Automated contract generation",
                ],
              },
              {
                icon: Target,
                title: "Quantum Matching",
                description:
                  "Advanced machine learning finds perfect influencer matches based on deep audience analysis, engagement patterns, and predictive performance modeling.",
                color: "from-purple-500 to-pink-500",
                features: [
                  "Deep audience insights",
                  "Predictive analytics",
                  "ROI optimization engine",
                ],
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 h-full relative overflow-hidden group">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <CardHeader className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <CardTitle className="text-2xl text-white mb-4">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-lg leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {feature.features.map((item, j) => (
                        <motion.li
                          key={j}
                          className="flex items-center text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 + j * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Testimonials */}
      <section className="py-32 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director at TechCorp",
                content:
                  "CollabSphere didn't just reduce our campaign setup time by 80% – it revolutionized our entire influencer strategy. The AI negotiations are pure magic.",
                rating: 5,
                image: "👩‍💼",
              },
              {
                name: "Mike Chen",
                role: "Content Creator • 2M Followers",
                content:
                  "Finally, a platform that respects creators! The automated processes are seamless, and I'm getting fairer deals than ever before.",
                rating: 5,
                image: "👨‍🎨",
              },
              {
                name: "Emma Davis",
                role: "Brand Manager at FashionCo",
                content:
                  "The ROI speaks for itself – 3x better engagement rates and campaigns that actually convert. This is the future of influencer marketing.",
                rating: 5,
                image: "👩‍💻",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 h-full relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5"
                    animate={{ opacity: [0, 0.1, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />

                  <CardContent className="pt-8 relative z-10">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.2 + j * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center">
                      <div className="text-4xl mr-4">{testimonial.image}</div>
                      <div>
                        <p className="font-semibold text-white text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Call To Action (CTA) */}
      <motion.section
        className="py-32 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          animate={{
            background: [
              "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)",
              "linear-gradient(45deg, #8B5CF6, #EC4899, #3B82F6)",
              "linear-gradient(45deg, #EC4899, #3B82F6, #8B5CF6)",
              "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-7xl font-black text-white mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Dominate?
          </motion.h2>

          <motion.p
            className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join the AI revolution and transform your influencer marketing into
            an unstoppable force.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -8,
                filter: "brightness(1.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                size="lg"
                className="text-xl px-12 py-6 bg-white text-purple-600 hover:bg-gray-100 shadow-2xl font-semibold"
              >
                Start Free Trial
                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Zap className="ml-3 w-6 h-6" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -8,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-6 text-black border-2 border-white/50 hover:border-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Play className="mr-3 w-6 h-6" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION: Footer */}
      <footer className="bg-black border-t border-gray-800 py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <CollabSphereLogo size={40} />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  CollabSphere
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The AI-powered future of influencer marketing is here.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "API", "Integrations"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact", "Privacy", "Terms"],
              },
            ].map((column, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-6 text-white text-lg">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link, j) => (
                    <motion.li
                      key={j}
                      whileHover={{ x: 5, color: "#ffffff" }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-gray-800 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400">
              &copy; 2025 CollabSphere. All rights reserved. Built with AI
              magic.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
