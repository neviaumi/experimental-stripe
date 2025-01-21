import {loadStripe} from '@stripe/stripe-js';

const stripe = await loadStripe('pk_test_51QjpHmCxyzbnnwWwwrqigEyW8MISt7HTlfSmYsauk2nOMBoxLdhe4sfzX65psDdCxUTqtasHnrEPEIscBFTlu3WR006oqTLqv5');

export default function CheckoutButton() {
    // @ts-ignore
    return (<stripe-buy-button
        buy-button-id="buy_btn_1QjqMQCxyzbnnwWwlOBbBt12"
        publishable-key="pk_test_51QjpHmCxyzbnnwWwwrqigEyW8MISt7HTlfSmYsauk2nOMBoxLdhe4sfzX65psDdCxUTqtasHnrEPEIscBFTlu3WR006oqTLqv5"
    ></stripe-buy-button>)
}