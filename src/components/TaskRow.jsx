// src/components/TaskRow.jsx
import React, { useMemo, useCallback } from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { GripVertical } from "lucide-react";

// Essas funções não precisam ser recriadas a cada render do pai.
// Mantê-las fora do componente garante que elas tenham referência estável.
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

function TaskRow({ task }) {
  // memoiza a classe de estilo de prioridade, só recalcula se mudar `task.priority`
  const priorityClass = useMemo(
    () => getPriorityStyles(task.priority),
    [task.priority]
  );

  // memoiza a classe de estilo de tipo
  const typeClass = useMemo(() => getTypeStyles(task.type), [task.type]);

  // exemplo de callback estável para clique na linha (ou outro handler)
  const onRowClick = useCallback(() => {
    console.log("Clicou na tarefa", task.id);
  }, [task.id]);

  return (
    <TableRow className="hover:bg-gray-50 cursor-pointer" onClick={onRowClick}>
      {/* 1. Coluna de título da tarefa */}
      <TableCell className="flex items-center space-x-2 py-3 px-4">
        <GripVertical size={16} className="text-gray-400 flex-shrink-0" />
        <span className="text-sm font-medium text-gray-900">{task.title}</span>
      </TableCell>

      {/* 2. Coluna de assignees */}
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
            ${priorityClass}
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
            ${typeClass}
          `}
        >
          {task.type}
        </span>
      </TableCell>

      {/* 5. Coluna de progresso */}
      <TableCell className="py-3 px-4">
        <div className="flex items-center space-x-2">
          <Progress className="h-2 flex-1 bg-gray-100" value={task.progress} />
          <span className="text-xs text-[#7A8089] font-normal">
            {task.progress}%
          </span>
        </div>
      </TableCell>
    </TableRow>
  );
}

// React.memo só vai re-renderizar se `task` (shallow) mudar
export default React.memo(TaskRow);
