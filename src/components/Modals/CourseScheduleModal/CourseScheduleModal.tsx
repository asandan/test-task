import { FC, PropsWithChildren } from "react";
import { Counter } from "../../Counter/Counter";
import { DaySelector } from "../../DaySelector/DaySelector";
import { TimeRange } from "../../TimeRange/TimeRange";
import { useCourseSchedule } from "../../../hooks/useCourseSchedule";
import {
  BREAK_TIME_OPTIONS,
  HOURS_TYPE_OPTIONS,
  ROOMS,
  TEACHERS,
  COLORS,
} from "../../../constants/course-schedule";
import { Alert } from "../../Alert/Alert";
import { ModalHeader } from "../Modal/ModalHead";
import { ModalFooter } from "../Modal/ModalFooter";
import { Modal } from "../Modal";
import { ModalBody } from "../Modal/ModalBody";
import { Input, InputPicker } from "rsuite";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CourseScheduleModal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  onClose,
}) => {
  const { counters, selects, dates, calculatedData, handleChange } =
    useCourseSchedule();

  const { breakTime, hourType, color, teacher, room } = selects;

  const { hoursPerDay, totalHours, setHoursPerDay, setTotalHours } = counters;

  const {
    dateFrom,
    timeFrom,
    selectedDays,
    setSelectedDays,
    setDateFrom,
    setTimeFrom,
  } = dates;

  const { dateTo, timeTo } = calculatedData;

  const handleSubmit = () => {
    console.table({
      hourType,
      color,
      dateFrom,
      dateTo,
      selectedDays,
      totalHours,
      breakTime,
      hoursPerDay,
      timeFrom,
      timeTo,
    });
  };

  return (
    <>
      {isOpen && (
        <Modal>
          <ModalHeader title="Редактирование расписания" onClose={onClose} />
          <ModalBody>
            <div className="modal-body">
              <div className="modal-body-row">
                <Input
                  size="lg"
                  disabled
                  value={'Школа "Мамыр"'}
                  style={{ width: "auto" }}
                />
                <InputPicker
                  size="lg"
                  placeholder="Цвет группы"
                  data={COLORS}
                  value={color}
                  cleanable={true}
                  onChange={handleChange("color")}
                />
              </div>
              <div className="modal-body-row">
                <InputPicker
                  size="lg"
                  placeholder="Вид часов"
                  data={HOURS_TYPE_OPTIONS}
                  value={hourType}
                  cleanable={false}
                  onChange={handleChange("hourType")}
                />
                <Counter
                  value={totalHours}
                  setValue={setTotalHours}
                  label={"Всего часов"}
                />
                <TimeRange
                  variant={"date"}
                  from={dateFrom}
                  to={dateTo}
                  setFrom={setDateFrom as any}
                />
              </div>
              <DaySelector
                selectedDays={selectedDays}
                setSelectedDays={setSelectedDays}
              />
              <div className="modal-body-row">
                <InputPicker
                  size="lg"
                  placeholder="Без перерыва"
                  data={BREAK_TIME_OPTIONS}
                  value={breakTime}
                  onChange={handleChange("breakTime")}
                />
                <Counter
                  value={hoursPerDay}
                  setValue={setHoursPerDay}
                  step={1}
                  label={"Часов в день"}
                />
                <TimeRange
                  variant={"time"}
                  from={timeFrom}
                  to={timeTo}
                  setFrom={setTimeFrom as any}
                />
              </div>
              <div className="modal-body-row optional">
                <InputPicker
                  size="lg"
                  placeholder="Выберите преподавателя на это время"
                  className="choose-teacher"
                  data={TEACHERS}
                  value={teacher}
                  onChange={handleChange("teacher")}
                />
                <InputPicker
                  size="lg"
                  placeholder="Аудитория"
                  data={ROOMS}
                  value={room}
                  onChange={handleChange("room")}
                />
              </div>
              <Alert type="fail">
                <span style={{ paddingLeft: "10px" }}>
                  Выбор&nbsp;<b>преподавателя</b>&nbsp;и&nbsp;<b>аудитории</b>
                  &nbsp;не обязателен.
                </span>
              </Alert>
            </div>
          </ModalBody>
          <ModalFooter handleSubmit={handleSubmit} handleCancel={onClose} />
        </Modal>
      )}{" "}
    </>
  );
};
