import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What is Ampacity of CU Conductors?",
        value: "What is Ampacity of CU Conductors?"
    },
    { text: "What size breaker do I need for the CHSPT2 surge protector?", value: "What size breaker do I need for the CHSPT2 surge protector?" },
    { text: "What is the supplier policy on price increases?", value: "What is the supplier policy on price increases?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
