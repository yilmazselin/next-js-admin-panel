import { Button, Modal } from "flowbite-react";

const ConfirmModal = ({ onConfirm, isVisible, setConfirmModalVisible }) => {
  return (
    <Modal
      show={isVisible}
      size="md"
      popup={true}
      onClose={() => setConfirmModalVisible(false)}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={onConfirm}>
              Yes, I'm sure
            </Button>
            <Button color="gray" onClick={() => setConfirmModalVisible(false)}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmModal;
