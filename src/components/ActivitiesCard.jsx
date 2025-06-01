import { Card, CardContent } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";

const activities = [
  {
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Phoenix Baker",
    time: "Just now",
    action: "Added a file to",
    target: "Marketing site redesign",
    unread: true,
    online: true,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Lana Steiner",
    time: "2 mins ago",
    action: "Invited Alisa Hester to the team",
    online: false,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    name: "Orlando Diggs",
    time: "2 mins ago",
    action: "Invited Alisa Hester to the team",
    online: true,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    name: "Candice Wu",
    time: "3 hours ago",
    action: "Commented in",
    target: "Marketing site redesign",
    comment: "Hey team great to get started on this!",
    online: true,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    name: "Candice Wu",
    time: "3 hours ago",
    action: "Was added to",
    target: "Marketing site redesign",
    online: true,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    name: "Orlando Diggs",
    time: "6 hours ago",
    action: "Added 3 labels to the project",
    target: "Marketing site redesign",
    online: true,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    name: "Orlando Diggs",
    time: "6 hours ago",
    action: "Invited Lana Steiner to the team",
    online: true,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Lana Steiner",
    time: "11 hours ago",
    action: "Created 7 tasks in",
    target: "Marketing site redesign",
    online: false,
  },
];

export function ActivitiesCard() {
  return (
    <Card className="w-full h-fit">
      <CardContent className="p-3">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-semibold text-text-soft-400 dark:text-gray-100">
            Activities
          </h2>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical size={16} />
          </button>
        </div>
        <ol className="relative mt-4 space-y-4 list-none p-0">
          {/* vertical timeline line */}
          <span
            className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700"
            aria-hidden="true"
          />

          {activities.map(
            (
              { avatar, name, time, action, target, comment, unread, online },
              idx
            ) => (
              <li key={idx} className="relative flex gap-4">
                {/* timeline node */}
                <span
                  className="absolute left-5 top-5 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"
                  aria-hidden="true"
                />

                {/* avatar + online status */}
                <div className="relative h-10 w-10">
                  <img
                    src={avatar}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span
                    className={
                      `absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-gray-900 ` +
                      (online ? "bg-green-400" : "bg-gray-300")
                    }
                    aria-label={online ? "online" : "offline"}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm text-bg-strong-950  dark:text-white">
                      {name}
                    </span>
                    <span className="text-xs text-text-soft-400">{time}</span>
                  </div>
                  <p className="text-sm text-text-soft-400 font-normal dark:text-gray-300">
                    {action}{" "}
                    {target && (
                      <span className="font-semibold text-bg-strong-950 dark:text-white">
                        {target}
                      </span>
                    )}
                  </p>
                  {comment && (
                    <p className="mt-2 text-sm italic text-gray-500">
                      “{comment}”
                    </p>
                  )}
                </div>

                {unread && (
                  <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                )}
              </li>
            )
          )}
        </ol>
      </CardContent>
    </Card>
  );
}
