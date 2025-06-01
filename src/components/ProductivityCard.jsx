
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

export function ProductivityCard() {
  // Valor de exemplo: 78.19% => 0.7819, com o restante para completar 100%
  const percentage = 78.19;
  const chartData = [
    { name: "Completed", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  // Cores:
  // - completed slice: tom pastel (por exemplo cyan claro)
  // - remaining slice: cinza claro
  const COLORS = ["#8EE4D0", "#E5E7EB"];

  return (
    <Card className="w-full h-fit">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-text-soft-400 font-medium">
          Productivity
        </CardTitle>
        <Button variant="ghost" size="icon">
          <MoreHorizontal size={16} />
        </Button>
      </CardHeader>

      <CardContent className="flex items-center justify-between space-x-4">
        {/* Lado esquerdo: texto de percentual e descrições */}
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-gray-900">78.19%</span>
          <span className="text-xs font-normal text-text-soft-400">
            Workload KPI
          </span>
          <span className="mt-3 text-xs font-normal text-text-soft-400">
            Compare
          </span>
          <div className="flex items-center mt-1">
            <span className="ml-1 text-sm text-yellow-500 font-semibold">
              - 1.25%
            </span>
            <span className="ml-1 font-bold text-sm text-black">
              vs Last month
            </span>
          </div>
        </div>

        {/* Lado direito: gráfico donut (80×80 pixels) */}
        <div className="w-20 h-20">
          <ChartContainer config={{}} className="h-full w-full">
            <PieChart width={80} height={80}>
              <Pie
                data={chartData}
                innerRadius="70%"
                outerRadius="100%"
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                paddingAngle={2}
                cornerRadius={8}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`slice-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
