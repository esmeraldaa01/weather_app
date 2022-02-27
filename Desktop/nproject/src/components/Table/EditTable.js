import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import "./TableForm.css";

const EditTable = ({ questions, setQuestions, edit, setEdit }) => {

  const [editQuestion, setEditQuestion] = useState({
    id: "",
    title: "",
    answer: " ",
    choices: [],
  });

  const handleFormChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newForm = { ...editQuestion };
    newForm[fieldName] = fieldValue;
    setEditQuestion(newForm);
  };

  useEffect(() => {

    const selectedQuestion = questions.find((question) => question.id === edit);
    setEditQuestion(selectedQuestion);

  }, [edit]);

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const editedQuestion = {
      id: edit,
      title: editQuestion.title,
      answer: editQuestion.answer,
      choices: editQuestion.choices,
    };

    const newEditedQuestions = [...questions];

    const index = questions.findIndex((question) => question.id === edit);

    newEditedQuestions[index] = editedQuestion;
    setQuestions(newEditedQuestions);
    setEdit(null);
  };

  const handleCancelClick = () => {
   setEdit(null)
  };

  return (
    <div className="container">
      <h2>Edit Question</h2>
      <div className="table-form">
        <label>Question Title </label>
        <Input
          name="title"
          onChange={handleFormChange}
          value={editQuestion.title}
        />
        <label>Correct Answer</label>
        <Input
          name="answer"
          onChange={handleFormChange}
          value={editQuestion.answer}
        />
        <label>Choices</label>
        <Input
          name="choices"
          onChange={handleFormChange}
          value={editQuestion.choices}
        />
      </div>
      <div className="action-buttons">
        <Button onClick={handleEditSubmit}>Save</Button>
        <Button onClick={handleCancelClick}>Cancel</Button>
      </div>
    </div>
  );
};
export default EditTable;
