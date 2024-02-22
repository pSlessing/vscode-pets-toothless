import { PetColor } from '../../common/types';
import { BasePetType } from '../basepettype';
import { States } from '../states';

export class Toothless extends BasePetType {
    label = 'toothless';
    static possibleColors = [
        PetColor.black
    ];
    sequence = {
        startingState: States.sitIdle,
        sequenceStates: [
            {
                state: States.sitIdle,
                possibleNextStates: [States.sitIdle],
            }
        ],
    };
    
    get emoji(): string {
        return '🐱';
    }
    get hello(): string {
        return `DO DO DO DO DO DOOOO`;
    }
    
    swipe() {
        
    }
}

export const TOOTHLESS_NAMES: ReadonlyArray<string> = [
    'Toothless',
];
