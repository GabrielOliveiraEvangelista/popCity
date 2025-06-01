import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Maximize2, MoreHorizontal } from "lucide-react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function TimeTrackerCard() {
  const chartData = [
    { day: "Mon", fulltime: 2 },
    { day: "Tue", fulltime: 3 },
    { day: "Wed", fulltime: 5 },
    { day: "Thu", fulltime: 4 },
    { day: "Fri", fulltime: 1 },
    { day: "Sat", fulltime: 2 },
    { day: "Sun", fulltime: 0 },
  ];

  const chartConfig = {
    fulltime: {
      label: "Fulltime",
      color: "#fbbf24",
    },
  };

  const renderCustomBar = ({ x, y, width, height, payload, fill }) =>
    payload.day === "Sun" && payload.fulltime === 0 ? (
      <rect
        x={x}
        y={y - 20}
        width={width}
        height={20}
        fill="url(#stripePattern)"
        rx={4}
      />
    ) : (
      <rect x={x} y={y} width={width} height={height} fill={fill} rx={4} />
    );

  return (
    <Card className="w-full h-fit">
      <CardHeader className="text-text-soft-400 font-medium flex justify-between items-center pb-2">
        <CardTitle>Time Tracker</CardTitle>
        <Button
          variant="ghost"
          className="flex items-center space-x-2 p-2 rounded-lg"
        >
          <Maximize2 size={16} />
          <MoreHorizontal size={16} />
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        <Tabs defaultValue="summary">
          <TabsList className="w-full">
            <TabsTrigger value="summary" className="flex-1">
              Summary
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex-1 text-text-soft-400">
              Projects
            </TabsTrigger>
            <TabsTrigger value="tasks" className="flex-1 text-text-soft-400">
              Tasks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="summary">
            <div className="h-70 flex pt-7">
              <div className="flex-1 min-w-0 overflow-hidden">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ left: 12, right: 12 }}>
                      <defs>
                        <pattern
                          id="stripePattern"
                          width="4"
                          height="4"
                          patternUnits="userSpaceOnUse"
                          patternTransform="rotate(45)"
                        >
                          <rect width="0.5" height="4" fill="#99A0AE" />
                        </pattern>
                      </defs>

                      <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        style={{ fontSize: 12, fill: "#6B7280" }}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar
                        dataKey="fulltime"
                        fill="var(--color-fulltime)"
                        radius={4}
                        shape={renderCustomBar}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              <div className="w-12 flex flex-col justify-between items-center pr-2">
                <span className="text-xs text-text-soft-400">10h</span>
                <span className="text-xs text-text-soft-400">8h</span>
                <span className="text-xs text-text-soft-400">4h</span>
                <span className="text-xs text-text-soft-400">2h</span>
                <span className="text-xs text-text-soft-400">0</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              Gráfico de Projetos
            </div>
          </TabsContent>

          <TabsContent value="tasks">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              Gráfico de Tarefas
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex items-center justify-between pt-15">
          <div className="flex flex-col">
            <span className="text-sm text-text-soft-400 font-medium">
              Total hours
            </span>
            <div className="flex items-baseline space-x-1">
              <span className="text-3xl font-bold text-gray-900">
                53<span className="text-[22px] text-text-soft-400">h</span>
              </span>
              <span className="text-3xl font-bold text-gray-400">
                28<span className="text-[22px] text-text-soft-400">m</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="flex items-center">
              <span className="block w-3 h-3 rounded-full bg-yellow-400" />
              <span className="ml-2 mr-12 text-sm text-gray-600">Fulltime</span>
              <div className="flex-1" />
              <div className="flex items-baseline space-x-1">
                <span className="text-base font-semibold mr-5 text-gray-900">
                  h
                </span>
                <span className="text-base font-semibold text-gray-900">m</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="block w-3 h-3 rounded-full bg-black" />
              <span className="ml-2 text-sm text-gray-600">Parttime</span>
              <div className="flex-1" />
              <div className="flex items-baseline space-x-1">
                <span className="text-base font-semibold mr-5 text-gray-900">
                  h
                </span>
                <span className="text-base font-semibold text-gray-900">m</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
