import Data from '../../assests/Data'
import TableForm from "./TableForm";
import {useState} from "react";
import QuestionsTable from "./QuestionsTable";
import EditTable from "./EditTable";

const AdminPage = () => {
    const [questions , setQuestions] = useState(Data);
    const [edit, setEdit] = useState(null);

    return (
        <div style={{display: 'flex',gap:'20px', margin: "15px"}}>
            <div style={{flex: 2}}>
            <QuestionsTable setQuestions={setQuestions} questions={questions} setEdit={setEdit}/>
        </div>

            <div style={{flex: 1}}>
                {edit ? <EditTable edit={edit} setEdit={setEdit} questions={questions} setQuestions={setQuestions} /> :
                <TableForm questions={questions} setQuestions={setQuestions} />}
          </div>
        </div>
    );
}

export default AdminPage;
