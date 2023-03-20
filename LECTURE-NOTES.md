# React Forms and Controlled Components

## Goals
- Explain why we use controlled forms rather than uncontrolled forms
- Implement a controlled form
- Use form data to update state in a parent component
- Abstract form data to streamline your code

## Review
- State
- Forms
- Remember: JS Form Submit

## Controlled forms
![[Controlled form diagram]](https://curriculum-content.s3.amazonaws.com/react/react-forms/Image_21_FlowchartUpdate.png)
- Controlled form: a form that derives its input values from state

## Why controlled forms?
- single client-side source of truth
	- example: pre-populate an "edit profile" page with existing data
- allows multiple components to access user input
- storing user's changes in state will cause automatic re-render on any change
	- real-world examples: search suggestions ([Etsy](https://www.etsy.com/))
- can pass data as props or through inverse data flow
- can do cool stuff like validations

## Controlled components
### State stored in parent:
![[Controlled component diagram]](https://curriculum-content.s3.amazonaws.com/react/react-forms/Image_22_FlowchartReactProps.png)
### Sharing state-stored data with siblings:
![[Controlled component diagram with sibling]](https://curriculum-content.s3.amazonaws.com/react/react-forms/Image_23_FlowchartControlled.png)
[React docs on controlled components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)

## How to make a controlled form
Step 1. Create state
```js
const [inputString, setInputString] = useState("")
```
Step 2. Add ```onChange``` to input element --> set state
```js
function handleChange(e) {
	setInputString(e.target.value)
}

return (
	<input type="text" onChange={handleChange} />
)
```
Step 3. Add ```value``` attribute --> tracks the value stored in state
```html
<input type="text" onChange={handleChange} value={inputString} />
```

Step 4. Add ```onSubmit``` to form
```js
<form onSubmit={handleSubmit}>
```
- Must do steps 1-3 for each input. Tedious!

## Abstraction: making the process less repetitive
- Combine states in a way that makes sense
	- Create object to initialize state
```js
const [filterState, setFilterState]
	= useState({
		search: "",
		category: "Produce"
	})
```
- Change props, variables, and function names accordingly
	- Remember to keep controlled inputs
- Use ```name``` attribute on target elements to abstract your handler function
```js
<input
	type="text"
	name="search"
	placeholder="Search..."
	onChange={onHandleFilterChange}
	value={filterState.search}
/>
```
- Use spread operator to set state to current state object + the amended key-value pair
```js
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

```