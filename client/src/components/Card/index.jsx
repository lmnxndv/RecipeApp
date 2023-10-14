import React, { useState } from "react";
import { Rate, Modal } from "antd";
import "./style.css";

const Cards = ({
  name,
  image,
  rating,
  match,
  preparation,
  ingredients,
  time,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const activeModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="Card" onClick={activeModal}>
        <div className="card-img">
          <img src={image} alt={name} />
          <button onClick={toggleFavorite}>
            {isFavorite ? (
              <i className="fa-solid fa-heart active"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
          <span>{match}</span>
        </div>
        <div className="card-title">
          <p>{name}</p>
          <Rate disabled defaultValue={rating} />
        </div>
      </div>
      <Modal title={name} open={isModalVisible} onCancel={closeModal} footer={null}>
        <div className="modal-components">
          <img src={image} alt={name} />
          <div className="recipe-details">
            <div className="recipe-ingredients">
              <h3>Ingredients:</h3>
              {ingredients.map((item, index) => (
                <p key={index}>- {item}</p>
              ))}
            </div>
            <div className="recipe-preparation">
              <h3>Preparation:</h3>
              {preparation.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className="recipe-time">
              <p>
                <i className="fa-regular fa-clock fa-spin"></i> : {time} minutes
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Cards;
