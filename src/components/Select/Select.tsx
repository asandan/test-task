import { InputPicker, InputPickerProps } from "rsuite"
import { PickerComponent } from "rsuite/esm/internals/Picker"
import "./index.scss"

export const Select: PickerComponent<InputPickerProps<any>> = (props) => {
  return <InputPicker {...props} />
}