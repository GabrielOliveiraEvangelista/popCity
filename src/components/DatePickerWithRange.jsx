"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import CalendarIcon from "../assets/calendar.svg";
// import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({ className }) {
  const today = new Date();
  const [date, setDate] = React.useState({
    from: today,
    to: today,
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "text-text-soft-400 shadow-none border-none justify-start text-left font-normal bg-bg-sub-150 px-4 py-3",
              !date && "text-muted-foreground"
            )}
          >
            <img src={CalendarIcon} alt="Calendario" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 mt-3" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={today}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
