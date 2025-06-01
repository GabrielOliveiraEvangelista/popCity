
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function CompletedTaskCard() {
  const chartData = [
    { day: "Mon", value: 50 },
    { day: "Tue", value: 70 },
    { day: "Wed", value: 65 },
    { day: "Thu", value: 85 },
    { day: "Fri", value: 95 },
    { day: "Sat", value: 110 },
    { day: "Sun", value: 120 },
  ];

  return (
    <Card className="w-full h-fit">
      <CardHeader className="flex justify-between items-center text-text-soft-400">
        <CardTitle>Completed Task</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <MoreHorizontal size={16} />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex justify-between items-baseline space-x-2">
          <div>
            <span className="text-3xl font-bold text-gray-900">310</span>
            <div>
              <span className="text-sm text-gray-500">Total Tasks</span>
              <span className="ml-2 text-sm text-yellow-500 font-semibold">
                +1.25%
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="text-yellow-400 bg-bg-sub-150"
            size="sm"
          >
            View all
          </Button>
        </div>

        <div className="h-45">
          <ChartContainer config={{}} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  style={{ fontSize: 12, fill: "#99A0AE" }}
                />
                <YAxis hide domain={[0, 150]} allowDataOverflow={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#FBBF24"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#FBBF24" }}
                  activeDot={{ r: 6, fill: "#FBBF24" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
