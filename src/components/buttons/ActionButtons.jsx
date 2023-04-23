import { Button } from "flowbite-react";
import React, { useState } from "react";
import ConfirmModal from "../modals/ConfirmModal";
import EditModal from "../modals/EditModal";

const ActionButtons = ({ actions, data }) => {
  const [modalVisible, setmodalVisible] = useState(false);

  const handleClickAction = (action) => {
    setmodalVisible(action.name);
  };

  return (
    <>
      <div className="flex">
        {actions.map((action, i) => (
          <div className="mx-2" key={i}>
            <Button
              size={action.size}
              color={action.color}
              onClick={() => handleClickAction(action)}
            >
              {action.name}
            </Button>
          </div>
        ))}
      </div>
      {modalVisible === "Edit" && (
        <EditModal
          isVisible={true}
          setModalVisible={setmodalVisible}
          onConfirm={actions.find((action) => action.name === "Edit").click}
        />
      )}
      {modalVisible === "Delete" && (
        <ConfirmModal
          isVisible={true}
          setModalVisible={setmodalVisible}
          onConfirm={actions.find((action) => action.name === "Delete").click}
        />
      )}
    </>
  );
};

export default ActionButtons;
