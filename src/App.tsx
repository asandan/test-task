import { Modal } from "./components/Modal/Modal";
import { useState } from "react";
import "./styles/App.scss";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="app">
      <Modal isOpen={true} onClose={() => {}}>
        <div>Hello</div>
      </Modal>
    </div>
  );
}

export default App;
