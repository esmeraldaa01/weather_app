import React from "react";
import "./QuestionsTable.css";

const QuestionsTable = ({ questions, setQuestions, setEdit }) => {

  const handleDeleteClick = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const handleEditClick = (question) => {
    setEdit(question.id);
  };

  return (
    <div>
      <table className={"table-controls"}>
        <caption>Quiz Questions CRUD</caption>
        <thead className={"table-header"}>
          <tr>
            <th>Title</th>
            <th>Answer</th>
            <th>Choices Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className={"table-body"}>
          { questions.map((question) => (
            <tr key={question.id}>
              <td>{question.title}</td>
              <td>{question.answer}</td>
              <td>
                <div className="row-dir">
                  {question.choices.map((choice) => (
                    <div key={choice.key}>{choice.title}</div>
                  ))}
                </div>
              </td>
              <td>
                <div className="row-dir">
                  <button onClick={() => handleEditClick(question)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteClick(question.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsTable;
