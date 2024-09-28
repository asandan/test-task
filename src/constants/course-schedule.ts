import { WeekDaysGroups } from "@/types/course-schedule";

export const DAYS_OF_WEEK: WeekDaysGroups[] = [
  "ПН/СР/ПТ",
  "ВТ/ЧТ",
  "ПН",
  "ВТ",
  "СР",
  "ЧТ",
  "ПТ",
  "СБ",
  "ВС",
];

export const HOURS_TYPE_OPTIONS = [
  {
    label: "Академические",
    value: "45",
  },
  {
    label: "Астрономические",
    value: "60",
  },
];

export const BREAK_TIME_OPTIONS = [
  {
    label: '0 мин',
    value: "0"
  },
  {
    label: '5 мин',
    value: "5"
  },
  {
    label: '10 мин',
    value: "10"
  },
  {
    label: '15 мин',
    value: "15"
  },
  {
    label: '20 мин',
    value: "20"
  },
  {
    label: '30 мин',
    value: "30"
  },
]

export const TEACHERS = [
  {
    label: "John Doe",
    value: "john-doe"
  },
  {
    label: "Alice Smith",
    value: "alice-smith"
  },
  {
    label: "Jane Doe",
    value: "jane-doe"
  },
]

export const ROOMS = [
  {
    label: "301",
    value: "301"
  },
  {
    label: "302",
    value: "302"
  },
  {
    label: "303",
    value: "303"
  },
  {
    label: "304",
    value: "304"
  },
]

export const COLORS = [
  {
    label: "Красный",
    value: "red",
  },
  {
    label: "Зеленый",
    value: "green",
  },
  {
    label: "Синий",
    value: "blue",
  },
]