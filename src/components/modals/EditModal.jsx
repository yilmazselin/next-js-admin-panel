import { Button, Modal } from "flowbite-react";

const EditModal = ({ onConfirm, isVisible, setModalVisible }) => {
  return (
    <Modal
      show={isVisible}
      size="md"
      popup={true}
      onClose={() => setModalVisible(false)}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Edit Modal
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={onConfirm}>
              Yes, I'm sure
            </Button>
            <Button color="gray" onClick={() => setModalVisible(false)}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
