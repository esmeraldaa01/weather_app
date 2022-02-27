import React, {useState} from "react";
import {Input , Button } from 'antd';
import './TableForm.css';

const TableForm = (props) => {

    const [addQuestion , setAddQuestion] = useState({
        id : "",
        title : "",
        answer : " ",
        choices : []
    })

    const handleAddChange = (event) => {
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;


        // if(fieldName === "choices"){
        //     // const array = eval('({ ' + fieldValue + ' })')
        //     console.log(fieldValue)
        //     const array = fieldValue.split(',');
        //     console.log('arr', array)
        
        // }

        const newForm = {...addQuestion}
        newForm[fieldName] = fieldValue;
        setAddQuestion(newForm);

    }

    const handeSubmit = (event) => {
        event.preventDefault();

        const newQuestion = {
            id :Math.random() ,
            title : addQuestion.title,
            answer : addQuestion.answer,
            choices : addQuestion.choices
        }
        
        const newQuestions = [...props.questions , newQuestion]
        props.setQuestions(newQuestions);
        
        setAddQuestion({
            id : "",
            title : "",
            answer : " ",
            choices : []
        });

    }

    const handleCancel = () => {
        setAddQuestion({
            id : "",
            title : "",
            answer : " ",
            choices : []
        });
    }

    return (
        <div className="container">
            <h2>Create Question</h2>
        <div className="table-form">
            <label>Question Title </label>
            <Input name="title" value={addQuestion.title} placeholder=" Enter a question title... " onChange={handleAddChange} />
            <label>Correct Answer</label>
            <Input name="answer" value={addQuestion.answer} placeholder=" Enter the correct answer... " onChange={handleAddChange}/>
            <label>Choices</label>
            <Input name="choices" value={addQuestion.choices} placeholder=" Enter answer options... " onChange={handleAddChange}/>
        </div>
            <div className="action-buttons">
                <Button onClick={handeSubmit}>Save</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </div>
        </div>
    )
}
export default TableForm;