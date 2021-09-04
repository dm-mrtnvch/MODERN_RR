import React, {useEffect, useState} from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        document.body.addEventListener('click', () => {
            setOpen(false)
            console.log('BODY CLICK');
        }, {capture: true})
    },[])

    const renderedOptions = options.map(option => {
        if(option.value === selected.value){
            return null
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => {
                    onSelectedChange(option)
                    console.log('ITEM CLICK');
                }}
            >
                {option.label}
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="label">Select a Color</label>
                    <div
                        onClick={() => {
                            setOpen(!open)
                            console.log('DROPDOWN CLICK');
                        }}
                        className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

};
export default Dropdown;