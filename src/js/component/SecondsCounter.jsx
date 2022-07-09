import React from 'react'
import PropTypes from 'prop-types';
function SecondsCounter(props){
    let seg= props.segundos;
    let minutos = 0;
    let horas = 0;
    let dias = 0;
    let minutosXdias = 0;
    let horasXdias = 0;
    if(props.segundos>9){
        minutos = Math.trunc(props.segundos / 10);
        seg = props.segundos % 10;
        if (minutos > 9){
            horas =  Math.trunc(minutos / 10);
            minutos = minutos % 10;
            if(horas > 9){
                dias = Math.trunc(horas / 10);
                horas = horas %  10;
                if(dias > 9){
                    minutosXdias = Math.trunc(dias / 10);
                    dias = dias % 10;
                    if(minutosXdias > 9){
                        horasXdias = Math.trunc(minutosXdias / 10);
                        minutosXdias = minutosXdias % 10;
                    }
                }
            }
        }
    }
    
    return(<div className="app d-flex justify-content-center">
   
    <div className="icon box"><i class="fas fa-atom"></i></div>
    <div className="counter box1">{horasXdias}</div>
    <div className="counter box2">{minutosXdias}</div>
    <div className="counter box3">{dias}</div>
    <div className="counter box4">{horas}</div>
    <div className="counter box5">{minutos}</div>
    <div className="counter box">{seg}</div>
</div>);
}
SecondsCounter.propTypes = {
  
  
    segundos:  PropTypes.number,
   };
export default SecondsCounter;