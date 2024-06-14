import Popup from "reactjs-popup";
import "./styles/myPopUp.css";
import Icon from "./Icon";
import { useState } from "react";
import MyPopupHeader from "./components/MyPopup/MyPopupHeader";
import MyPopupContent from "./components/MyPopup/MyPopupContent";
import MyPopupActions from "./components/MyPopup/MyPopupActions";
import { axiosAuth } from "../../layouts/admin/AdminLayout";
import { toHeader } from "../utils/utils";

export default function MyPopup({ resourceName, id }) {
  const [resource, setResource] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const fetchResource = () => {
    axiosAuth.get(`${resourceName.toLowerCase()}/${id}`)
      .then(r => {
        
        setResource(r.data.data);
        console.log(r.data);
        setIsOpen(true); 
      })
      .catch(err => {
        console.error(err);
      });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={fetchResource} className="button">
        <Icon label={"visibility"} />
      </button>
      <Popup
        open={isOpen}
        onClose={closeModal}
        modal
        nested
      >
        {(close) => (
          <div className="popup">
            <button className="close" onClick={close}>
              &times;
            </button>
            <MyPopupHeader title={resourceName} />
            <MyPopupContent 
              toHeader={toHeader}
              content={resource}
            />
            <MyPopupActions
              toHeader={toHeader}
              actions={[
                { action: 'edit', bgColor: 'green', txtColor: 'white', icon: 'edit' },
                { action: 'save', bgColor: 'green', txtColor: 'white', icon: 'save' }
              ]}
            />
          </div>
        )}
      </Popup>
    </>
  );
}

