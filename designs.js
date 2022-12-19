// @description Selecting color input
const color = document.getElementById("colorPicker");

// @description Selecting size input
// @description Getting the selected inputHeight element using getElementById method
const input_height_element = document.getElementById("inputHeight");
//Reference for getting the value https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement/value
//https://www.w3schools.com/jsref/prop_text_value.asp


// @description Getting the selected inputWidth  element using getElementById method
const input_width_element = document.getElementById("inputWidth");

// @description Getting the form element by using getElementById method
const submit_Button = document.getElementById('sizePicker');

// @description Getting the table element using getElementById method
const pixel_Canvas = document.getElementById("pixelCanvas");
//console.log(pixel_Canvas);


//  @description When size is submitted by the user, call makeGrid()
//  @returns A table
function makeGrid() {
    // @description Getting the value of the height that the user has choosen
    const height = input_height_element.value;
    // @description Getting the value of the width that the user has choosen
    const width = input_width_element.value;
    // @description Finding the number of rows in the canvas table.
    // @description Reference https://www.w3schools.com/jsref/coll_table_rows.asp
    const old_rows_val = pixel_Canvas.rows.length;

    //@description If the old grid is already available then loop and delete all the rows, before creating a new grid based on user input
    for (let index = 0; index < old_rows_val; index++) {
        //@description Reference https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteRow
        //@description the special index -1 can be used to remove the very last row of a table.
        pixel_Canvas.deleteRow(-1)
    }

    //@description Now create the new grid based on user input
    //@description For every row, loop through inside to create number of columns
    //@description Nested loop to do this activity
    for (let index = 0; index < height; index++) {
         //@description Reference https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
         //@description Note: insertRow() inserts the row directly into the table.
        let row = pixel_Canvas.insertRow()

        for (let index = 0; index < width; index++) {
            //@description Reference https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/insertCell
            //@description Note: insertCell() inserts the cell directly into the row.
            let cell = row.insertCell()
        }
    }
};

//@description Submit Button Event listener
submit_Button.addEventListener('submit', function(event){
    event.preventDefault(); // This prevents the page from refreshing after clicking on submit button.
    //@description Make grid function call on click of submit button
    makeGrid();
});

//@description Event listener for any click event that happens in the pixel_Canvas
pixel_Canvas.addEventListener("click",function(event)
{
    //@description Reference https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    //@description https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName
    //@description https://learn.udacity.com/nanodegrees/nd040-ent-cognizant/parts/cd0339/lessons/ls1837/concepts/ba471028-f491-4002-91c1-826b93a3122a
    //When Combinely used will give the node name,
    //if the target node name is td then set the user chosen color value to the background of that node.
    if(event.target.nodeName.toLowerCase() === "td"){
        event.target.style.backgroundColor = color.value;
    }
});