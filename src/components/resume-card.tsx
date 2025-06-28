"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer group"
      target="_blank"
      // onClick={handleClick}
    >
      <Card className="flex p-6 border-0 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex-none">
          <Avatar className="border-2 border-white/20 shadow-lg size-16 bg-gradient-to-br from-blue-500 to-purple-500">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain p-2"
            />
            <AvatarFallback className="text-white font-bold text-lg">
              {altText[0]}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-grow ml-6 flex flex-col justify-center">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-x-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-sm font-medium text-muted-foreground">
                    {subtitle}
                  </p>
                )}
              </div>

              <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
                <Calendar className="mr-2 h-4 w-4" />
                {period}
              </div>
            </div>

            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    {badge}
                  </Badge>
                ))}
              </div>
            )}

            {description && (
              <motion.div
                className="text-sm text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}>
                {description}
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex-none ml-4 flex items-center">
          <ChevronRightIcon
            className={cn(
              "size-5 text-muted-foreground transform transition-all duration-300 ease-out",
              "group-hover:translate-x-1 group-hover:text-blue-500",
              isExpanded ? "rotate-90" : "rotate-0"
            )}
          />
        </div>
      </Card>
    </Link>
  );
};
