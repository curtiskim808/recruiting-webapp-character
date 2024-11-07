import { v4 as uuidv4 } from 'uuid';
import { atom, atomFamily } from 'recoil';
export interface IAttribute {
    'id': string,
    'Strength': number,
    'Dexterity': number,
    'Constitution': number,
    'Intelligence': number,
    'Wisdom': number,
    'Charisma': number,
};

export const defaultAttributes: IAttribute = {
    id: '',
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10,
};

export const attributeStateFamily = atomFamily<IAttribute, string>({
    key: "attributeStateFamily",
    default: defaultAttributes
});

export const characterListState = atom<IAttribute[]>(
    {
        key: "characterListState",
        default: [],
    }
)