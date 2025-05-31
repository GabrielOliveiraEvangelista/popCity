import { DatePickerWithRange } from "./DatePickerWithRange";

export function Header() {
  return (
    <header className="px-6 py-4 flex items-center justify-between bg-bg-weak-50 w-full">
      <h1 className="text-[#7D7F82] font-medium text-base leading-[150%] tracking-[-1%]">
        Dashboard
      </h1>
      <DatePickerWithRange className="" />
    </header>
  );
}
