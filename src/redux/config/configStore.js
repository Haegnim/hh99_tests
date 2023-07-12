import { configureStore } from '@reduxjs/toolkit';
// import cards from '../modules/cardsSlice';
import card from '../modules/cardSlice';
import cards from '../modules/cardsSlice';
import comments from '../modules/commentSlice';
const store = configureStore({
    reducer: {
        cards,
        card,
        comments,
    },
});

export default store;
