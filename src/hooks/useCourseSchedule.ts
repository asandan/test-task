import { useMemo, useState } from "react";
import { Option } from "@/types";
import { BreakTime, HoursType, WeekDays } from "@/types/course-schedule";
import dayjs from "dayjs";

const DEFAULT_TIME_FROM = new Date(new Date().setHours(7, 0));

export const useCourseSchedule = () => {
  const [hourType, setHourType] = useState<HoursType>("45")
  const [breakTime, setBreakTime] = useState<BreakTime>();
  const [teacher, setTeacher] = useState<Option>();
  const [room, setRoom] = useState<Option>();
  const [color, setColor] = useState<string>();

  const [selectedDays, setSelectedDays] = useState<WeekDays[]>(["ПН", "СР", "ПТ"]);

  const [totalHours, setTotalHours] = useState<number>(3);
  const [hoursPerDay, setHoursPerDay] = useState<number>(1);

  const [dateFrom, setDateFrom] = useState<Date>(new Date());
  const [timeFrom, setTimeFrom] = useState<Date>(DEFAULT_TIME_FROM);

  const setStates = {
    hourType: setHourType,
    breakTime: setBreakTime,
    teacher: setTeacher,
    room: setRoom,
    color: setColor,
  }

  const handleChange = (state: keyof typeof setStates) => {
    const setState = setStates[state];

    return (v: any) => {
      setState(v);
    }
  }

  const calculatedData = useMemo(() => {
    const totalBreakTime = breakTime ? (hoursPerDay * +breakTime) : 0;
    const totalMinutesPerDay = (hoursPerDay * +hourType) + totalBreakTime;

    const daysToCompleteCourse = totalHours / hoursPerDay;

    const timeTo = dayjs(timeFrom).add(totalMinutesPerDay, "minute").toDate();
    const dateTo = dayjs(dateFrom).add(daysToCompleteCourse - 1, "day").toDate();

    return {
      timeTo,
      dateTo,
    }
  }, [breakTime, dateFrom, hourType, hoursPerDay, timeFrom, totalHours])

  return {
    counters: {
      totalHours,
      hoursPerDay,
      setTotalHours,
      setHoursPerDay,
    },
    selects: {
      hourType,
      breakTime,
      teacher,
      room,
      color,
    },
    dates: {
      dateFrom,
      selectedDays,
      timeFrom,
      setSelectedDays,
      setDateFrom,
      setTimeFrom
    },
    calculatedData,
    handleChange,
  }
}