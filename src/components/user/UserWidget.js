import { useState } from "react";
import { useUserAuth } from "../../context/userAuthContext";
import UserAuth from "./UserAuth";
import { Modal } from "react-bootstrap";
import "./userWidget.css";

const UserWidget = () => {
  const { user, logout } = useUserAuth();
  const [isModalShow, setIsModalShow] = useState(false);

  const handleLogout = () => {
    setIsModalShow(false);
    logout();
  };

  return (
    <div className="UserWidget">
      <img
        onClick={() => setIsModalShow(!isModalShow)}
        src={user && user.photoURL ? user.photoURL : "./img/profilePicture.png"}
        alt="Foto de perfil"
      />

      <Modal
        className="UserWidget"
        dialogClassName="custom-dialog"
        contentClassName="custom-modal"
        show={isModalShow}
        onHide={() => setIsModalShow(!isModalShow)}
      >
        <Modal.Header className="flex-column">
          <img
            className="d-flex m-auto"
            src={
              user && user.photoURL ? user.photoURL : "./img/profilePicture.png"
            }
            alt="Foto de perfil"
          />
          {user && (
            <>
              <p className="m-0">
                <b>{user.displayName}</b>
              </p>
              <p className="m-0">{user.email}</p>
            </>
          )}
        </Modal.Header>
        <Modal.Body>
          {user ? (
            <div className="d-flex flex-column align-items-end">
              <button className="btnMain">Administrar cuenta</button>
              <small>
                <a href="#!" onClick={handleLogout}>
                  Cerrar sesión
                </a>
              </small>
            </div>
          ) : (
            <>
              <UserAuth />
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserWidget;
