# Numeric Keypad with Input Field

## **Overview**
This project implements a numeric keypad that updates an input field dynamically through button clicks or direct user input. The component created will be a common dependency and should prioritize encapsulation, reusability, and strict adherence to web standards. The functionality ensures seamless synchronization between the buttons and input field while providing a clean and user-friendly interface.

---

## **Acceptance Criteria**

1. The input field updates dynamically when:
   - The keypad buttons are clicked.
   - The user types directly into the input field.
2. **Numeric Buttons (`0-9` and `00`)**: Append the respective value to the input field.
3. **Clear Button (`C`)**: Clears the entire value of the input field.
4. The input field displays valid numeric input only.
5. Buttons and input field remain synchronized in behavior and updates.
6. Code is clean, modular, and adheres to React.js and TypeScript best practices, with a focus on accessibility, web standards, and strict type definitions.

   > Note: The `KeypadButtons` and `Input` components are primitive dependencies intended for composition into larger components. Their design should reflect this by prioritizing encapsulation and reusability.

### Example Usage
Here is an example of how the component you create will be used as dependencies in another application:

```tsx
<YourComponent
  name="phone_number"
  value={value}
  onChange={onChange}
  // should accept all html input element attributes as props
/>
```

---

## **Features**
- Fully functional **numeric keypad**.
- Input field supports:
   - Button-based input.
   - Manual user input.
- "C" button clears the entire input value.
- Keep these primitive components generic for reusability in future components:
   - `Input`
   - `KeypadButtons`
- One component encapsulating all the functionality detailed in the acceptance criteria
