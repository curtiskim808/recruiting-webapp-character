import React from 'react';
import { CLASS_LIST } from '../consts';
import { useRecoilValue } from 'recoil';
import { attributeStateFamily, IAttribute } from '../atoms/atoms';

interface ClassDisplayProps {
    characterId: string;
}


function ClassDisplay({ characterId }: ClassDisplayProps) {
    const currCharacter = useRecoilValue(attributeStateFamily(characterId));
    const [selectedClass, setSelectedClass] = React.useState<string | null>(null);
    const [selectedAttributes, setSelectedAttributes] = React.useState<IAttribute | null>(null);
    const meetsRequirements = (className: string) => {
        const requirements = CLASS_LIST[className];
        return Object.keys(requirements).every((key) => {
            return currCharacter[key] >= requirements[key];
        });
    }
    const onClick = (className: string) => {
        console.log(`Selected class: ${className}`);
        setSelectedClass(className);
        setSelectedAttributes(CLASS_LIST[className]);
    };
    return (
        <>
            <div key={characterId}>
                <br />
                <h2>Classes</h2>
                {Object.keys(CLASS_LIST).map(className => (
                    <div key={className}
                        style={{ color: meetsRequirements(className) ? 'red' : 'white' }}
                        onClick={() => onClick(className)}
                        >
                        {className}
                    </div>
                ))}
            </div>
            <br />
            <div>
                {selectedClass && (
                    <div>
                        <h2>{selectedClass} Minimum Requirements</h2>
                        <div>
                            {Object.keys(selectedAttributes).map((key) => {
                                const attributeKey = key as keyof IAttribute;
                                return (
                                    <div key={key}>
                                        {key}: {selectedAttributes[attributeKey]}
                                    </div>
                                );
                            })}
                        </div>
                        <button onClick={() => {setSelectedClass(null); setSelectedAttributes(null)}}>Close Requirment View</button>
                    </div>
                )}
                
            </div>
        </>
  );
};

export default ClassDisplay;
