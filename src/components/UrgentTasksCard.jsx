// src/components/UrgentTasksCard.jsx
import React, { useState, useMemo, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useUrgentTasks } from "../hooks/useUrgentTasks";
import TaskRow from "./TaskRow"; // import do componente memoizado

export function UrgentTasksCard() {
  const { data: tasks = [], isLoading, isError } = useUrgentTasks();

  // 1) estado para ordenação
  //    chave: "priority" | "type" | "title" | etc.
  //    dir: "asc" | "desc"
  const [sortKey, setSortKey] = useState("priority");
  const [sortDir, setSortDir] = useState("asc");

  // 2) memoiza array ordenado; só recalcula quando tasks, sortKey ou sortDir mudarem
  const sortedTasks = useMemo(() => {
    if (!tasks || tasks.length === 0) return [];

    // Faz uma cópia para não mutar o original
    const copy = [...tasks];
    copy.sort((a, b) => {
      const aVal = a[sortKey] ?? "";
      const bVal = b[sortKey] ?? "";

      // Comparação simples: string ou número
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDir === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDir === "asc" ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });
    return copy;
  }, [tasks, sortKey, sortDir]);

  // 3) handler de clique no header para trocar sortKey e invertar direção
  const handleSort = useCallback(
    (key) => {
      if (sortKey === key) {
        // mesma coluna: inverte direção
        setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
      } else {
        // muda para nova coluna, direção padrão "asc"
        setSortKey(key);
        setSortDir("asc");
      }
    },
    [sortKey]
  );

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
          <Table className="w-full table-fixed">
            <TableHeader>
              <TableRow>
                <TableHead
                  className="w-2/6 bg-gray-100 rounded-l-full py-2 px-4 text-left text-sm text-text-strong-950 font-normal cursor-pointer"
                  onClick={() => handleSort("title")}
                >
                  Task{" "}
                  {sortKey === "title" ? (sortDir === "asc" ? "↑" : "↓") : ""}
                </TableHead>
                <TableHead className="w-1/6 bg-gray-100 py-2 px-4 text-left text-sm text-text-strong-950 font-normal">
                  Assignee
                </TableHead>
                <TableHead
                  className="w-1/6 bg-gray-100 py-2 px-4 text-left text-sm text-text-strong-950 font-normal cursor-pointer"
                  onClick={() => handleSort("priority")}
                >
                  Priority{" "}
                  {sortKey === "priority"
                    ? sortDir === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </TableHead>
                <TableHead
                  className="w-1/6 bg-gray-100 py-2 px-4 text-left text-sm text-text-strong-950 font-normal cursor-pointer"
                  onClick={() => handleSort("type")}
                >
                  Type{" "}
                  {sortKey === "type" ? (sortDir === "asc" ? "↑" : "↓") : ""}
                </TableHead>
                <TableHead className="w-1/6 bg-gray-100 rounded-r-full py-2 px-4 text-left text-sm text-text-strong-950 font-normal">
                  Progress
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {sortedTasks.map((task) => (
                <TaskRow key={task.id} task={task} />
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
