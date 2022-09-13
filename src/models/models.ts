export interface IData {
    title: string,
    text: string,
    stack: Stack[],
}

export interface Stack {
    id: string | number,
    title: string,
}

export interface ButtonProps {
    dataLoad: () => void;
}