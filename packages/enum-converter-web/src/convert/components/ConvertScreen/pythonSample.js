export const PYTHON_SAMPLE_ENUM = `
from enum import Enum, auto, IntEnum

class Colors(Enum):
    Green = 1
    Yellow = auto()
    Blue = 'Blue'
    
class Pets(Enum):
    Dog = 1
    Cat = 2
    Mouse = 4


class ComplexExample(Enum):
    AndyFirst = 1
    DaveSecond = 2
    MouseThird = 4 
`;
