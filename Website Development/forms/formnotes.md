# Forms

The `<form>` element has **attributes** that are important in making the form function.

- `name`: The name attribute identifies the form itself. This allows you to grab or modify the form in JS or CSS. Here is an example if you wanted to style a form in CSS.

```css
[name] {
	// style
}
```

- `action`: The action attribute tells the form where to send the data from the form. Sort of like an `<a>`, but instead of navigating, its sending data.

- `method`: The method attrubite tells the browser how the data is sent to the server. In this class we will use **post**.

## Inputs and Field

**inputs** are how that data is entered into a form.

- `<input type="">`: The element is used to create entry fields for input in a form. The **type** attribute tells the browser what type of data you're expecting the user to enter the field.

```html
<input type="text">
<input type="password">
<input type="email">
<input type="number"> 
<input type="radio">
<input type="checkbox">
<input type="date">
<input type="submit">
```

- `<textarea></textarea>`: The text area element allows the user to write a larger amount of text. Input is inline and text area is block scoped.

`<label>`: The label element describes what input field is for, it also improves the screen reader ability. When you click on a label, it focuses the input element.

	- When using a label, best practice is to use an **explicit label**. The purpose make sure it is to make sure the browser knows exactly which input the label is pointing too.

### Submit & Reset

We listed `<input type="submit">` earlier, but it's a tad different than the other ones we listed. Submit allows the user to have a submit button for the form. So submit sends data, but in comparison,  reset clears form back to default, i.e. `<input type="reset">`.

- If you want to change what the submit says on it, you can use the **value** attribute.

## Post vs. Get

We talked about the method attribute earlier, but didn't explain it much. Post sends data securely in the request body. Get puts it in the URL making it better for simple queries. This class uses post due to security reasons.

### Fieldset & Legend

Similar to how `<tbody>` organized table data semantically, `<fieldset>` element groups related form elements. Also, similar to how `<thead>` creates a wrapper where you can title your form. 

```html
<fieldset>
    <legend>Choose a pizza crust</legend>
    <input type="radio" id="thin" value="thin" name="crust">
    <label for="thin">Thin-crust<label>

    <input type="radio" id="hand" value="hand" name="crust">
    <label for="hand">Hand-tossed<label>

    <input type="radio" id="deep" value="deep" name="crust">
    <label for="deep">Deep dish<label>
</fieldset>
```

### Dropdown Menus

Use the `<select>` element with several `<option>` elements, which will hold the menu choices.

```html
<label for="payment">Payment Type</label>
<select id="payment">
    <option>Cash</option>
    <option>Check</option>
    <option>Credit</option>
</select>
```

### Styling

Using display: block; and text-align: center; will help with some interesting styling quirks.




