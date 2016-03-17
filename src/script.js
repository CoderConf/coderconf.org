import React from 'react';
import {render} from 'react-dom';

import FirstPage from './component/first-page/script';
import DescriptionPage from './component/description-page/script';
import BoardsPage from './component/boards-page/script';
import SubmitArticlePage from './component/submit-article-page/script';
import SchedulePage from './component/schedule-page/script';
import SponsorsPage from './component/sponsors-page/script';
import VenuePage from './component/venue-page/script';
import ContactPage from './component/contact-page/script';
import Divaider from './component/divider/script';

import './global/style.sass';


render(
    <div>
        <FirstPage />
            
        <DescriptionPage />
        <Divaider />

        <BoardsPage />
        <Divaider />

        <SubmitArticlePage />
        <Divaider />

        <SchedulePage />
        <Divaider />

        <SponsorsPage />
        <Divaider />

        <VenuePage />
        <Divaider />

        <ContactPage />
    </div>
    , document.querySelector('.main'));
