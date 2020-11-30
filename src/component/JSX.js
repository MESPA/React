import React, { Fragment,useState } from 'react';

const temp = 19;
const Jsx  = () => {
    return ( 
        <Fragment>
        <h3>
            fro o calor
        </h3>
        <h4>
            {
            temp > 20 ? 'Calor': 'Frio'
            }
        </h4>
        </Fragment>
     );
}
 
export default Jsx ;
