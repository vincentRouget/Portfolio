import React, { useContext, useEffect, useState } from "react";
import Switch from "react-switch";

const Toggle = ({ handleChange, admin, setAdmin, checked, setChecked }) => {

    return (
        <div className='Toggle'>
            <label>Administrateur&nbsp;&nbsp;?</label>
            <Switch
                checked={checked}
                value={admin}
                onChange={() => {
                    handleChange();
                }}
                offColor={"#858585"}
                onColor={"#54AE8A"}
            />
        </div>
    );
};

export default Toggle;