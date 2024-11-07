import { calculateModifier } from "../utils/calculateModifiers";
import { IAttribute, characterListState, attributeStateFamily } from "../atoms/atoms";
import { useRecoilState } from "recoil";

interface AttributesControlProps {
    characterId: string;
}

function AttributesControl({ characterId }: AttributesControlProps) {
    const [attributes, setAttributes] = useRecoilState(attributeStateFamily(characterId));

    const updateAttribute = (key: keyof IAttribute, increment: number) => {
        setAttributes(prevAttributes => ({
            ...prevAttributes,
            [key]: (prevAttributes[key] as number) + increment,
        }));
    };
    return (
        <div>
            <h2>Attributes</h2>
            {Object.keys(attributes).map((key) => {
                const attributeKey = key as keyof IAttribute;
                if (attributeKey !== 'id') {
                    const value = attributes[attributeKey] as number;
                    return (
                        <div key={key}>
                            {key}: {value} (Modifier: {calculateModifier(value)})
                            <button onClick={() => updateAttribute(attributeKey, 1)}>+</button>
                            <button onClick={() => updateAttribute(attributeKey, -1)}>-</button>
                        </div>
                );
                }
                
            })}
        </div>
    )
}

export default AttributesControl;