import React, { FunctionComponent as FC } from "react";
import TODOI from "./TodoInterface";

interface Props {
    completedTodo(id: number): void;
    todos: TODOI[];
    deleteToto(id:number):void;
}
const TodoList: FC<Props> = ({ todos, completedTodo,deleteToto }) => {
    return (
        <div className="todolist">
            {todos.map((data) => {
                return (
                    <div className="todo" key={data.id}>
                        <div className={data.completed ? 'completetodo' : 'notcompletetodo'} 
                        onClick={() => (data.completed ? null :completedTodo(data.id) )}>{data.text}</div>
                        {data.completed && <button className="deletebutton" onClick={() => deleteToto(data.id)}>delete</button>}
                    </div>
                )
            })}
        </div>
    )
};

export default TodoList;