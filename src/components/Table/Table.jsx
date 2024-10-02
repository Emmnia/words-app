import "./Table.css";
import { words } from '/src/words.js'
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export const Table = () => {
    return (
        <table className="table">
            <thead>
                <tr className="table__header">
                    <th className="word-number"></th>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th className="actions"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="table__header">
                    <td><FaPlus /></td>
                    <td><input className="table__input" type="text" name="" id="" /></td>
                    <td><input className="table__input" type="text" name="" id="" /></td>
                    <td><input className="table__input" type="text" name="" id="" /></td>
                    <td>
                        <button type="button" className="button"><FaCheck /></button>
                        <button type="button" className="button"><FaUndoAlt /></button>
                    </td>
                </tr>
                {words.map((word, index) => {
                    return (
                        <tr className="table__row" key={word.id}>
                            <td>{index + 1}</td>
                            <td>{word.english}</td>
                            <td>{word.transcription}</td>
                            <td>{word.russian}</td>
                            <td>
                                <button type="button" className="button"><FaPencilAlt /></button>
                                <button type="button" className="button"><FaTrashAlt /></button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};
