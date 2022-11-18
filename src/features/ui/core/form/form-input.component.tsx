import * as React from "react";
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { useController } from "react-hook-form";

import type { InputProps } from "../input.component";
import { Input } from "../input.component";

type TRule = Omit<
  RegisterOptions,
  "valueAsNumber" | "valueAsDate" | "setValueAs"
>;

export type RuleType<T> = { [name in keyof T]: TRule };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
};

interface FormInputProps<T extends FieldValues>
  extends InputProps,
    InputControllerType<T> {}

export function FormInput<T extends FieldValues>(props: FormInputProps<T>) {
  const { name, control, rules, ...inputProps } = props;

  const { field, fieldState } = useController({ control, name, rules });
  return (
    <Input
      autoCapitalize="none"
      onChangeText={field.onChange}
      value={field.value as string}
      {...inputProps}
      error={fieldState.error?.message}
    />
  );
}
