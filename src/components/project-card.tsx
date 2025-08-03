import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
        "hover:shadow-2xl transition-all duration-500 ease-out h-full",
        "transform hover:-translate-y-2",
        className
      )}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500"></div>

      <Link
        href={href || "#"}
        className={cn("block cursor-pointer relative z-10", className)}>
        <div className="relative overflow-hidden">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover object-top"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="w-full h-48 object-cover object-top"
            />
          )}
        </div>
      </Link>

      <CardHeader className="px-6 pt-6 pb-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {title}
            </CardTitle>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            {dates}
          </div>

          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>

          <div className="prose prose-sm max-w-full text-pretty font-sans text-sm  dark:prose-invert leading-relaxed">
            {description}
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-4 flex-1">
        {tags && tags.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center text-sm font-medium text-muted-foreground">
              <Tag className="mr-2 h-4 w-4" />
              Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <Badge
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="px-6 pb-6">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-center gap-2 w-full">
            {links?.map((link, idx) => (
              <Button
                key={idx}
                asChild
                size="sm"
                variant="outline"
                className="text-xs border-2 hover:bg-background/50 backdrop-blur-sm transition-all duration-300">
                <Link href={link?.href} target="_blank">
                  {link.icon}
                  <span className="ml-2">{link.type}</span>
                </Link>
              </Button>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
