import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  BookOpen,
  Users,
  Building,
  Wrench,
  Shield,
  CheckCircle,
  Download,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <Image src="/images/logo.png" alt="Dr. Milad Khatib Logo" width={32} height={32} className="h-8 w-8" />
            <span className="font-bold text-xl">Dr. Milad Khatib</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </a>
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </a>
            <a href="#publications" className="text-sm font-medium hover:text-accent transition-colors">
              Publications
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://drive.google.com/uc?export=download&id=1Bd3NJS9YYp3Zml_k9hHbSPYY_0_2hnWm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
            <Button asChild size="lg">
              <a href="#contact">Get Consultation</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-background"></div>
        <div className="container relative px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Badge variant="secondary" className="mb-6 px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  SPSC Ambassador #00014774 • Academic Excellence
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                  Building Tomorrow's Infrastructure with
                  <span className="block mt-2" style={{ color: "#130078" }}>
                    {" "}
                    Expert Precision
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Assistant Professor, Inventor & Patent Holder with PhD in Civil Engineering. 26+ years as Structural
                  and Geotechnical Engineer, Editorial Board Member for 18+ international journals, and SPSC
                  Sustainability Ambassador.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <Button size="lg" className="px-8 py-4 text-lg" asChild>
                    <a href="#contact">Schedule Consultation</a>
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent" asChild>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1Bd3NJS9YYp3Zml_k9hHbSPYY_0_2hnWm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl transform rotate-3"></div>
                  <Image
                    src="/images/dr-khatib-portrait.png"
                    alt="Dr. Milad Khatib - Professional Portrait"
                    width={400}
                    height={500}
                    className="relative rounded-2xl shadow-2xl object-cover w-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-muted/20">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="mb-6 px-4 py-2">
                About Dr. Khatib
              </Badge>
              <h2 className="text-4xl font-bold leading-tight">Engineering Excellence Through Academic Leadership</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dr. Milad Khatib is an accomplished Assistant Professor at Lebanese International University and a
                distinguished civil engineer with 26+ years of experience in structural and geotechnical engineering. As
                SPSC Ambassador Member #00014774 and holder of two patents, he brings innovative solutions to complex
                engineering challenges while serving on editorial boards of 18+ international journals across the U.S.,
                U.K., China, and Singapore.
              </p>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Civil Engineering</p>
                      <p className="text-xs text-muted-foreground">9 experiences • Endorsed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Research Skills</p>
                      <p className="text-xs text-muted-foreground">12 experiences • 4 endorsements</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Team Leadership</p>
                      <p className="text-xs text-muted-foreground">5 endorsements</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Problem Solving</p>
                      <p className="text-xs text-muted-foreground">6 endorsements</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                <div className="text-center p-6 bg-card rounded-xl border">
                  <div className="text-3xl font-bold" style={{ color: "#130078" }}>
                    35+
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Publications</div>
                </div>
                <div className="text-center p-6 bg-card rounded-xl border">
                  <div className="text-3xl font-bold" style={{ color: "#130078" }}>
                    2
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Patents</div>
                </div>
                <div className="text-center p-6 bg-card rounded-xl border">
                  <div className="text-3xl font-bold" style={{ color: "#130078" }}>
                    26+
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-card rounded-xl border">
                  <div className="text-3xl font-bold" style={{ color: "#130078" }}>
                    18+
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Editorial Boards</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative mb-8">
                <Image
                  src="/images/dr-khatib-speaking.png"
                  alt="Dr. Milad Khatib speaking at professional conference"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              <Card className="border-2">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <Award className="h-6 w-6" style={{ color: "#130078" }} />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                      style={{ backgroundColor: "#130078" }}
                    ></div>
                    <p className="text-sm leading-relaxed">
                      Assistant Professor at Lebanese International University (2023-Present)
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                      style={{ backgroundColor: "#130078" }}
                    ></div>
                    <p className="text-sm leading-relaxed">
                      SPSC Sustainability Ambassador Member #00014774 (2025-Present)
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                      style={{ backgroundColor: "#130078" }}
                    ></div>
                    <p className="text-sm leading-relaxed">
                      Editorial Board Member for 18+ international journals (2021-Present)
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                      style={{ backgroundColor: "#130078" }}
                    ></div>
                    <p className="text-sm leading-relaxed">
                      Patent holder for innovative water cleaning vessel and food collection device
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                      style={{ backgroundColor: "#130078" }}
                    ></div>
                    <p className="text-sm leading-relaxed">
                      26+ years as Structural and Geotechnical Engineer in private sector
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6" style={{ color: "#130078" }} />
                    Current Roles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                      style={{ backgroundColor: "#130078" }}
                    ></div>
                    <p className="text-sm leading-relaxed">Assistant Professor - Lebanese International University</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                      style={{ backgroundColor: "#130078" }}
                    ></div>
                    <p className="text-sm leading-relaxed">Section Editor - Region Water Conservancy (Singapore)</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                      style={{ backgroundColor: "#130078" }}
                    ></div>
                    <p className="text-sm leading-relaxed">Journal Reviewer - IWA Publishing (London)</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                      style={{ backgroundColor: "#130078" }}
                    ></div>
                    <p className="text-sm leading-relaxed">Author - The Nan Yang Academy of Sciences (Singapore)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="container px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              Consulting Services
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Expert Engineering Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive civil engineering consulting services backed by academic excellence, sustainability
              expertise, and 26+ years of professional experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="pb-6">
                <Building className="h-10 w-10 mb-4" style={{ color: "#130078" }} />
                <CardTitle className="text-xl">Structural Engineering</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Advanced structural analysis, design optimization, and seismic assessment for buildings and
                  infrastructure with PhD-level expertise.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="pb-6">
                <Wrench className="h-10 w-10 mb-4" style={{ color: "#130078" }} />
                <CardTitle className="text-xl">Geotechnical Engineering</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Soil analysis, foundation design, slope stability, and ground improvement solutions backed by
                  extensive research and publications.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="pb-6">
                <Shield className="h-10 w-10 mb-4" style={{ color: "#130078" }} />
                <CardTitle className="text-xl">Sustainability Consulting</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Environmental engineering solutions and sustainability assessments as certified SPSC Ambassador with
                  focus on water conservation and green building practices.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="pb-6">
                <Users className="h-10 w-10 mb-4" style={{ color: "#130078" }} />
                <CardTitle className="text-xl">Academic Consulting</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Research collaboration, peer review services, and academic consulting backed by editorial board
                  experience across 18+ international journals.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="pb-6">
                <BookOpen className="h-10 w-10 mb-4" style={{ color: "#130078" }} />
                <CardTitle className="text-xl">Innovation & Patents</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Patent development, innovative engineering solutions, and R&D consulting with proven track record of
                  successful patent registrations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="pb-6">
                <Award className="h-10 w-10 mb-4" style={{ color: "#130078" }} />
                <CardTitle className="text-xl">Expert Witness</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Professional testimony, forensic engineering analysis, and technical consultation for legal
                  proceedings backed by extensive academic credentials.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-32 bg-muted/20">
        <div className="container px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              Research & Publications
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Academic Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Extensive research portfolio with 35+ publications in international journals and conferences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl">Recent Publications</CardTitle>
                <CardDescription className="text-base">Latest research contributions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 pl-6 py-2" style={{ borderLeftColor: "#130078" }}>
                  <h4 className="font-semibold text-base leading-relaxed">
                    Experimental and analytical investigation for mechanical behaviour of vegetable fiber reinforced
                    concrete
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    European Journal of Environmental and Civil Engineering (2024)
                  </p>
                </div>
                <div className="border-l-4 pl-6 py-2" style={{ borderLeftColor: "#130078" }}>
                  <h4 className="font-semibold text-base leading-relaxed">
                    Effects of Electromagnetic Waves on Bees' Lives: Implications for SDG 15 and SDG 13
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">TIMES 2024 Conference, India</p>
                </div>
                <div className="border-l-4 pl-6 py-2" style={{ borderLeftColor: "#130078" }}>
                  <h4 className="font-semibold text-base leading-relaxed">
                    Behavior of monostrand anchors in unbonded post tension flat slab system
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">Heliyon Journal (2024)</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl">Patents & Innovations</CardTitle>
                <CardDescription className="text-base">Registered intellectual property</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 pl-6 py-2" style={{ borderLeftColor: "#130078" }}>
                  <h4 className="font-semibold text-base leading-relaxed">
                    Economic Vessel to Clean Polluted Water by Solid Waste
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">Patent registered 2023 (with Dr. Bassam Mahmoud)</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Innovative cost-effective solution for waterway cleaning
                  </p>
                </div>
                <div className="border-l-4 pl-6 py-2" style={{ borderLeftColor: "#130078" }}>
                  <h4 className="font-semibold text-base leading-relaxed">Food Particle Collection Device</h4>
                  <p className="text-sm text-muted-foreground mt-1">Patent registered 2025</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Device for collecting food particles and liquid spills from mouth
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="px-8 py-4 bg-transparent" asChild>
                <a
                  href="https://scholar.google.com/citations?user=rZQRkikAAAAJ&hl=fr&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Publications <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 bg-transparent" asChild>
                <a
                  href="https://drive.google.com/uc?export=download&id=1Bd3NJS9YYp3Zml_k9hHbSPYY_0_2hnWm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Complete CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Gallery Section */}
      <section className="py-32">
        <div className="container px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              Professional Gallery
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Speaking Engagements & Recognition</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Showcasing Dr. Khatib's active involvement in international conferences, academic recognition, and
              professional leadership in engineering innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/20 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/dr-khatib-panel.png"
                  alt="Dr. Khatib participating in LTC Engineering Group panel discussion"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Expert Panel Discussion</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Participating in professional engineering panel with LTC Engineering Group, sharing expertise on
                  structural and geotechnical engineering solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/20 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/dr-khatib-international.png"
                  alt="Dr. Khatib presenting to international audience with multilingual thank you slide"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">International Speaking</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Delivering presentations to diverse international audiences, demonstrating multilingual capabilities
                  and global engineering expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/20 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/dr-khatib-award-lcu.png"
                  alt="Dr. Khatib receiving academic recognition at Lebanese Canadian University"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Academic Recognition</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Receiving academic honors at Lebanese Canadian University, recognizing contributions to engineering
                  education and research excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/20 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/dr-khatib-ai-conference.png"
                  alt="Dr. Khatib presenting on AI applications in seismic mitigation at international conference"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">AI & Engineering Innovation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Presenting cutting-edge research on "Applications of AI in Seismic Mitigation of Structures" at
                  international engineering conference.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/20 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/dr-khatib-smart-award.png"
                  alt="Dr. Khatib receiving smart systems innovation award"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Smart Systems Recognition</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Receiving recognition for contributions to smart systems and innovative engineering solutions in
                  sustainable technology development.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/20 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/dr-khatib-group-award.png"
                  alt="Dr. Khatib with team receiving collaborative engineering achievement award"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Collaborative Excellence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leading collaborative engineering projects and receiving team recognition for innovative smart systems
                  and sustainable engineering solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-card rounded-xl border">
                <div className="text-3xl font-bold" style={{ color: "#130078" }}>
                  50+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Speaking Engagements</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border">
                <div className="text-3xl font-bold" style={{ color: "#130078" }}>
                  15+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Awards & Recognition</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border">
                <div className="text-3xl font-bold" style={{ color: "#130078" }}>
                  25+
                </div>
                <div className="text-sm text-muted-foreground mt-1">International Conferences</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border">
                <div className="text-3xl font-bold" style={{ color: "#130078" }}>
                  10+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Countries Presented</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-6 px-4 py-2">
                Get In Touch
              </Badge>
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contact Dr. Khatib for professional civil engineering consulting services.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                    <Mail className="h-6 w-6 flex-shrink-0" style={{ color: "#130078" }} />
                    <div>
                      <p className="font-medium text-base">Email</p>
                      <p className="text-sm text-muted-foreground">milad@miladkhatib.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                    <Phone className="h-6 w-6 flex-shrink-0" style={{ color: "#130078" }} />
                    <div>
                      <p className="font-medium text-base">Phone</p>
                      <p className="text-sm text-muted-foreground">+961 3 927 934</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                    <MapPin className="h-6 w-6 flex-shrink-0" style={{ color: "#130078" }} />
                    <div>
                      <p className="font-medium text-base">Location</p>
                      <p className="text-sm text-muted-foreground">Beirut, Lebanon</p>
                    </div>
                  </div>
                </div>
                <Separator className="my-8" />
                <div>
                  <h4 className="font-semibold text-lg mb-6">Professional Profiles</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" className="px-4 py-2 bg-transparent" asChild>
                      <a
                        href="https://www.linkedin.com/in/multidisciplinary-dr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn Profile
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="px-4 py-2 bg-transparent" asChild>
                      <a
                        href="https://www.linkedin.com/company/dr-milad-khatib"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Follow on LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="px-4 py-2 bg-transparent" asChild>
                      <a
                        href="https://spsc.org/verify/?mode=free&spsc_code=00014774"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SPSC Verification
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="px-4 py-2 bg-transparent" asChild>
                      <a
                        href="https://www.researchgate.net/profile/Milad-Khatib"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ResearchGate
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="px-4 py-2 bg-transparent" asChild>
                      <a
                        href="https://publons.com/researcher/3464477/milad-khatib/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Publons
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="px-4 py-2 bg-transparent" asChild>
                      <a
                        href="https://www.scopus.com/authid/detail.uri?authorId=57202890131"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Scopus
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <Card className="border-2">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl">Send a Message</CardTitle>
                  <CardDescription className="text-base">Get in touch for consulting opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    action="https://public.herotofu.com/v1/703e7260-7e8b-11f0-92ff-11e2bc736dd8"
                    method="post"
                    acceptCharset="UTF-8"
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium block mb-2">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium block mb-2">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="text-sm font-medium block mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="structural">Structural Engineering</option>
                        <option value="geotechnical">Geotechnical Engineering</option>
                        <option value="sustainability">Sustainability Consulting</option>
                        <option value="academic">Academic Consulting</option>
                        <option value="innovation">Innovation & Patents</option>
                        <option value="expert">Expert Witness</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium block mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                        placeholder="Describe your project or inquiry..."
                      ></textarea>
                    </div>
                    <Button type="submit" size="lg" className="w-full py-4 text-lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/20 py-16">
        <div className="container px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/images/logo.png" alt="Dr. Milad Khatib Logo" width={28} height={28} className="h-7 w-7" />
                <span className="font-bold text-xl">Dr. Milad Khatib</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional civil engineering consulting with academic excellence and innovative solutions.
              </p>
              <div className="pt-4">
                <Button variant="outline" size="sm" className="px-4 py-2 bg-transparent" asChild>
                  <a href="https://www.linkedin.com/company/dr-milad-khatib" target="_blank" rel="noopener noreferrer">
                    Follow Dr. Khatib on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Structural Engineering</li>
                <li>Geotechnical Engineering</li>
                <li>Sustainability Consulting</li>
                <li>Academic Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>milad@miladkhatib.com</p>
                <p>+961 3 927 934</p>
                <p>Beirut, Lebanon</p>
              </div>
            </div>
          </div>
          <Separator className="my-12" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 Dr. Milad Khatib. All rights reserved.</p>
            <p>ORCID: 0000-0002-0140-0941</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
