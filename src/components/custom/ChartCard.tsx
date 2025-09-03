import type { ReactElement } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer } from "recharts";

interface ChartCardProps {
  title: string;
  children: ReactElement;
}

export function ChartCard({ title, children }: ChartCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          {children}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
