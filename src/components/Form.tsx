import React, { FormEvent, FunctionComponent as FC, useState } from "react";
import TODOI from "./TodoInterface";

interface Props {
    addTodos(todo: string): void;
}

const Form: FC<Props> = ({ addTodos }) => {
    const [todo, setTodo] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!todo) {
            return window.alert("Please add the field");
        }

        addTodos(todo);
        setTodo('');
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add To do List"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)} />
                <button className="addbutton" type="submit">Add List</button>
            </form>
        </>
    );
};

export default Form;