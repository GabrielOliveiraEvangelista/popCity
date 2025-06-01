
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GripVertical, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useUrgentTasks } from "../hooks/useUrgentTasks";

export function UrgentTasksCard() {
  const { data: tasks, isLoading, isError } = useUrgentTasks();

  const getPriorityStyles = (priority) => {
    if (priority === "High") return "bg-alpha-red-10 text-red-300";
    if (priority === "Medium") return "bg-alpha-yellow-10 text-yellow-400";
    return "bg-gray-100 text-gray-600";
  };

  const getTypeStyles = (type) => {
    if (type === "Wireframe") return "bg-alpha-sky-10 text-sky-500";
    if (type === "Graphics") return "bg-alpha-orange-10 text-orange-400";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <Card className="w-full h-fit p-4">
      <CardHeader className="text-text-soft-400 flex justify-between items-center pb-2">
        <CardTitle>Urgent Tasks</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-1"
        >
          <span className="text-text-soft-400 font-normal">See more</span>
          <ChevronRight size={16} />
        </Button>
      </CardHeader>

      <CardContent className="p-0">
        {isLoading && (
          <div className="p-4 text-center text-gray-500">
            Carregando tarefas...
          </div>
        )}

        {isError && (
          <div className="p-4 text-center text-red-500">
            Erro ao carregar tarefas.
          </div>
        )}

        {!isLoading && !isError && (
          <Table className="w-full table-fixed ">
            <TableHeader>
              <TableRow>
                <TableHead className="w-2/6 bg-gray-100 rounded-l-full py-2 px-4 text-left text-sm text-text-strong-950 font-normal">
                  Task
                </TableHead>
                <TableHead className="w-1/6 bg-gray-100 py-2 px-4 text-left text-sm text-text-strong-950 font-normal">
                  Assignee
                </TableHead>
                <TableHead className="w-1/6 bg-gray-100 py-2 px-4 text-left text-sm text-text-strong-950 font-normal">
                  Priority
                </TableHead>
                <TableHead className="w-1/6 bg-gray-100 py-2 px-4 text-left text-sm text-text-strong-950 font-normal">
                  Type
                </TableHead>
                <TableHead className="w-1/6 bg-gray-100 rounded-r-full py-2 px-4 text-left text-sm text-text-strong-950 font-normal">
                  Progress
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id} className="hover:bg-gray-50">
                  {/* 1. Coluna de título da tarefa */}
                  <TableCell className="flex items-center space-x-2 py-3 px-4">
                    <GripVertical
                      size={16}
                      className="text-gray-400 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {task.title}
                    </span>
                  </TableCell>

                  {/* 2. Coluna de assignees (expect que o JSON tenha um array de assignees) */}
                  <TableCell className="py-3 px-4">
                    <div className="flex -space-x-3">
                      {task.assignees.map((user, idx) => (
                        <Avatar
                          key={idx}
                          className="h-6 w-6 border-2 border-white flex-shrink-0"
                        >
                          {user.avatarUrl ? (
                            <AvatarImage src={user.avatarUrl} alt={user.name} />
                          ) : (
                            <AvatarFallback className="text-xs font-medium">
                              {user.name
                                .split(" ")
                                .map((w) => w[0])
                                .join("")
                                .toUpperCase()}
                            </AvatarFallback>
                          )}
                        </Avatar>
                      ))}
                    </div>
                  </TableCell>

                  {/* 3. Coluna de prioridade */}
                  <TableCell className="py-3 px-4">
                    <span
                      className={`
                        inline-block px-2 py-1 rounded-full text-xs font-medium 
                        ${getPriorityStyles(task.priority)}
                      `}
                    >
                      {task.priority}
                    </span>
                  </TableCell>

                  {/* 4. Coluna de type */}
                  <TableCell className="py-3 px-4">
                    <span
                      className={`
                        inline-block px-2 py-1 rounded-full text-xs font-medium 
                        ${getTypeStyles(task.type)}
                      `}
                    >
                      {task.type}
                    </span>
                  </TableCell>

                  {/* 5. Coluna de progresso */}
                  <TableCell className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <Progress
                        className="h-2 flex-1 bg-gray-100"
                        value={task.progress}
                      />
                      <span className="text-xs text-[#7A8089] font-normal">
                        {task.progress}%
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
