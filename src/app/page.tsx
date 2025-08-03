import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      {/* Hero Section with Gradient Background */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-16 sm:py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <div className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur-sm px-4 py-2 text-sm font-medium">
                    <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available for new opportunities
                  </div>
                </BlurFade>

                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-purple-200 leading-tight"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />

                <BlurFadeText
                  className="text-lg sm:text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0 leading-relaxed"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>

              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8 py-3">
                    <Link href={DATA.contact.social.resume.url}>
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 hover:bg-background/50 backdrop-blur-sm text-base px-8 py-3">
                    <Link
                      href={`https://wa.me/919723248182?text=Hi, I'd like to connect with you!`}
                      target="_blank">
                      Get in Touch
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </BlurFade>
            </div>

            <BlurFade
              delay={BLUR_FADE_DELAY * 3}
              className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <Avatar className="size-32 sm:size-40 lg:size-48 border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                    {DATA.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Skills & Technologies
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
                I specialize in modern web technologies and frameworks that
                enable me to build exceptional digital experiences.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4">
              {DATA.skills.map((skill, id) => (
                <Card
                  key={skill}
                  className="group transition-all duration-300 border-0  dark:from-gray-800 dark:to-gray-700">
                  <CardContent className="p-3 sm:p-4 text-center">
                    <Badge className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 transition-transform duration-300 whitespace-nowrap">
                      {skill}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                About Me
              </h2>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <Markdown className="prose prose-sm sm:prose-base max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert leading-relaxed">
                  {DATA.summary}
                </Markdown>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Work Experience
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
                My professional journey in creating impactful digital solutions.
              </p>
            </div>
          </BlurFade>

          <div className="space-y-6 sm:space-y-8">
            {DATA.work.map((work: any, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 9 + id * 0.1}>
                <Card className="border-0 transition-all duration-300 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700">
                  <CardContent className="p-4 sm:p-6">
                    <ResumeCard
                      logoUrl={work.logoUrl}
                      altText={work.company}
                      title={work.company}
                      subtitle={work.title}
                      href={work.href}
                      badges={work.badges}
                      period={`${work.start} - ${work.end ?? "Present"}`}
                      description={work.description}
                    />
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur-sm px-4 py-2 text-sm font-medium mb-6">
                Featured Work
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
                I&apos;ve worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {DATA.projects.map((project: any, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 11 + id * 0.1}>
                <Card className="group border-0 transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Education
              </h2>
            </div>
          </BlurFade>

          <div className="flex flex-col gap-4 sm:gap-6">
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 13 + id * 0.1}>
                <Card className="border-0 w-full transition-all duration-300 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700">
                  <CardContent className="p-3 sm:p-5">
                    <ResumeCard
                      href={education.href}
                      logoUrl={education.logoUrl}
                      altText={education.school}
                      title={education.school}
                      subtitle={education.degree}
                      period={`${education.start} - ${education.end}`}
                    />
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-[70px] sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                  Want to chat? Just shoot me a message{" "}
                  <Link
                    href={`https://wa.me/919723248182?text=Hi, I'd like to connect with you!`}
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 underline decoration-2 underline-offset-4 transition-colors">
                    on WhatsApp
                  </Link>{" "}
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-sm sm:text-base px-4 sm:px-6 py-3">
                  <Link href={`mailto:${DATA.contact.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-sm sm:text-base px-4 sm:px-6 py-3">
                  <Link href={DATA.contact.social.whatsapp.url}>
                    <Phone className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-sm sm:text-base px-4 sm:px-6 py-3">
                  <Link href={DATA.contact.social.LinkedIn.url}>LinkedIn</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-sm sm:text-base px-4 sm:px-6 py-3">
                  <Link href={DATA.contact.social.GitHub.url}>GitHub</Link>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
