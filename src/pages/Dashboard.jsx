
import { TimeTrackerCard } from "@/components/TimeTrackerCard";
import { ProductivityCard } from "@/components/ProductivityCard";
import { CompletedTaskCard } from "../components/CompletedTaskCard";
import { ActivitiesCard } from "../components/ActivitiesCard";
import { UrgentTasksCard } from "../components/UrgentTasksCard";

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4 h-fit xl:grid xl:grid-cols-12 xl:auto-rows-min xl:gap-4">
      <div className="w-full xl:col-start-1 xl:col-span-6 xl:row-start-1">
        <TimeTrackerCard />
      </div>

      <div className="w-full xl:col-start-7 xl:col-span-3 xl:row-start-1 flex flex-col gap-4">
        <ProductivityCard />
        <div className="h-full flex items-center justify-center text-gray-700 font-semibold">
          <CompletedTaskCard />
        </div>
      </div>

      <div className="w-full  h-auto flex justify-center text-gray-700 font-semibold xl:col-start-10 xl:col-span-3 xl:row-start-1 xl:row-span-2 xl:h-fit">
        <ActivitiesCard />
      </div>

      <div className="w-full h-fit flex items-center justify-center text-gray-700 font-semibold xl:col-start-1 xl:col-span-9 xl:row-start-2">
        <UrgentTasksCard />
      </div>
    </div>
  );
}
