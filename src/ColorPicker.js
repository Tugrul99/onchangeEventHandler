import React, { useState } from "react";

function ColorPicker({ backgroundColor, onBackgroundColorChange }) {
    const [color, setColor] = useState("#34BB78")

    function handleColor(e) {
        setColor(e.target.value)
    }

    function handleChangeFood(e) {
        e.preventDefault();
        onBackgroundColorChange(color); // Seçilen rengi App bileşenine geri döndür
    }

    return (
        <div className="color-container">
            <h1> Color Picker </h1>
            <div className="color" style={{ backgroundColor: color }}>
                <p style={{ color: "white" }}> Selected color: {color}</p>
            </div>
            <div>
                <label>Please Select Color</label>
                <input className="color-input" type="color" value={color} onChange={handleColor}></input>
            </div>

            {/* Formun onSubmit olayını ekleyin */}
            <form onSubmit={handleChangeFood}>
                <h5>Wanna change Food section background ? </h5>
                <button style={{padding:"20px", borderRadius:"20px", backgroundColor: "slategrey"}} type="submit">Change</button>
            </form>
        </div>
    )
}

export default ColorPicker;
