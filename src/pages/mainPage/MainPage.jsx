import React from 'react';
import Success from "../success/Success";
import Error from "../error/Error";

function MainPage() {
    const age = 51


    return (
        <div>
            {age > 17 && age < 50 ? <Success/> : <Error/>}
        </div>
    );
}

export default MainPage;