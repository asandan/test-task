import { useState } from "react";
import "./styles/App.scss";
import { CourseScheduleModal } from "./components/Modals/CourseScheduleModal/CourseScheduleModal";
import { Button } from "./components/Button/Button";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <div className="app">
      <Button onClick={toggleModal}>Открыть модальное окно</Button>
      <CourseScheduleModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}

export default App;
