"use client";

import Link from "next/link";
import {
  Users,
  Target,
  Heart,
  Shield,
  Truck,
  Lightbulb,
  ShoppingBag,
  Package,
  TrendingUp,
  Headphones,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "@/lib/useTranslations";

export default function AboutPage() {
  const t = useTranslations();

  const values = [
    {
      icon: Heart,
      title: t.about.value1Title,
      description: t.about.value1Description,
      color: "text-red-500",
      bg: "bg-red-100 dark:bg-red-900/30",
    },
    {
      icon: Shield,
      title: t.about.value2Title,
      description: t.about.value2Description,
      color: "text-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: Truck,
      title: t.about.value3Title,
      description: t.about.value3Description,
      color: "text-green-500",
      bg: "bg-green-100 dark:bg-green-900/30",
    },
    {
      icon: Lightbulb,
      title: t.about.value4Title,
      description: t.about.value4Description,
      color: "text-yellow-500",
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
    },
  ];

  const stats = [
    { icon: Package, value: t.about.stat1Value, label: t.about.stat1Label },
    { icon: Users, value: t.about.stat2Value, label: t.about.stat2Label },
    {
      icon: TrendingUp,
      value: t.about.stat3Value,
      label: t.about.stat3Label,
    },
    {
      icon: Headphones,
      value: t.about.stat4Value,
      label: t.about.stat4Label,
    },
  ];

  const team = [
    {
      name: t.about.team1Name,
      role: t.about.team1Role,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: t.about.team2Name,
      role: t.about.team2Role,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: t.about.team3Name,
      role: t.about.team3Role,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: t.about.team4Name,
      role: t.about.team4Role,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <ShoppingBag className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">{t.about.pageTitle}</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.about.pageDescription}
        </p>
      </div>

      {/* Our Story */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {t.about.storyTitle}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t.about.storyP1}</p>
            <p>{t.about.storyP2}</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mb-16">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12 text-center">
            <Target className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-4">{t.about.missionTitle}</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {t.about.missionDescription}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          {t.about.valuesTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-full ${value.bg} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`h-7 w-7 ${value.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          {t.about.statsTitle}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">{t.about.teamTitle}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.about.teamDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="text-center overflow-hidden">
              <div className="aspect-square relative bg-muted">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Card className="bg-muted">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-3">{t.about.ctaTitle}</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {t.about.ctaDescription}
            </p>
            <Link href="/products">
              <Button size="lg">
                {t.about.ctaButton}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
