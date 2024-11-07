import {v4 as uuidv4} from "uuid";
import { useSetRecoilState } from "recoil";
import { characterListState, defaultAttributes} from "../atoms/atoms";

function AddNewCharacter(){
    const setCharacterList = useSetRecoilState(characterListState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCharacterList((oldList) => {
            const newCharacter = { ...defaultAttributes, id: uuidv4() };
            return [...oldList, newCharacter];
        });
    };
    return (
        <button onClick={onClick}>Add New Character</button>
    )

}
export default AddNewCharacter;