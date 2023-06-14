import {Button, Kbd, Stack, TextInput} from "@mantine/core";
import { useState } from "react";
import { predict } from "./core";

export function App() {
  const [values, setValues] = useState("");
  const [sequence, setSequence] = useState<number[]>([]);
  return (
    <Stack>
      <TextInput value={values} onChange={(e) => {
        setValues(e.target.value);
      }} placeholder="Enter space separated positive integers"/>
      <Button onClick={() => {
        const numbers = values.trim().split(" ").map((ele) => Number.parseInt(ele, 10));
        setSequence(predict(numbers));
      }}>Calculate sequence</Button>
      <Kbd>
        Predicted sequence: {sequence.join(", ")}
      </Kbd>
    </Stack>
  );
}
