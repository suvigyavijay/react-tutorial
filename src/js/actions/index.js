// src/js/actions/index.js

import { ADD_ARTICLE, DELETE_ARTICLE } from '../constants/action-types';
//import {  } from '../constants/action-types';

export const addArticle = article => ({
    type: 'ADD_ARTICLE',
    payload: article
});

export const deleteArticle = articleIndex => ({
	type: 'DELETE_ARTICLE',
	payload: articleIndex
})