import React from 'react';
import {render} from 'react-dom';

import FirstPage from './component/first-page/script';
import DescriptionPage from './component/description-page/script';

import './style.sass';


render(
    <div>
        <FirstPage />
        <DescriptionPage />
    </div>
    , document.querySelector('.pages'));
