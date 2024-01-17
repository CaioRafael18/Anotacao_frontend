import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio'
import './styles.css'

function RadioButton({selectValue, handleChange}){
    const CustomRadio = withStyles({
        root: {
          color:'#FFD3CA', '&$checked': {color: '#EB8F7A',},
        },
        checked: {},
      })((props) => <Radio color="default" {...props} />);
      
    return(
        <div className="radioOptions">
        <div>
            <CustomRadio
                checked={selectValue === 'all'}
                onChange={e => handleChange(e.target)}
                value="all"
            />
            <span>Todos</span>
        </div>
        <div>
            <CustomRadio
                checked={selectValue === 'true'}
                onChange={e => handleChange(e.target)}
                value="true"
            />
            <span>Prioridade</span>
        </div>
        <div>
            <CustomRadio
                checked={selectValue === 'false'}
                onChange={e => handleChange(e.target)}
                value="false"
            />
            <span>Normal</span>
        </div>
        </div>
    )
}

export default RadioButton